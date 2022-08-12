import { BrowserRouter, Routes, Route } from "react-router-dom";
import FooterComponent from "../components/Layout/Footer";
import HeaderComponent from "../components/Layout/Header";
import SubHeaderComponent from "../components/Layout/SubHeader";
import HomePage from "./HomePage";
import LoginPage from "./User/Login";
import NotFound from "./NotFound";
import LostPasswordPage from "./User/LostPassword";
import SignUpPage from "./User/SignUp";

export default function index() {
  return (
    <BrowserRouter>
      <div className="min-h-screen w-screen">
        <SubHeaderComponent />
        <HeaderComponent />
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* User Routes */}
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<SignUpPage />} />
          <Route path="/lost_password" element={<LostPasswordPage />} />
          {/* Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <FooterComponent />
      </div>
    </BrowserRouter>
  );
}
