/* eslint-disable react/prop-types */
import { useRef } from "react";
import { actions } from "../actions";
import editImg from "../assets/icons/edit.svg";
import { useAxious } from "../hooks/useAxious";
import { useProfile } from "../hooks/useProfile";
import { baseUrl } from "../utility";

export default function ProfileImage({ otherUser, setOtherUser }) {
  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useProfile();
  const fileUploaderRef = useRef();
  const { api } = useAxious();

  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };

  const updateImageDisplay = async () => {
    try {
      const formData = new FormData();
      for (const file of fileUploaderRef.current.files) {
        formData.append("avatar", file);
      }

      const response = await api.post(
        `${baseUrl()}/profile/avatar`,
        formData
      );
      console.log(response);
      setOtherUser(response?.data?.user);
      if (response.status === 200) {
        dispatch({
          type: actions.profile.USER_DATA_EDITED,
          data: response?.data?.user,
        });
      }
    } catch (error) {
      dispatch({
        type: actions.profile.DATA_FETCH_ERROR,
        // eslint-disable-next-line no-undef
        error: err.message,
      });
    }
  };
  return (
    <div className="relative mb-8 max-h-[180px] max-w-[180px] h-[120px] w-[120px] rounded-full lg:mb-11 lg:max-h-[218px] lg:max-w-[218px]">
      {otherUser?.first_name ? (
        <div className="w-full h-full bg-orange-600 text-white grid place-items-center text-5xl rounded-full">
          {otherUser?.first_name && (
            <span className="">{otherUser?.first_name[0]}</span>
          )}
        </div>
      ) : (
        <img
          src={`${import.meta.env.VITE_SERVER_BASE_URL}/uploads/avatar/${
            otherUser?.avatar
          }`}
          alt="img"
        />
      )}

      <form id="form" encType="multipart/form-data">
        <button
          className="flex-center absolute bottom-4 right-4 h-7 w-7 rounded-full bg-black/50 hover:bg-black/80"
          onClick={handleImageUpload}
          type="submit"
        >
          <img src={editImg} alt="Edit" />
        </button>
        <input id="file" type="file" ref={fileUploaderRef} hidden />
      </form>
    </div>
  );
}
