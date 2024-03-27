/* eslint-disable no-unused-vars */
import { useState } from "react";
import { createPortal } from "react-dom";
import { Route, Routes } from "react-router-dom";
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
import FrontPage from "./FrontPage/FrontPage";

export default function App() {
  const [showSearch, setShowSearch] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <div
      className={
        darkMode ? "bg-[#030317] text-white " : "text-gray-800 bg-gray-50"
      }
    >
      <div className="mb-[-128px]">
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
            <Route element={<SingleBlog />} path="detail/:id" />
            <Route element={<EditSingleBlog />} path="editBlog/:id" />
          </Route>

          {/* without protected routes */}
          <Route element={<FrontPage />} path="/" exact />
          <Route element={<NormalBlogs />} path="/blogs"/>
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
