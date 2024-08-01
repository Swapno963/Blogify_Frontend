/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import threeDots from "../assets/icons/3dots.svg";
import {
  getDateDifferenceFromNow,
  isCommentAuthor,
  stringToObj,
} from "../utility";
import DeleteBlog from "./DeleteBlog";
import EditBlog from "./EditBlog";
export default function NormalBlogCard({ bl, setBlogs, blogs }) {
  const savedData = JSON.parse(localStorage.getItem("myData"));
  const userId = savedData?.user?.id;
  const [showDots, setShowDots] = useState(false);
  const { user, content, title, thumbnail, likes, createdAt, id } = bl;
  // console.log("local :", userId, author?.id);

  // console.log(createdAt);
  // const keyValuePairs = author.slice(1, -1).split(',');
  // const authorObject = {};

  // // Loop through the key-value pairs and add them to the object
  // keyValuePairs.forEach(pair => {
  //     const [key, value] = pair.trim().split(':').map(item => item.trim());
  //     authorObject[key.replace(/'/g, '')] = value.replace(/'/g, '');
  // });
  const authorObject = stringToObj(user);
  // console.log(authorObject);
  // Parse the JSON string into a JavaScript object
  // const authorObject = JSON.parse(validJsonString);

  // console.log(authorObject);

  return (
    <>
      <Link
        to={`/detail/${id}`}
        className="blog-card my-6 py-3 hover:border-cyan-300 shadow-sm"
      >
        <img className="blog-thumb" src={thumbnail} alt="" />
        <div className="mt-2 relative">
          <p>
            <h3 className="text-slate-300 text-xl lg:text-2xl">
              <span>{title}</span>
            </h3>
          </p>
          <p className="mb-6 text-base text-slate-500 mt-1">
            {content.split(" ").slice(0, 20).join(" ")}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                {/* {user?.avatar ? (
                  <img
                    src={`${
                      import.meta.env.VITE_SERVER_BASE_URL
                    }/uploads/avatar/${author?.avatar}`}
                    alt=""
                  />
                ) : ( */}
                <span className="">
                  {authorObject?.firstName ? authorObject?.firstName[0] : ""}
                </span>
                {/* )} */}
              </div>

              <div>
                <h5 className="text-slate-300 text-xl font-bold ">
                  <Link to={`/profile/${authorObject?.id}`}>
                    {authorObject?.firstName} {authorObject?.lastName}
                  </Link>
                </h5>
                <div className="flex items-center  text-slate-600 ">
                  <span>{getDateDifferenceFromNow(createdAt)}</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>{likes} Likes</span>
            </div>
          </div>

          <div className="absolute right-0 top-0">
            {isCommentAuthor(userId, user?.id) && (
              <button onClick={() => setShowDots(!showDots)}>
                <img src={threeDots} alt="3dots of Action" />
              </button>
            )}

            <div className="action-modal-container">
              {showDots && (
                <>
                  <EditBlog id={id} />
                  <DeleteBlog id={id} blogs={blogs} setBlogs={setBlogs} />
                </>
              )}
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
