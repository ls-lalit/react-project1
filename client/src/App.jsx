import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/home";
import Blog from "./pages/Blog";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
