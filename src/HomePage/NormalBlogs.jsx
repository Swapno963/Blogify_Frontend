/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import FavouritBlogs from "./FavouritBlogs";
import NormalBlogCard from "./NormalBlogCard";
import PopulatBloags from "./PopulatBloags";
import { useAxious } from "../hooks/useAxious";
import axios, { isCancel, AxiosError } from "axios";

// for tost

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { baseUrl } from "../utility";

const blogPerPage = 3;
export default function NormalBlogs() {
  const { api } = useAxious();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMOre] = useState(true);
  const loaderRef = useState(null);

  useEffect(() => {
    const loadBlog = async () => {
      try {
        const response = await axios.get(`${baseUrl()}/blogs/blog/`);
        console.log(response);

        if (response.status === 200) {
          if (response?.data?.results?.length === 0) {
            setHasMOre(false);
            // console.log("sala tham amr r nei!");

            toast("There is no new blog!");
          } else {
            const data = response?.data;
            setBlogs((prevProducts) => [...prevProducts, ...data]);
            setPage((prevPage) => prevPage + 1);
          }
        }
      } catch (error) {
        console.log(error);

        // dispatch({
        //     type: actions.profile.DATA_FETCH_ERROR,
        //     error: err.message,
        // });
      }
    };

    const onIntersection = (items) => {
      const loaderItem = items[0];

      if (loaderItem.isIntersecting && hasMore) {
        loadBlog();
      }
    };
    const observer = new IntersectionObserver(onIntersection);

    if (observer && loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  });

  return (
    <section className=" ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
          <div className="space-y-3 md:col-span-5  h-screen">
            {blogs &&
              blogs.map((bl) => (
                <NormalBlogCard
                  blogs={blogs}
                  key={bl.id}
                  bl={bl}
                  setBlogs={setBlogs}
                />
              ))}
            {hasMore && <div ref={loaderRef}>Loading more products...</div>}
            <ToastContainer />
          </div>

          <div className="md:col-span-2 h-full w-full space-y-5">
            <PopulatBloags />
            <FavouritBlogs />
          </div>
        </div>
      </div>
    </section>
  );
}
