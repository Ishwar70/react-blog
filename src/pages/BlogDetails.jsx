import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => setBlog(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  if (!blog)
    return (
      <p className="text-center mt-10 text-gray-600 dark:text-gray-300 text-lg animate-pulse">
        Loading...
      </p>
    );

  return (
    <div className="container mx-auto py-12 px-4">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 px-6 py-2 font-semibold rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg hover:scale-105 transform transition duration-300"
      >
        ← Back
      </button>
      <div className="bg-gradient-to-br from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 rounded-2xl shadow-2xl transition-all hover:shadow-3xl">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-800 dark:text-gray-100 drop-shadow-md">
          {blog.title}
        </h2>
        <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
          {blog.body}
        </p>
      </div>
    </div>
  );
}
