/* eslint-disable react/prop-types */
import favImg from "../assets/icons/heart.svg";
import heart from "../assets/icons/heart-filled.svg";
import { useAxious } from "../hooks/useAxious";
export default function Love({ singleBlog, setSingleBlog }) {
  console.log(singleBlog);
  const { api } = useAxious();
  const hadelLike = async () => {
    console.log("llike");
    const url = `http://localhost:3000/blogs/${singleBlog?.id}/favourite`;
    try {
      const response = await api.patch(url);
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
