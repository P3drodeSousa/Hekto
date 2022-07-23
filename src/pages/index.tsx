import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import NotFound from "./NotFound";

export default function index() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
