/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";
import { useForm } from "react-hook-form";
import Field from "../components/common/Field";
import { useAxious } from "../hooks/useAxious";

import useAuth from "../hooks/useAuth";
import CommentCard from "./CommentCard";
import axios from "axios";
import { baseUrl } from "../utility";
export default function Comments({ comment_writer, blogId, setSingleBlog }) {
  const { api } = useAxious();
  const { auth } = useAuth(); // in auth.use we can get all the user info
  // console.log(auth?.user?.id);

  // const [ourComment, setOurComment] = useState([]);
  // console.log(blogId);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset 
  } = useForm();

  const submitForm = (formData) => {
    UploadToServer({ formData, blogId });
  };

  const UploadToServer = async ({ formData, blogId }) => {
    // console.log(formData, ", blogid :", blogId);
    //   const data = {
    //     'content':formData.content,
    //     'author':'gfdg fdf',
    //     'blog':'Dev Retro 2022: What made me a better developer this year?'

    // }
    const data = {
      content: formData.content,
      // 'author':auth?.user?.id,
      author: auth?.user?.id,
      blog: blogId,
    };
    console.log(data);
    try {
      const responce = await api.post(
        `${baseUrl()}/blogs/comment/${blogId}/`,
        // `http://127.0.0.1:8000/blogs/comment/5`,
        data
      );
      reset()
      const commentData = responce?.data?.data;
      // const updateComments = [...comment_writer,...commentData]
      // console.log(commentData);
      // console.log(responce);
      // console.log(updateComments);
      setSingleBlog((prev) => ({
        ...prev,
        comment_writer: [...comment_writer, commentData],
      }));

      // setOurComment([...ourComment, responce?.data?.data]);
      // console.log(responce);
    } catch (error) {
      console.log(error);
    }
  };

  //   dispatch({
  //     type: actions.profile.USER_DATA_EDITED,
  //     data: 'dfds',
  // });
  // console.log(state);
  // console.log('comments : ', comments[0]?.author?.id === state?.user?.id);
  // console.log(comment_writer);
  return (
    <section id="comments ">
      <div className="mx-auto w-full md:w-10/12 container">
        <h2 className="text-3xl font-bold my-8">
          Comments ({comment_writer?.length})
        </h2>
        <div className="flex items -center space-x-4">
          <div className="avater-img bg-indigo-600 text-white">
            <span className="">S</span>
          </div>
          <div className="w-full">
            <form action="#" onSubmit={handleSubmit(submitForm)}>
              <Field label="" error={errors.content}>
                <textarea
                  {...register("content", {
                    required: "content  is required!",
                  })}
                  className="w-full bg-[#030317] border border-slate-500 text-slate-300 p-4 rounded-md focus:outline-none"
                  placeholder="Write a comment"
                ></textarea>
              </Field>
              <div className="flex justify-end mt-4">
                <button className="bg-indigo-600 text-white px-6 py-2 md:py-3 rounded-md hover:bg-indigo-700 transition-all duration-200">
                  Comment
                </button>
              </div>
            </form>
          </div>
        </div>
        {comment_writer?.map((comment) => (
          <CommentCard
            comment={comment}
            key={comment.id}
            blogId={blogId}
            setSingleBlog={setSingleBlog}
          />
        ))}
      </div>
    </section>
  );
}
