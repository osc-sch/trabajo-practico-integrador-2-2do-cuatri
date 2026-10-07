import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRouter = () => {
  const isLogeed = localStorage.getItem("isLogeed");

  if (!isLogeed) {
    return <Navigate to={"/login"} />;
  }

  return <Outlet />;
};
