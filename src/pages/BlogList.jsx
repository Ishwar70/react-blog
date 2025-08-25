import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function BlogList() {
  const [blogs, setBlogs] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setBlogs(res.data))
      .catch((err) => console.log(err));
  }, []);

  const paginatedBlogs = blogs.slice((page - 1) * perPage, page * perPage);
  const totalPages = Math.ceil(blogs.length / perPage);

  const gradientColors = [
    "from-indigo-500 to-purple-500",
    "from-pink-500 to-orange-400",
    "from-green-400 to-blue-500",
    "from-yellow-400 to-red-400",
    "from-teal-400 to-cyan-500",
    "from-rose-400 to-fuchsia-500",
  ];

  return (
    <div className="container mx-auto py-12 px-4">
      <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-center text-gray-800 dark:text-gray-100 drop-shadow-md">
        Our Blog
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {paginatedBlogs.map((blog, index) => (
          <div
            key={blog.id}
            className={`relative overflow-hidden rounded-2xl shadow-xl transform transition duration-500 hover:scale-105 hover:shadow-2xl bg-gradient-to-br ${
              gradientColors[index % gradientColors.length]
            } text-white`}
          >
            <div className="p-5 md:p-6">
              <h3 className="text-xl md:text-2xl font-bold mb-2 drop-shadow-lg">
                {blog.title}
              </h3>
              <p className="text-white/90 mb-4">{blog.body.substring(0, 120)}...</p>
              <Link
                to={`/blog/${blog.id}`}
                className="inline-block bg-white text-gray-800 font-semibold px-4 py-2 rounded-full shadow hover:bg-gray-200 transition"
              >
                Read More
              </Link>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/0 pointer-events-none rounded-2xl"></div>
          </div>
        ))}
      </div>
      <div className="mt-8 overflow-x-auto">
        <div className="flex space-x-3 w-max px-1">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              className={`px-4 py-2 rounded-full font-semibold transition whitespace-nowrap ${
                page === i + 1
                  ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg"
                  : "bg-gray-300 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-400 dark:hover:bg-gray-600"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
