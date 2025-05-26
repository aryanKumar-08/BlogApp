import { Link } from "react-router-dom";

const BlogCard = ({ blog }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-2xl bg-white/90 backdrop-blur-sm hover:scale-[1.02] transition duration-300">
      <img
        src={
          blog.image ||
          `https://source.unsplash.com/random/800x400/?${blog.title.split(" ")[0] || "blog"}`
        }
        alt={blog.title}
        className="h-48 w-full object-cover"
      />
      <div className="p-5">
        <h2 className="text-2xl font-semibold text-gray-800 mb-1 truncate">
          {blog.title}
        </h2>
        <p className="text-gray-400 text-sm mb-3">{blog.date}</p>
        <p className="text-gray-600 line-clamp-3">{blog.content}</p>
        <Link
          to={`/blog/${blog.id}`}
          className="text-blue-600 font-medium inline-block mt-4 hover:underline"
        >
          Read Full Blog →
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
