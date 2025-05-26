// src/pages/BlogDetail.jsx
import { useParams, Link } from 'react-router-dom';

const BlogDetail = () => {
  const { id } = useParams();
  const blogs = JSON.parse(localStorage.getItem("blogs")) || [];
  const blog = blogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return <p className="text-center text-red-500 mt-8">Blog not found.</p>;
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-xl shadow-lg mt-6">
      <img
        src={
          blog.image ||
          `https://source.unsplash.com/random/800x400/?${blog.title.split(" ")[0] || "blog"}`
        }
        alt={blog.title}
        className="w-full h-64 object-cover rounded-md mb-6"
      />
      <h2 className="text-4xl font-bold text-gray-800 mb-2">{blog.title}</h2>
      <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
      <p className="text-gray-700 leading-loose whitespace-pre-line">
        {blog.content}
      </p>
      <Link
        to="/"
        className="inline-block mt-6 text-blue-600 font-medium hover:underline"
      >
        ← Back to Home
      </Link>
    </div>
  );
};

export default BlogDetail;
