/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-catch */
import axios from "axios";
import { useEffect } from "react";
import { api } from "../api";
import useAuth from "./useAuth";
import { baseUrl } from "../utility";
export const useAxious = () => {
  const { auth, updateData } = useAuth();
  useEffect(() => {
    // add request interceptor
    const requestIntercept = api.interceptors.request.use(
      (config) => {
        const authToken = auth?.authToken;
        if (authToken) {
          config.headers.Authorization = `Bearer ${authToken}`;
        }
        return config;
      },
      (error) => Promise.reject(error)
    );

    // add response intercepter
    const responcetIntercept = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        console.log("error from hook : ", error);
        const originalRequest = error.config;

        if (error?.response?.status === 401) {
          originalRequest._retry = true;
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${baseUrl()}/auth/token/refresh/`,
              { refresh: refreshToken }
            );
            console.log(
              "response after trying to ues refreshtoken :",
              response
            );
            const { access
            } = response.data;
            console.log(`new token : ${access}`);
            updateData({ ...auth, authToken: access });
            originalRequest.headers.Authorization = `Bearer ${access}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }

        // pfor invalid token and status code is 403
        if (error?.response?.status === 403) {
          console.log("came to 403");
          originalRequest._retry = true;
          try {
            const refreshToken = auth?.refreshToken;
            const response = await axios.post(
              `${import.meta.env.DJANGO_SERVER_BASE_URL}/auth/refresh-token`,
              { refreshToken }
            );
            console.log("response of 403 request: ", response);
            updateData({
              ...auth,
              authToken: response.data?.accessToken,
              refreshToken: response.data?.refreshToken,
            });
            originalRequest.headers.Authorization = `Bearer ${response.data?.accessToken}`;
            return axios(originalRequest);
          } catch (error) {
            throw error;
          }
        }
        return Promise.reject(error);
      }
    );

    // clean up
    return () => {
      api.interceptors.request.eject(requestIntercept);
      api.interceptors.response.eject(responcetIntercept);
    };
  }, [auth.authToken]);
  return { api };
};
