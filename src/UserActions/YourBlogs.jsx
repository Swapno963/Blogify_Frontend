/* eslint-disable react/prop-types */
import { baseUrl, stringToObj } from "../utility";
export default function YourBlogs({ blog }) {
  const authorObject = stringToObj(blog?.author);
  console.log(blog);
  return (
    <div className="sm:w-3/5 w-full mx-auto">
      <div className="blog-card min-w-100px">
        <img
          className="blog-thumb"
          src={`${baseUrl()}/${blog?.thumbnail}`}
          alt=""
        />
        <div className="mt-2">
          <h3 className="text-slate-300 text-xl lg:text-2xl">
            {blog?.title.split(" ").slice(0, 10).join(" ")}
          </h3>
          <p className="mb-6 text-base text-slate-500 mt-1">
            {blog?.content?.split(" ").slice(0, 25).join(" ")}
          </p>

          <div className="flex justify-between items-center">
            <div className="flex items-center capitalize space-x-2">
              <div className="avater-img bg-indigo-600 text-white">
                <span className="">{authorObject[0]}</span>
              </div>

              <div>
                <h5 className="text-slate-500 text-sm">
                  {authorObject.firstName} {authorObject.className}
                </h5>
                <div className="flex items-center text-xs text-slate-700">
                  <span>June 28, 2018</span>
                </div>
              </div>
            </div>

            <div className="text-sm px-2 py-1 text-slate-700">
              <span>{blog.likes} Likes</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
