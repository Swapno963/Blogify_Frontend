/* eslint-disable react/prop-types */
import { useState } from "react";
import { Link } from "react-router-dom";
import closeImg from "../assets/icons/close.svg";
import { useAxious } from "../hooks/useAxious";
import useDebounce from "../hooks/useDebounce";
import { baseUrl } from "../utility";
export default function SearchBlog({ showSearch, setShowSearch }) {
  const [searchResult, setSearchResult] = useState([]);
  const [ssearchTermEmpty, setSearchTermEmpty] = useState(true);
  const { api } = useAxious();

  const doSearch = useDebounce(async (searchTerm) => {
    console.log(searchTerm);
    if (searchTerm.lenght !== 0) {
      setSearchTermEmpty(false);
    }

    // try catch
    try {
      const response = await api.get(
        `${baseUrl()}/blogs/blog/?search=${searchTerm}`
      );
      setSearchResult(response?.data);
      console.log("from search ;", response);
    } catch (error) {
      console.log("error from search, ", error);
    }
  });

  const hadelSearch = (e) => {
    const value = e?.target?.value;
    doSearch(value);
    // console.log(e.target.value);
  };
  return (
    <>
      <section className="absolute left-0 top-0 w-full h-full grid place-items-center bg-slate-800/50 backdrop-blur-sm z-50">
        <div className="relative w-6/12 mx-auto bg-slate-900 p-4 border border-slate-600/50 rounded-lg shadow-lg shadow-slate-400/10">
          <div>
            <h3 className="font-bold text-xl pl-2 text-slate-400 my-2">
              Search for Your Desire Blogs
            </h3>
            <input
              onChange={hadelSearch}
              type="text"
              placeholder="Start Typing to Search"
              className="w-full bg-transparent p-2 text-base text-white outline-none border-none rounded-lg focus:ring focus:ring-indigo-600"
            />
          </div>
          {/* showing search result */}
          <div className="">
            <h3 className="text-slate-400 font-bold mt-6">Search Results</h3>
            <div className="my-4 divide-y-2 divide-slate-500/30 max-h-[440px] overflow-y-scroll overscroll-contain">
              {searchResult?.map((blog) => (
                <div key={blog.id} className="flex gap-6 py-2">
                  <img
                    className="h-28 object-contain"
                    src={`${
                      import.meta.env.VITE_SERVER_BASE_URL
                    }/uploads/blog/${blog?.thumbnail}`}
                    alt=""
                  />
                  <div className="mt-2">
                    <Link
                      to={`/detail/${blog?.id}`}
                      className="text-slate-300 text-xl font-bold"
                    >
                      {blog?.title}
                    </Link>
                    <p className="mb-6 text-sm text-slate-500 mt-1">
                      {blog?.content.split(" ").slice(0, 20).join(" ")}
                    </p>
                  </div>
                </div>
              ))}

              {searchResult.length == 0 && (
                <p className="text-center py-3 pt-5">No Result Found!</p>
              )}
              {ssearchTermEmpty && (
                <p className="text-center py-3 pt-5">Search Something</p>
              )}
            </div>
          </div>
          {/* clos icon */}
          <a href="#" onClick={() => setShowSearch(!showSearch)}>
            <img
              src={closeImg}
              alt="Close"
              className="absolute right-2 top-2 cursor-pointer w-8 h-8"
            />
          </a>
        </div>
      </section>
    </>
  );
}
