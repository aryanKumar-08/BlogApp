import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddBlog from "./pages/AddBlog";
import BlogDetail from "./pages/BlogDetail";
import Navbar from "./components/Navbar"; // 👈 import it

function App() {
  return (
    <Router>
      <Navbar /> {/* 👈 Add it here so it's on every page */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddBlog />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
