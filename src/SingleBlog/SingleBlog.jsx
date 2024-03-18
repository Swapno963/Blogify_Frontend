/* eslint-disable react/no-unescaped-entities */
import commentImg from "../assets/icons/comment.svg";
import Comments from "./Comments";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Like from "./Like";
import Love from "./Love";
import { baseUrl, stringToObj } from "../utility";
export default function SingleBlog() {
  const { id } = useParams();
  // console.log("you have clidked :", id);
  const [singleBlog, setSingleBlog] = useState();
  useEffect(() => {
    const url = `${baseUrl()}/blogs/blog/${id}`
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        
        setSingleBlog({...data,user:stringToObj(data?.user)})
      })
      .catch((error) => {
        // Handle error
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

  
  // const newAuthor = stringToObj(singleBlog?.author)
  console.log(singleBlog);

console.log(singleBlog);
  const textWithNewlines = singleBlog?.content;
  const htmlContent = textWithNewlines?.replace(/\n/g, "<br>");
  return (
    <>
      <main>
        <section>
          <div className="container text-center py-8">
            <h1 className="font-bold text-3xl md:text-5xl">
              {singleBlog?.title}
            </h1>
            <div className="flex justify-center items-center my-4 gap-4">
              <div className="flex items-center capitalize space-x-2">
                <div className="avater-img bg-indigo-600 text-white">
                  <span className=" ">
                    {singleBlog?.user?.firstName &&
                      singleBlog?.user?.firstName[0]}
                  </span>
                </div>
                <Link to={`/profile/${singleBlog?.user?.id}`} className="text-slate-500 text-sm">
                  {singleBlog?.user?.firstName}
                </Link>
              </div>
              <span className="text-sm text-slate-700 dot">June 28, 2018</span>
              <span className="text-sm text-slate-700 dot">
                {singleBlog?.likes} Likes
              </span>
            </div>
            <img
              className="mx-auto w-full md:w-8/12 object-cover h-80 md:h-96"
              src={singleBlog?.thumbnail
              }
              alt=""
            />

            <ul className="tags">
              {singleBlog?.tags?.split(",").map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>

            <div className="mx-auto w-full md:w-10/12 text-slate-300 text-base md:text-lg leading-8 py-2 !text-left">
              {/* {singleBlog?.content} */}
              <p dangerouslySetInnerHTML={{ __html: htmlContent }}></p>
            </div>
          </div>
        </section>

        <Comments
          setSingleBlog={setSingleBlog}
          comment_writer={singleBlog?.comment_writer}
          blogId={singleBlog?.id}
        />
      </main>
      {/* floating action */}
      <div className="floating-action">
        <ul className="floating-action-menus">
          <Like singleBlog={singleBlog} setSingleBlog={setSingleBlog} />

          <Love singleBlog={singleBlog} setSingleBlog={setSingleBlog} />
          <a href="#comments">
            <li>
              <img src={commentImg} alt="Comments" />
              <span>{singleBlog?.comments?.length}</span>
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
