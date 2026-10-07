import { Navigate, Outlet } from "react-router-dom";

export const PublicRoute = () => {
  const isLogeed = localStorage.getItem("isLogeed");

  if (isLogeed) {
    return <Navigate to={"/home"} />;
  }

  return <Outlet />;
};
