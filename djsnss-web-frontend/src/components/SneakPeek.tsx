import React from 'react';
import CorePic from '../assets/Core.jpg';

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    {
      image: CorePic,
      title: 'Card 1',
      description: 'Info which directs to the other page.',
    },
    {
      image: CorePic,
      title: 'Card 2',
      description: 'Info which directs to the other page.',
    },
    {
      image: CorePic,
      title: 'Card 3',
      description: 'Info which directs to the other page.',
    },
    {
      image: CorePic,
      title: 'Card 4',
      description: 'Info which directs to the other page.',
    },
    {
      image: CorePic,
      title: 'Card 5',
      description: 'Info which directs to the other page.',
    },
  ];

  const handleNext = () => {
    if (currentIndex >= cards.length - 3) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex === 0) {
      setCurrentIndex(cards.length - 3);
    } else {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center m-2 mx-auto w-full max-w-4xl">
      <div className="relative mb-8">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="border-t border-gray-300 w-80"></div>
        </div>
        <h2 className="relative inline-block bg-white px-4 text-2xl font-bold">
          Sneak Peek
        </h2>
      </div>
      <div className="relative w-full flex items-center justify-center">
        <button
          className="absolute left-0 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
          onClick={handlePrev}
        >
          &lt;
        </button>
        <div className="w-full overflow-hidden">
          <div className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 33.33}%)` }}>
            {cards.map((card, index) => (
              <div className="flex-none w-1/3 p-4" key={index}>
                <div className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden h-full">
                  <img className="w-full h-40 object-cover" src={card.image} alt={card.title} />
                  <div className="p-4">
                    <h3 className="text-lg font-bold">{card.title}</h3>
                    <p className="text-gray-500">{card.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button
          className="absolute right-0 w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center hover:bg-gray-400 transition"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
