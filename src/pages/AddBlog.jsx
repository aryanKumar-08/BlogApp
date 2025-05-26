


// src/pages/AddBlog.jsx



import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      image,
      content,
      date: new Date().toLocaleDateString(),
    };

    const blogs = JSON.parse(localStorage.getItem('blogs')) || [];
    localStorage.setItem('blogs', JSON.stringify([newBlog, ...blogs]));

    navigate('/');
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-2xl rounded-xl mt-29">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">
        Create a Blog Post
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Blog Title"
          className="w-full border border-gray-300 p-3 rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL (optional)"
          className="w-full border border-gray-300 p-3 rounded-lg"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        {image && (
          <img
            src={image}
            alt="Preview"
            className="w-full h-48 object-cover rounded-md"
          />
        )}
        <textarea
          placeholder="Write your blog content..."
          className="w-full border border-gray-300 p-3 rounded-lg h-40 resize-none"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
        <button
          type="submit"
          className="w-full bg-yellow-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition"
        >
          Publish Blog
        </button>
      </form>
    </div>
  );
};

export default AddBlog;







