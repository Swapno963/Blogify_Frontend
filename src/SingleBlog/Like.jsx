/* eslint-disable react/prop-types */
import likeImg from "../assets/icons/like.svg";
import { useAxious } from "../hooks/useAxious";

export default function Like({ singleBlog,setSingleBlog }) {
  const { api } = useAxious();
  const hadelLike = async () => {
    console.log("llike");
    const url = `http://localhost:3000/blogs/${singleBlog?.id}/like`;
    try {
      const response = await api.post(url);
      console.log(response);
      setSingleBlog((prev) => ({ ...prev, likes: response?.data?.likes }));

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
