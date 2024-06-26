import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { baseUrl, stringToObj } from "../utility";

export default function PopulatBloags() {
  const [popularBlog, setpopularBlog] = useState();
  useEffect(() => {
    const url = `${baseUrl()}/blogs/popular/`;
    // console.log(import.meta.env);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setpopularBlog(data);
      })
      .catch((error) => {
        // Handle error
        console.error("There was a problem with the fetch operation:", error);
      });
  }, []);
  // const authorObject = stringToObj(author)

  // console.log("popular blog :", popularBlog);
  return (
    <div className="sidebar-card">
      <h3 className="text-slate-300 text-xl lg:text-2xl font-semibold">
        Most Popular 👍️
      </h3>

      <ul className="space-y-5 my-5">
        {popularBlog?.map((blog) => (
          <li key={blog.id}>
            <Link
              to={`detail/${blog?.id}`}
              className="text-slate-400 font-medium hover:text-slate-300 transition-all cursor-pointer"
            >
              {blog?.title}
            </Link>
            <p className="text-slate-600 text-sm">
              by
              <Link
                className="hover:text-gray-300 text-blue-300 font-semibold"
                to={`/profile/${stringToObj(blog?.user).id}`}
              >
                {" "}
                {stringToObj(blog?.user).firstName}{" "}
                {stringToObj(blog?.user).lastName}
              </Link>
              <span>·</span> {blog?.likes} Likes
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
