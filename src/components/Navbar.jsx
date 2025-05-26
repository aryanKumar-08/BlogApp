import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) =>
    location.pathname === path ? "text-blue-600 font-semibold" : "text-gray-700";

  return (
    <nav className="bg-[#2f1b0c] text-white shadow-md">
  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
    <div className="flex items-center space-x-2">
      <span className="text-2xl"><img src="https://cdn.logojoy.com/wp-content/uploads/2018/05/30164225/572-768x591.png"  className="w-18 h-10" alt="" /></span>
      <h1 className="text-2xl font-bold text-white">BlogHub</h1>
    </div>
    <div className="space-x-6 text-md font-medium">
      <a href="/" className="hover:text-yellow-400 transition">Home</a>
     
       <Link
            to="/add"
            className="bg-yellow-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            + Add Blog
          </Link>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
