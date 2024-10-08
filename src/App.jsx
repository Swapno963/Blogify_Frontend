/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { Route, Routes } from "react-router-dom";
import FrontPage from "./FrontPage/FrontPage";
import NormalBlogs from "./HomePage/NormalBlogs";
import EditSingleBlog from "./SingleBlog/EditSingleBlog";
import SingleBlog from "./SingleBlog/SingleBlog";
import Login from "./UserActions/Login";
import Profile from "./UserActions/Profile";
import Register from "./UserActions/Register";
import SearchBlog from "./UserActions/SearchBlog";
import WriteBlog from "./UserActions/WriteBlog";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import PrivetRoutes from "./routes/PrivetRoutes";

export default function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={
        darkMode ? "bg-gray-900  text-gray-100 " : "text-gray-800 bg-gray-100"
      }
    >
      <div className="">
        <Navbar
          toggleDarkMode={toggleDarkMode}
          darkMode={darkMode}
          showSearch={showSearch}
          setShowSearch={setShowSearch}
        />
        {showSearch &&
          createPortal(
            <SearchBlog
              showSearch={showSearch}
              setShowSearch={setShowSearch}
            />,
            document.body
          )}
        <Routes>
          {/* this is for privet route */}
          <Route element={<PrivetRoutes />}>
            <Route element={<WriteBlog />} path="writeBlog" />
            <Route element={<Profile />} path="profile/:id" />
            <Route element={<EditSingleBlog />} path="editBlog/:id" />
          </Route>

          {/* without protected routes */}
          <Route element={<FrontPage />} path="/" exact />
          <Route element={<NormalBlogs />} path="/blogs" />
          <Route element={<SingleBlog />} path="detail/:id" />

          <Route element={<Login />} path="login" />
          <Route element={<Register />} path="register" />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </div>
      <div className=" mb-[-100px]">
        <Footer />
      </div>
    </div>
  );
}
