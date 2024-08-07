/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import logo from "../assets/blogify.png";
import searchLogo from "../assets/icons/search.svg";
import useAuth from "../hooks/useAuth";
import { useProfile } from "../hooks/useProfile";
import Logout from "./Auth/Logout";

export default function Navbar({
  darkMode,
  toggleDarkMode,
  showSearch,
  setShowSearch,
}) {
  const { auth } = useAuth(); // in auth.use we can get all the user info
  // console.log("from naavbar, looking for user data", auth);
  // if(auth.user){
  //   const { firstName, avatar, id } = auth?.user;
  // }
  // console.log("auth is:", auth);

  // eslint-disable-next-line no-unused-vars
  const { state, dispatch } = useProfile();
  // console.log(state);
  return (
    <header className="bg-gray-800  sm:h-[100px] mb-[-1px]  h-auto sm:flex-col flex-row items-center">
      <nav className="container   ">
        <div>
          <Link to="/">
            <img className="w-24 h-[65px]" src={logo} alt="lws" />
          </Link>
        </div>

        <Link
          onClick={() => setShowSearch(!showSearch)}
          to="#"
          className="flex items-center gap-2 cursor-pointer mt-[-20px] sm:mt-[0px]"
        >
          <img src={searchLogo} alt="Search" />
          <span>Search</span>
        </Link>

        <div>
          <ul className="flex items-center space-x-5">
            <li>
              <button
                className="bg-indigo-600 text-white px-6 py-2  rounded-md hover:bg-indigo-700 transition-all duration-200"
                onClick={toggleDarkMode}
              >
                {darkMode ? "Light Mode" : "Dark Mode"}{" "}
              </button>
            </li>
            <li>
              <Link
                to="writeBlog"
                className="bg-indigo-600 text-white px-6 py-2  rounded-md hover:bg-indigo-700 transition-all duration-200"
              >
                Write
              </Link>
            </li>

            {!auth?.user?.id ? (
              <li>
                <Link
                  to="login"
                  className="text-white/50 hover:text-white transition-all duration-200"
                >
                  Login
                </Link>
              </li>
            ) : (
              <>
                <li className="flex items-center">
                  <div className="avater-img text-white">
                    {auth?.user?.avatar ? (
                      <img
                        className="rounded-full"
                        src={`${
                          import.meta.env.VITE_SERVER_BASE_URL
                        }/uploads/avatar/${auth?.user?.avatar}`}
                        alt=""
                      />
                    ) : (
                      <div className=" bg-orange-600 avater-img">
                        <span className="">{auth?.user?.firstName[0]}</span>
                      </div>
                    )}
                  </div>

                  <Link to={`profile/${auth?.user?.id}`}>
                    <span className="text-white ml-2">
                      {auth?.user?.firstName}
                    </span>
                  </Link>
                </li>

                <Logout />
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
}
