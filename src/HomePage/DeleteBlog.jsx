/* eslint-disable react/prop-types */
import deleteLogo from "../assets/icons/delete.svg";
import { useAxious } from "../hooks/useAxious";
export default function DeleteBlog({id,setBlogs,blogs}) {
 const {api} = useAxious()
 console.log('blog id',id);
  const handelDeleteData = async () => {
    try {
      const response = await api.delete(`http://localhost:3000/blogs/${id}`);
      console.log('Delete request successful:', response);
      if(response.status == 200){
        // setBlogs((prev) => ({ ...prev, blogs: response?.data?.blogs }));
        setBlogs((blogs.filter((blog)=>blog.id !== id)));

      }
      // Handle success, if needed
    } catch (error) {
      console.error('Error deleting data:', error.response.data);
      // Handle error, if needed
    }
  };
  return (
    <button onClick={handelDeleteData} className="action-menu-item hover:text-red-500">
    <img src={deleteLogo} alt="Delete" />
    Delete
  </button>
  )
}
