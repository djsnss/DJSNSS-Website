import React from 'react';
import CorePic from '../assets/Core.jpg';

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    { image: CorePic, title: 'Card 1', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 2', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 3', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 4', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 5', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 6', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 7', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 8', description: 'Info which directs to the other page.' },
    { image: CorePic, title: 'Card 9', description: 'Info which directs to the other page.' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % 3);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % 3);
  };

  return (
    <div className="w-full h-[80vh] mx-auto flex flex-col justify-center items-center max-w-6xl overflow-hidden">
      <div className="mb-8 p-6 flex items-center justify-center">
        <h2 className="relative text-zinc-700 text-lg sm:text-3xl font-medium sm:font-semibold bg-gray-200 px-3 sm:px-4 py-1 shadow-gray-600 tracking-wide shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-gray-600 border-gray-200 border-1 z-10">
          <div className="relative z-10">SNEAK PEEK</div>
          <div className="absolute inset-0 flex items-center justify-between">
            <div className="border-t-4 border-gray-300 w-[200%] transform -translate-x-5/6 z-0"></div>
            <div className="border-t-4 border-gray-300 w-[200%] transform translate-x-5/6 z-0"></div>
          </div>
        </h2>
      </div>


      <div className="relative w-full flex items-center justify-center mb-10 overflow-hidden">
        <button
          className="absolute left-0 ml-2 sm:left-4 w-6 h-6 sm:w-12 sm:h-12 rounded-full text-2xl bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition transform hover:scale-100 shadow-gray-900 shadow-md z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="w-5/6 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex % cards.length) * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                className="flex-none w-full sm:w-1/3 p-2 bg-white border-2 border-gray-200 rounded-lg shadow-lg transform"
                key={index}
              >
                <img className="w-full h-48 object-cover mb-4 rounded-lg shadow-sm" src={card.image} alt={card.title} />
                <h3 className="text-xl font-semibold text-gray-700">{card.title}</h3>
                <p className="text-gray-600">{card.description}</p>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 mr-2 sm:right-4 w-6 h-6 sm:w-12 sm:h-12 rounded-full text-2xl bg-white text-gray-900 flex items-center justify-center hover:bg-gray-200 transition transform hover:scale-100 shadow-gray-900 shadow-md z-10"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
