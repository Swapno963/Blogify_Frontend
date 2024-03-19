/* eslint-disable react/prop-types */
import likeImg from "../assets/icons/like.svg";
import { useAxious } from "../hooks/useAxious";
import { baseUrl } from "../utility";
let isLiked = false;
export default function Like({ singleBlog,setSingleBlog }) {
  const { api } = useAxious();
  const hadelLike = async () => {
    if(isLiked) return ""
    // console.log("llike");
    const url = `${baseUrl()}/blogs/like/${singleBlog?.id}/`;
    try {
      const response = await api.get(url);
      console.log(response);
      setSingleBlog((prev) => ({ ...prev, likes: response?.data?.Count }));
      isLiked = true
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li onClick={hadelLike}>
      <img src={likeImg} alt="like" />
      <span>{singleBlog?.likes?.length}</span>
    </li>
  );
}
