
import { useState } from 'react';
import BlogCard from '../components/BlogCard';
import { Link } from 'react-router-dom';

const Home = () => {
  const [blogs] = useState(
    JSON.parse(localStorage.getItem("blogs")) || []
  );

  return (
    <div
      className="min-h-screen bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,0.7), rgba(0,0,0,0.8)),
        url('https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&w=1470&q=80')`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 py-10">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold text-white">📝 Latest Blogs</h1>
          <Link
            to="/add"
            className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition"
          >
            + Add Blog
          </Link>
        </div>

        
        {blogs.length === 0 ? (
          <p className="text-center text-gray-200 text-xl">No blogs posted yet.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog) => (
              <BlogCard key={blog.id} blog={blog} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
