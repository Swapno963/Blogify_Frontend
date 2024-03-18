/* eslint-disable no-unused-vars */
/* eslint-disable no-extra-boolean-cast */
/* eslint-disable react/no-unescaped-entities */

import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { actions } from "../../actions";
import useAuth from "../../hooks/useAuth";
import { useProfile } from "../../hooks/useProfile";
import Field from "../common/Field";

export default function LoginForm() {
  const { state, dispatch } = useProfile();

  const navigate = useNavigate();
  const { updateData } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    console.log(formData);
    // make an api cal
    // will will return tokens and logedin
    try {
      const responce = await axios.post(
        // `${import.meta.env.DJANGO_SERVER_BASE_URL}/auth/login/`,
        "http://127.0.0.1:8000/auth/login/",
        formData
      );
      console.log(responce);
      if (responce.status === 200) {
        const { token, user } = responce.data;
        // console.log('user for login ',user);
        // dispatch({type:actions.USER_DATA_EDITED,responce})
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: user,
        });
        if (token) {
          // console.log("all token ;",token);
          const authToken = token.accessToken;
          const refreshToken = token.refreshToken;
          console.log("authToken :", authToken);
          console.log("refreshToken :", refreshToken);
          updateData({ user, authToken, refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("root.random", {
        type: "random",
        message: error?.response?.data?.error,
      });
    }
  };
  return (
    <form onSubmit={handleSubmit(submitForm)} action="" >
      <div className="mb-6">
        <Field label="Email" error={errors.email}>
          <input
            {...register("email", { required: "Email Id is required!" })}
            type="email"
            id="email"
            name="email"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !!errors.email ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <div className="mb-6">
        <Field label="Password" error={errors.password}>
          <input
            {...register("password", {
              required: "Password Id is required!",
              minLength: {
                value: 8,
                message: "Your password must be at least 8 characters!",
              },
            })}
            type="password"
            id="password"
            name="password"
            className={`w-full p-3 bg-[#030317] border
                  // eslint-disable-next-line no-extra-boolean-cast
                  ${
                    !!errors.password ? "border-red-500" : ""
                  } border-white/20 rounded-md focus:outline-none focus:border-indigo-500`}
          />
        </Field>
      </div>
      <p>{errors?.root?.random?.message}</p>
      <div className="mb-6">
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition-all duration-200"
        >
          Login
        </button>
      </div>
      <p className="text-center">
        Don't have an account?{" "}
        <Link to="/register" className="text-indigo-600 hover:underline">
          Register
        </Link>
      </p>
    </form>
  );
}
