/* eslint-disable react/prop-types */
import { useState } from "react";
import heart from "../assets/icons/heart-filled.svg";
import favImg from "../assets/icons/heart.svg";
import useAuth from "../hooks/useAuth";
import { useAxious } from "../hooks/useAxious";
import { baseUrl } from "../utility";
export default function Love({ singleBlog, setSingleBlog }) {
  const [isLoved, setIsLoved] = useState(false);
  console.log(singleBlog);
  const { api } = useAxious();
  const { auth } = useAuth();
  const hadelLike = async () => {
    const url = `${baseUrl()}/blogs/love/`;
    try {
      // console.log("auth", auth);

      const response = await api.post(url, {
        lover: auth?.user?.id,
        blog: singleBlog?.id,
      });
      console.log(response);
      if (response.status == 200) {
        setIsLoved(true);
      }
      setSingleBlog((prev) => ({
        ...prev,
        isFavourite: response?.data?.isFavourite,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li>
      {isLoved ? (
        <img onClick={hadelLike} src={heart} alt="Favourite" />
      ) : (
        <img onClick={hadelLike} src={favImg} alt="Favourite" />
      )}
    </li>
  );
}
