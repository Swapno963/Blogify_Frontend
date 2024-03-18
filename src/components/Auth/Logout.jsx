import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

export default function Logout() {
  const navigate = useNavigate();
  const { updateData } = useAuth();
  const hadelLogout = () => {
    updateData({});
    navigate("login");
  };
  return <button onClick={hadelLogout}>Logout</button>;
}
