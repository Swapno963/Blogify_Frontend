/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { actions } from "../actions";
import editImg from "../assets/icons/edit.svg";
import { useAxious } from "../hooks/useAxious";
import { useProfile } from "../hooks/useProfile";
import { baseUrl } from "../utility";
export default function ProfileInfo({ otherUser, setOtherUser }) {
  const { api } = useAxious();

  const [editMode, setEditMode] = useState(false);
  const { state, dispatch } = useProfile();
  const [bio, setBio] = useState();
  const formData = new FormData();
  formData.append("firstName", state?.user?.firstName);
  formData.append("lastName", state?.user?.lastName);

  useEffect(() => {
    setBio(otherUser?.bio);
  }, [otherUser]);
  console.log("otherUser", otherUser);
  console.log("state", state.user);

  const handleBioEdit = async () => {
    dispatch({ type: actions.profile.DATA_FETCHING });

    try {
      const response = await api.patch(`${baseUrl()}/auth/profile/`, {
        // firstName: state?.user?.firstName,
        // lastName: state?.user?.lastName,
        bio,
      });
      // console.log("response is :", response);
      if (response.status === 200) {
        setOtherUser({ ...otherUser, bio: bio });
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response?.data?.user,
        });
      }
      setEditMode(false);
    } catch (err) {
      console.log(err);
      // dispatch({
      //     type: actions.profile.DATA_FETCH_ERROR,
      //     error: err.message,
      // });
    }
  };
  return (
    <div className="mt-4 flex items-start gap-2 lg:mt-6">
      <div className="flex-1">
        {!editMode ? (
          <p className="leading-[188%] text-gray-400 lg:text-lg">{bio}</p>
        ) : (
          <textarea
            cols="55"
            rows="5"
            value={bio}
            className="p-2 text-gray-600 rounded-md"
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        )}
      </div>
      {!editMode ? (
        <button
          onClick={() => setEditMode(true)}
          className="flex-center h-7 w-7 rounded-full"
        >
          <img src={editImg} alt="Edit" />
        </button>
      ) : (
        <div className="">
          <button
            onClick={handleBioEdit}
            className=" rounded-md font-bold bg-blue-700 px-3 py-2 mb-3"
          >
            Update
          </button>{" "}
          <br />
          <button
            onClick={() => setEditMode(false)}
            className=" rounded-md font-bold bg-gray-700 px-3 py-2"
          >
            Cancle
          </button>
        </div>
      )}
    </div>
  );
}
