import Cards from "../components/Cards";

export default function Home() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors">
      <section
        className="relative h-[60vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url('https://source.unsplash.com/1600x900/?nature,landscape')` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60"></div>
        
        <h1 className="relative text-white text-4xl md:text-6xl font-extrabold text-center drop-shadow-lg">
          Welcome to ReactBlog
        </h1>
      </section>
      <section className="container mx-auto py-12 px-4 bg-gray-100 dark:bg-gray-800 rounded-xl shadow-lg mt-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-gray-800 dark:text-gray-100">
          Our Services
        </h2>
        <Cards />
      </section>
    </div>
  );
}
