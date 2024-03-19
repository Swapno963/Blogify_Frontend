/* eslint-disable react/prop-types */
import favImg from "../assets/icons/heart.svg";
import heart from "../assets/icons/heart-filled.svg";
import { useAxious } from "../hooks/useAxious";
import { baseUrl } from "../utility";
import useAuth from "../hooks/useAuth";
export default function Love({ singleBlog, setSingleBlog }) {
  console.log(singleBlog);
  const { api } = useAxious();
  const {auth} = useAuth()
  const hadelLike = async () => {
    console.log("llike");
    const url = `${baseUrl()}/blogs/love/`;
    try {
      const response = await api.post(url,{'lover':auth?.user?.id,'blog':singleBlog?.id});
      console.log(response);
      setSingleBlog((prev) => ({
        ...prev,
        isFavourite: response?.data?.isFavourite,
      }));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li >
      {singleBlog?.isFavourite ? (
        <img onClick={hadelLike} src={heart} alt="Favourite" />
      ) : (
        <img onClick={hadelLike} src={favImg} alt="Favourite" />
      )}
    </li>
  );
}
