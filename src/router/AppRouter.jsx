import { LoginPage } from "../pages/LoginPage.jsx";
import { HomePage } from "../pages/HomePage.jsx";
import { RegisterPage } from "../pages/RegisterPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PublicRoute } from "./PublicRoute.jsx";
import { ProtectedRouter } from "./ProtectedRouter.jsx";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
        </Route>

        <Route element={<ProtectedRouter />}>
          <Route path="/home" element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
