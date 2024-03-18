import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WriteBlogForm from "../UserActions/WriteBlogForm";

export default function EditSingleBlog() {
  const { id } = useParams();
  const [singleBlog, setSingleBlog] = useState();
  useEffect(() => {
    fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/blogs/${id}`)
      .then((res) => res.json())
      .then((data) => setSingleBlog(data))
      .catch((error) => {
        // Handle error
        console.error("There was a problem with the fetch operation:", error);
      });
  }, [id]);

//   console.log("edit blog", singleBlog);
  return (
    <>
      <WriteBlogForm isEditing={true} blogToEdit={singleBlog} />
    </>
  );
}
