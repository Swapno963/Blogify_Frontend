/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { useAxious } from "../hooks/useAxious";
import { Link } from "react-router-dom";
import { baseUrl, stringToObj } from "../utility";

export default function FavouritBlogs() {
  const [favBlogs, setFabBlogs] = useState([]);
  const { api } = useAxious();
  useEffect(() => {
    const loadFavouritBlog = async () => {
      try {
        const response = await api.get(`${baseUrl()}/blogs/love`);
        // console.log(response);
        setFabBlogs(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    loadFavouritBlog();
  }, []);
  // console.log(favBlogs);
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Your Favourites ❤️
      </h3>

      <ul className="space-y-5 my-5">
        {favBlogs.length == 0 && <h2>There is no Favourit blog</h2>}
        {favBlogs.length !== 0 &&
          favBlogs.map((blog) => (
            <li key={blog.id}>
              <Link
                to={`detail/${blog?.id}`}
                className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
              >
                {stringToObj(blog?.user)["title"]}{" "}
              </Link>
              <p className="text-slate-600 text-sm">
                by{" "}
                <span className="text-slate-200 font-medium hover:text-slate-400 transition-all cursor-pointer">
                  {" "}
                  {stringToObj(blog?.user)["firstName"]}{" "}
                </span>
                {/* {blog?.tags.split(",").map((b) => (
                  <span key={b}>#{b} </span>
                ))} */}
                {/* #tailwindcss, #server, #ubuntu */}
              </p>
            </li>
          ))}
      </ul>
    </div>
  );
}
