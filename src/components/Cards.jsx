import { useState } from "react";

export default function Cards() {
  const [cards] = useState([
    {
      title: "Web Development",
      description: "Building responsive and modern web applications.",
      img: "https://www.elegantthemes.com/blog/wp-content/uploads/2018/12/top11.png",
      textColor: "text-indigo-50", 
    },
    {
      title: "UI/UX Design",
      description: "Designing user-friendly interfaces and experiences.",
      img: "https://blog.cubos.academy/content/images/2023/02/Designer-UI.jpg",
      color: "from-pink-500 to-orange-500",
      textColor: "text-white",
    },
    {
      title: "Blogging",
      description: "Sharing knowledge and tutorials on latest tech.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fHrOI0cf5uREUHoSnEi9g6pVbO477qV3WPuRp8eNTX4GyaqBsZ5pCrCFOpF1Y4Yi1GY&usqp=CAU",
      textColor: "text-yellow-50",
    },
  ]);

  return (
    <div className="grid md:grid-cols-3 gap-8">
      {cards.map((card, index) => (
        <div
          key={index}
          className={`relative overflow-hidden rounded-xl shadow-lg transform transition duration-500 hover:scale-105 hover:rotate-1 hover:shadow-2xl ${
            card.color ? `bg-gradient-to-br ${card.color}` : "bg-gray-800"
          }`}
        >
          <img
            src={card.img}
            alt={card.title}
            className="w-full h-48 object-cover opacity-80 hover:opacity-100 transition duration-500"
          />
          <div className="p-6">
            <h3 className={`${card.textColor} text-2xl font-bold mb-2 drop-shadow-lg`}>
              {card.title}
            </h3>
            <p className={`${card.textColor} text-white/90 drop-shadow-md`}>
              {card.description}
            </p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/0 pointer-events-none"></div>
        </div>
      ))}
    </div>
  );
}
