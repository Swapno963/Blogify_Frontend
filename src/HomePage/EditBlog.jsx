/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import editLogo from "../assets/icons/edit.svg";

export default function EditBlog({id}) {
  return (
    <Link to={`editBlog/${id}`} className="action-menu-item hover:text-lwsGreen">
      <img src={editLogo} alt="Edit" />
      Edit
    </Link>
  );
}
