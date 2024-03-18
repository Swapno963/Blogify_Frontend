import useAuth from "../hooks/useAuth";
import { Navigate, Outlet } from "react-router-dom";
import { ProfileProvider } from "../providers/ProfileProvider";

export default function PrivetRoutes() {
  const { auth } = useAuth();
  return (
    <>
      {auth.user ? (
        // <ProfileProvider>
          
            <Outlet />
          
        // </ProfileProvider>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
}
