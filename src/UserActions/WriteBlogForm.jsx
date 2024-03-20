/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useForm } from "react-hook-form";
import Field from "../components/common/Field";
import { useEffect, useRef, useState } from "react";
import { useAxious } from "../hooks/useAxious";
import { useNavigate } from "react-router-dom";
import img from "../assets/blogs/taiulwind-cn-thumb.jpg";
import axios from "axios";
import { baseUrl } from "../utility";
import useAuth from "../hooks/useAuth";
export default function WriteBlogForm({ isEditing = false, blogToEdit = {} }) {
  const { auth } = useAuth();
  const navigate = useNavigate();
  const { api } = useAxious();
  const [data, setData] = useState({});
  const fileUploaderRef = useRef();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    setError,
  } = useForm();
  useEffect(() => {
    if (isEditing) {
      console.log(isEditing, blogToEdit);

      setValue("title", blogToEdit?.title);
      setValue("tags", blogToEdit?.tags);
      setValue("content", blogToEdit?.content);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [blogToEdit]);
  const handleImageUpload = (event) => {
    event.preventDefault();
    fileUploaderRef.current.addEventListener("change", updateImageDisplay);
    fileUploaderRef.current.click();
  };
  const updateImageDisplay = () => {
    // const formDatas = new FormData();

    for (const thumbnail of fileUploaderRef.current.files) {
      // formDatas.append("avatar", thumbnail);
      // console.log(file);
      setData({ ...data, thumbnail });
      console.log(thumbnail);
    }
  };
  const submitForm = (Data) => {
    console.log(data);
    const formData = {
      'title': Data.title,
      'thumbnail': data.thumbnail
      ,
      'content': Data.content,
      // "tag": [],
      'likes': "0",
      'user': auth.user?.id,
    };
    console.log(FormData);
    UploadToServer(formData);
  };

  const postRequest = async (Data) => {
    const responce = await axios.post(`${baseUrl()}/blogs/write/`,Data);
    return responce;
  };
  const patchRequest = async (Data) => {
    const responce = await api.patch(
      `${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${blogToEdit?.id}`,
      Data
    );
    return responce;
  };

  const UploadToServer = async (mainData) => {
    try {
      const responce = !isEditing
        ? await postRequest(mainData)
        : await patchRequest(mainData);
      console.log(responce);
      if (isEditing) {
        navigate(`/detail/${blogToEdit?.id}`);
      } else {
        navigate(`/detail/${responce?.data?.id}`);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(submitForm)}
      action="#"
      method="POST"
      className="createBlog"
    >
      <div className="grid place-items-center bg-slate-600/20 h-[150px] rounded-md my-4">
        <div className="flex items-center gap-4 hover:scale-110 transition-all cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <p
            // {...register("file", { required: "File  is required!" })}
            onClick={handleImageUpload}
          >
            Upload Your Image
          </p>
          <input id="thumbnail" type="file" ref={fileUploaderRef} hidden />
        </div>
      </div>
      <div className="mb-6">
        <Field label="" error={errors.title}>
          <input
            {...register("title", { required: "Title  is required!" })}
            type="text"
            id="title"
            name="title"
            placeholder="Enter your blog title"
          />
        </Field>
      </div>

      {/* <div className="mb-6">
        <Field label="" error={errors.tag}>
          <input
            {...register("tag", { required: "Tags  is required!" })}
            type="text"
            id="tag"
            name="tag"
            placeholder="Your Comma Separated Tags Ex. JavaScript, React, Node, Express,"
          />
        </Field>
      </div> */}

      <div className="mb-6">
        <Field label="" error={errors.content}>
          <textarea
            {...register("content", { required: "Content  is required!" })}
            id="content"
            name="content"
            placeholder="Write your blog content"
            rows="8"
          ></textarea>
        </Field>
      </div>

      <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
        {!isEditing ? "Create Blog" : "Edit It"}
      </button>
    </form>
  );
}
