/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import { useAxious } from "../hooks/useAxious";
import FavouritBlogs from "./FavouritBlogs";
import NormalBlogCard from "./NormalBlogCard";
import PopulatBloags from "./PopulatBloags";

// for tost

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { actions } from "../actions";
import { useProfile } from "../hooks/useProfile";
import { baseUrl } from "../utility";
import Follow from "./Follow";
import ReadingList from "./ReadingList";
import RecommendTopic from "./RecommendTopic";

const blogPerPage = 4;
let haseMoreOut = true;
export default function NormalBlogs() {
  const { api } = useAxious();
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMOre] = useState(true);
  const loaderRef = useState(null);
  // useing context
  const { state, dispatch } = useProfile();
  // console.log("state is : ", state);

  useEffect(() => {
    const loadBlog = async () => {
      // console.log(
      //   "inside loadBlog",
      //   blogs,
      //   "\n Page",
      //   page,
      //   "\n hasemore",
      //   hasMore,
      //   "loaderRef",
      //   loaderRef,
      //   "state",
      //   state
      // );
      try {
        const response = await axios.get(
          `${baseUrl()}/blogs/blog/?limit=${blogPerPage}&page=${page}`
        );

        if (response.status === 200) {
          // console.log("\n this is responce,", response);
          if (response?.data?.next === null) {
            // haseMoreOut = false;
            setHasMOre(false); //aita kaj kore na
            // console.log("sala tham amr r nei!", hasMore);
            if (response?.data?.results?.length > 0) {
              const data = response?.data?.results;
              setBlogs((prevProducts) => [...prevProducts, ...data]);

              // seting to context
              dispatch({
                type: actions?.profile?.DATA_FETCHED,
                data: response?.data?.results,
              });
            }

            toast("There is no new blog!");
          } else {
            const data = response?.data?.results;
            setBlogs((prevProducts) => [...prevProducts, ...data]);
            setPage((prevPage) => prevPage + 1);
            // seting to context
            dispatch({
              type: actions?.profile?.DATA_FETCHED,
              data: response?.data?.results,
            });
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
      console.log("load hosca karon :", observer, " && ", loaderRef.current);
      observer.observe(loaderRef.current);
    }

    // cleanup
    return () => {
      if (observer) observer.disconnect();
    };
  });

  return (
    <section className="overflow-auto">
      <div className="mx-auto sm:w-3/5">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-4 ">
          <div className="space-y-3 md:col-span-5  min-h-screen overflow-scroll ">
            {state?.posts &&
              state?.posts?.map((bl) => (
                <NormalBlogCard
                  blogs={blogs}
                  key={bl.id}
                  bl={bl}
                  setBlogs={setBlogs}
                />
              ))}
            {hasMore && <div ref={loaderRef}>Loading more blogs...</div>}
            <ToastContainer />
          </div>

          <div className="md:col-span-2 col-span-1  h-full w-full space-y-5 md:pl-12">
            <RecommendTopic />
            <PopulatBloags />
            <FavouritBlogs />
            <Follow />
            <ReadingList />
          </div>
        </div>
      </div>
    </section>
  );
}
