import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogDetails from "./pages/BlogDetails";

function App() {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    const html = document.documentElement;
    html.classList.remove("light", "dark", "bright");
    html.classList.add(theme);
  }, [theme]);

  return (
    <Router>
      <div
        className={`min-h-screen transition-colors duration-300
          ${theme === "light" ? "bg-white text-gray-900" : ""}
          ${theme === "dark" ? "bg-gray-900 text-white" : ""}
          ${theme === "bright" ? "bg-yellow-50 text-gray-900" : ""}`}
      >
        <Header theme={theme} setTheme={setTheme} />

        <main className="pt-20 px-4 md:px-8 lg:px-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<BlogList />} />
            <Route path="/blog/:id" element={<BlogDetails />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
