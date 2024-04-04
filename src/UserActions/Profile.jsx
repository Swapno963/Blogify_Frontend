/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import useAuth from "../hooks/useAuth";
import { useAxious } from "../hooks/useAxious";
import editImg from "../assets/icons/edit.svg";
import DoneImg from "../assets/icons/like.svg";
import { useProfile } from "../hooks/useProfile";
import { actions } from "../actions";
import ProfileInfo from "./ProfileInfo";
import ProfileImage from "./ProfileImage";
import { useNavigate, useParams } from "react-router-dom";
import YourBlogs from "./YourBlogs";
import axios from "axios";
import { baseUrl } from "../utility";

export default function Profile() {
  const navigate = useNavigate();

  const { id } = useParams();
  const [showYourBlog, setShowYourBlog] = useState(true);
  const { state, dispatch } = useProfile();
  const [showEditOpt, setShowEditOpt] = useState(false);
  const [otherUser, setOtherUser] = useState();
  // console.log('from profile ', state);
  const { api } = useAxious();
  const { auth } = useAuth();

  // console.log(state?.user?.bio);
  // if(state?.user?.id !== id){
  //   setShowYourBlog(false)
  // }
  useEffect(() => {
    dispatch({ type: actions?.profile?.DATA_FETCHING });
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `${baseUrl()}/auth/showProfile/${id}/`
        );
        if (response.status === 200) {
          // console.log("profile log response :", response);
          dispatch({
            type: actions?.profile?.DATA_FETCHED,
            data: response.data,
          });
          setOtherUser(response?.data);
          // console.log('response?.data',response?.data);
          // if(response?.data?.id === state?.user?.id){
          //   setShowEditOpt(true);
          // }
          // else{
          //   setShowEditOpt(false);
          // }
          // console.log(showEditOpt);
        }
      } catch (error) {
        // console.log(error);
        dispatch({
          type: actions?.profile?.DATA_FETCH_ERROR,
          error: error.message,
        });
      }
    };

    fetchProfile();
  }, [id]);

  if (state?.loading) {
    return <div> Fetching your Profile data...</div>;
  }
  // console.log(state);

  return (
    <>
      <main className="mx-auto py-8 mb-[67px]">
        <div className="container">
          <div className="flex flex-col items-center py-8 text-center">
            <ProfileImage otherUser={otherUser} setOtherUser={setOtherUser} />
            <div>
              {otherUser?.first_name && (
                <h3 className="text-2xl font-semibold text-white lg:text-[28px]">
                  {otherUser?.first_name} {otherUser?.last_name}
                </h3>
              )}

              <p className="leading-[231%] lg:text-lg">{state?.user?.email}</p>
            </div>
            <ProfileInfo otherUser={otherUser} setOtherUser={setOtherUser} />
            {/* <h3>lkdk</h3> */}
            {/* for blog section */}
            {otherUser?.BlogUser?.length == 0 ? (
              <h2 className="mt-6 text-xl lg:mt-8 lg:text-2xl ">
                There is no Blog,
                <span
                  className="text-blue-600 font-bold text-[16px] cursor-pointer"
                  onClick={() => navigate("/writeBlog")}
                >
                  Write One
                </span>
              </h2>
            ) : (
              <h4 className="mt-6 text-xl lg:mt-8 lg:text-2xl">Your Blogs</h4>
            )}
            <div className="my-6 space-y-4">
              {otherUser?.BlogUser?.map((blog) => (
                <YourBlogs key={blog.id} blog={blog} />
              ))}
            </div>
            <div className="w-3/4 border-b border-[#3F3F3F] py-6 lg:py-8"></div>
          </div>
        </div>
      </main>
    </>
  );
}
