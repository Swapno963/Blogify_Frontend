/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { useAxious } from "../hooks/useAxious";
import { useProfile } from "../hooks/useProfile";
import { baseUrl, isCommentAuthor, stringToObj } from "../utility";
import threeDots from "../assets/icons/3dots.svg";
import deleteLogo from "../assets/icons/delete.svg";
import { useState } from "react";
export default function CommentCard({ comment, blogId, setSingleBlog }) {
  const authorObject = stringToObj(comment?.user);
  // console.log(authorObject);

  const [showDots, setShowDots] = useState(false);
  const { api } = useAxious();

  const savedData = JSON.parse(localStorage.getItem("myData"));
  const userId = savedData?.user?.id;
  // console.log('local :',comment,blogId, setSingleBlog);

  // const handelCilick = async () => {
  //   // console.log('cliked',comment?.author?.id, state?.user?.id);
  //   try {
  //     // Make a DELETE request to the server
  //     const response = await api.delete(
  //       `${baseUrl()}/blogs/comment/delete/${blogId}/`,
  //     );
  //       console.log(response);
  //     // Check if the request was successful
  //     if (response.status === 200) {
  //       console.log("Data deleted successfully", response);
  //       setSingleBlog((prev) => ({
  //         ...prev,
  //         comments: response?.data?.comments,
  //       }));

  //       // Optionally, you can perform additional actions after deletion
  //     } else {
  //       console.error("Failed to delete data");
  //     }
  //   } catch (error) {
  //     console.error("Error deleting data:", error.message);
  //   }
  // };
  return (
    <div key={comment.id} className="relative flex items-start space-x-4 my-8">
      <div className="avater-img bg-orange-600 text-white">
        <span className="">{authorObject?.firstName[0]}</span>
      </div>
      <div className="w-full">
        <h5 className="text-slate -500 font-bold">
          {authorObject?.firstName} {authorObject?.lastName}
        </h5>

        <p className="text-slate-300">{comment?.content}</p>
      </div>

      {/* for delete */}
      {isCommentAuthor(authorObject?.id, userId) && (
        <div className="absolute right-0 top-0">
          <button onClick={() => setShowDots(!showDots)}>
            <img src={threeDots} alt="3dots of Action" />
          </button>

          {/* <div className="action-modal-container">
            {showDots && (
              <>
                <button
                  onClick={handelCilick}
                  className="action-menu-item hover:text-red-500"
                >
                  <img src={deleteLogo} alt="Delete" />
                  Delete
                </button>
              </>
            )}
          </div> */}
        </div>
      )}
    </div>
  );
}
