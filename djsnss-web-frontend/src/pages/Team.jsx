import { useParams } from 'react-router-dom';
import { Team_23_24, Team_22_23, Team_21_22 } from '../data/team'; // Import team data for each year

const Team = () => {
  const { year } = useParams(); // Extract year from URL
  let teamData;

  // Load team data based on the year
  switch (year) {
    case '23-24':
      teamData = Team_23_24;
      break;
    case '22-23':
      teamData = Team_22_23;
      break;
    case '21-22':
      teamData = Team_21_22;
      break;
    // Add more cases for other years as necessary
    default:
      teamData = {};
      break;
  }

  return (
    <div className="team-container flex flex-col bg-gradient-to-bl from-blue-400 justify-center items-center p-4 sm:p-6 lg:p-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-12">{`Team for ${year}`}</h1>

      {/* Faculty Section */}
      <div className="w-full mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">Faculty</h2>
        <div className="mb-5">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-center">Principal</h3>
          <div className="flex flex-wrap justify-center items-center p-2 gap-4 sm:gap-8">
            {teamData.faculty?.Principal?.map((name, idx) => (
              <div key={idx} className="rounded-xl border-gray-200 shadow-gray-700 bg-gray-300 hover:scale-105 duration-300 shadow-lg border-2 w-[80vw] sm:w-[20vw] p-4 sm:p-8">
                <img
                  src="https://images.unsplash.com/photo-1557683316-973673baf926"
                  alt={name}
                  className="object-cover rounded-lg w-full h-[30vh]"
                />
                <h1 className="text-lg font-semibold mt-2">{name}</h1>
                <p className="text-md font-normal">Principal</p>
              </div>
            ))}
          </div>
        </div>
        <div className="mb-5">
          <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-center">Program Officers</h3>
          <div className="flex flex-wrap justify-center items-center p-2 gap-4 sm:gap-8">
            {teamData.faculty?.ProgramOfficers?.map((name, idx) => (
              <div key={idx} className="rounded-xl border-gray-200 shadow-gray-700 bg-gray-300 hover:scale-105 duration-300 shadow-lg border-2 w-[80vw] sm:w-[20vw] p-4 sm:p-8">
                <img
                  src="https://images.unsplash.com/photo-1557683316-973673baf926"
                  alt={name}
                  className="object-cover rounded-lg w-full h-[30vh]"
                />
                <h1 className="text-lg font-semibold mt-2">{name}</h1>
                <p className="text-md font-normal">Program Officer</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Upper Core Section */}
      <div className="w-full mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">Upper Core</h2>
        {Object.keys(teamData.core?.upperCore || {}).map((role, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-center">{role.replace(/([A-Z])/g, ' $1')}</h3>
            <div className="flex flex-wrap justify-center items-center p-1 sm:p-5 gap-4 sm:gap-6 lg:gap-8">
              {teamData.core?.upperCore[role]?.map((name, idx) => (
                <div key={idx} className="rounded-xl border-gray-200 bg-gray-300 shadow-gray-700 hover:scale-105 duration-300 shadow-md hover:shadow-xl hover:shadow-gray-700 border-2 w-[80vw] sm:w-[45vw] lg:w-[20vw] p-4 sm:p-6 lg:p-8">
                  <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926"
                    alt={name}
                    className="object-cover rounded-lg w-full h-[25vh] sm:h-[30vh] lg:h-[35vh]"
                  />
                  <h1 className="text-lg sm:text-xl font-semibold">{name}</h1>
                  <p className="text-base sm:text-lg">{role.replace(/([A-Z])/g, ' $1')}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Heads Section */}
      <div className="w-full mb-8">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">Heads</h2>
        {Object.keys(teamData.core?.heads || {}).map((headCategory, index) => (
          <div key={index} className="mb-4">
            <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-center">{headCategory.replace(/([A-Z])/g, ' $1')} Heads</h3>
            <div className="flex flex-wrap justify-center items-center p-3 sm:p-5 gap-4 sm:gap-6 lg:gap-8">
              {teamData.core?.heads[headCategory]?.map((name, idx) => (
                <div key={idx} className="rounded-xl border-gray-200 bg-gray-300 shadow-gray-700 hover:scale-105 duration-300 shadow-md hover:shadow-xl hover:shadow-gray-700 border-2 w-[80vw] sm:w-[45vw] lg:w-[20vw] p-4 sm:p-6 lg:p-8">
                  <img
                    src="https://images.unsplash.com/photo-1557683316-973673baf926"
                    alt={name}
                    className="object-cover rounded-lg w-full h-[25vh] sm:h-[30vh] lg:h-[35vh]"
                  />
                  <h1 className="text-lg sm:text-xl font-semibold">{name}</h1>
                  <p className="text-base sm:text-lg">{headCategory.replace(/([A-Z])/g, ' $1')} Head</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Volunteers Section */}
      <div className="w-full">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-semibold text-center">Volunteers</h2>
        <div className="flex flex-wrap justify-center items-center p-3 sm:p-5 gap-4 sm:gap-6 lg:gap-8">
          {teamData.volunteers?.map((volunteer, index) => (
            <div key={index} className="rounded-xl border-gray-200 bg-gray-300 shadow-gray-700 hover:scale-105 duration-300 shadow-md hover:shadow-xl hover:shadow-gray-700 border-2 w-[80vw] sm:w-[45vw] lg:w-[20vw] p-4 sm:p-6 lg:p-8">
              <img
                src="https://images.unsplash.com/photo-1557683316-973673baf926"
                alt={volunteer}
                className="object-cover rounded-lg w-full h-[25vh] sm:h-[30vh] lg:h-[35vh]"
              />
              <h1 className="text-lg sm:text-xl font-semibold">{volunteer}</h1>
              <p className="text-base sm:text-lg">Volunteer</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
