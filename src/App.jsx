import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { Navbar } from "./components/navar.jsx";
import { AppRouter } from "./router/AppRouter.jsx";

export const App = () => {
  return <AppRouter />;
};
