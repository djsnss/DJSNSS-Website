import React from 'react';
import AnnualCD from '../assets/Events/AnnualCharity.png'
import GandhiJayanti from '../assets/Events/GandhiJayanti.jpg'
import InamdaarMemorialSeminar2 from '../assets/Events/InamdaarMemorialSeminar2.jpg'
import BloodDonationDrive from '../assets/Events/BDD.jpg'
import CyberSavvy from '../assets/Events/CyberSavvy.png'
import VoterRegistration from '../assets/Events/VoterRegistration.png'
import MentalHealthAwarenessDrive from '../assets/Events/MentalHealthAwarenessDrive.png'
import TreePlantation from '../assets/Events/TreePlantation.png'
import SensoryBoardEvent from '../assets/Events/SensoryBoardEvent.jpg'
import VersovaBeachCleanup from '../assets/Events/VersovaBeachCleanup.jpg'

const MultiCardCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const cards = [
    { image: AnnualCD, title: 'Annual Charity Drive', description: 'A yearly fundraising event for underprivileged communities.' },
    { image: GandhiJayanti, title: 'Gandhi Jayanti', description: 'Celebrating Gandhi Jayanti at Gateway of India.' },
    { image: MentalHealthAwarenessDrive, title: 'Mental Health Awareness Drive', description: 'Promoting mental health awareness across the community.' },
    { image: InamdaarMemorialSeminar2, title: 'Inamdaar Memorial Seminar', description: 'Seminar honoring the legacy of Late Dr. Inamdaar.' },
    { image: BloodDonationDrive, title: 'Blood Donation Drive', description: 'Encouraging voluntary blood donations for those in need.' },
    { image: CyberSavvy, title: 'Cyber Savvy Seminar', description: 'Educating students about cyber safety and online security.' },
    { image: VoterRegistration, title: 'Voter Registration Drive', description: 'Facilitating voter registrations for eligible citizens.' },
    { image: TreePlantation, title: 'Tree Plantation Drive', description: 'Contributing to a greener planet by planting trees.' },
    { image: SensoryBoardEvent, title: 'Sensory Board Event', description: 'A creative event showcasing student projects on sensory boards.' },
    { image: VersovaBeachCleanup, title: 'Versova Beach Cleanup', description: 'Cleaning up the Versova Beach as a community service initiative.' },
  ];

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  return (
    <div className="w-full h-[80vh] mx-auto flex flex-col justify-center items-center max-w-6xl overflow-hidden">
      {/* Title Section */}
      <div className="mb-8 p-6 flex items-center justify-center">
        <h2 className="relative rounded-md text-zinc-700 text-lg sm:text-3xl font-medium sm:font-semibold bg-gray-200 px-3 sm:px-4 py-1 shadow-gray-600 tracking-wide shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-gray-600 border-gray-200 border-1 z-10 hover:rounded-2xl">
          <div className="relative z-10">SNEAK PEEK</div>
        </h2>
      </div>

      {/* Carousel Section */}
      <div className="relative w-full flex items-center justify-center mb-10 overflow-hidden">
        {/* Previous Arrow */}
        <button
          className="absolute left-0 ml-2 sm:left-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full text-xl sm:text-2xl bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-300 transition transform hover:scale-105 shadow-md z-10"
          onClick={handlePrev}
        >
          &lt;
        </button>

        {/* Cards */}
        <div className="w-5/6 overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex % 3) * 100}%)`,
            }}
          >
            {cards.map((card, index) => (
              <div
                className="flex-none w-full lg:w-1/3 md:w-1/2 p-4 sm:p-6 bg-white border-2 border-gray-200 rounded-lg shadow-lg transform"
                key={index}
              >
                <img className="w-full h-48 sm:h-60 object-cover mb-4 rounded-lg shadow-sm" src={card.image} alt={card.title} />
                <h3 className="text-lg sm:text-xl font-semibold text-gray-700 mb-2">{card.title}</h3>
                <p className="text-gray-600 text-sm sm:text-base">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Next Arrow */}
        <button
          className="absolute right-0 mr-2 sm:right-4 w-8 h-8 sm:w-12 sm:h-12 rounded-full text-xl sm:text-2xl bg-gray-100 text-gray-900 flex items-center justify-center hover:bg-gray-300 transition transform hover:scale-105 shadow-md z-10"
          onClick={handleNext}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MultiCardCarousel;
