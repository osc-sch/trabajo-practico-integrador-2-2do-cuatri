import { HomePage } from "./pages/HomePage.jsx";
import { LoginPage } from "./pages/LoginPage.jsx";
import { RegisterPage } from "./pages/RegisterPage.jsx";
import { Navbar } from "./components/navar.jsx";

export const App = () => {
  return (
    <div>
      <Navbar />
      <HomePage />
    </div>
  );
};
