import { useParams } from 'react-router-dom';
import { Team_23_24, Team_22_23, Team_21_22, Team_20_21, Team_19_20 } from '../data/team';

const Team = () => {
  const { year } = useParams();

  // Map year from URL to the corresponding team data
  const teams = {
    '23-24': Team_23_24,
    '22-23': Team_22_23,
    '21-22': Team_21_22,
    '20-21': Team_20_21,
    '19-20': Team_19_20,
  };
  const teamData = teams[year] || {};

  // Reusable component to render people with images
  const PeopleGrid = ({ title, role, people }) => (
    <div className="mb-5">
      <h3 className="text-lg sm:text-xl lg:text-2xl font-medium text-center">{title}</h3>
      <div className="flex flex-wrap justify-center items-center p-2 gap-4 sm:gap-8">
        {people.map((name, idx) => (
          <div
            key={idx}
            className="rounded-xl border-gray-200 shadow-gray-700 bg-gray-300 hover:scale-105 duration-300 shadow-lg border-2 w-[80vw] sm:w-[20vw] p-4 sm:p-8"
          >
            <img
              src="https://images.unsplash.com/photo-1557683316-973673baf926"
              alt={name}
              className="object-cover rounded-lg w-full h-[30vh]"
            />
            <h1 className="text-lg font-semibold mt-2">{name}</h1>
            <p className="text-md font-normal">{role}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Render Faculty Section
  const renderFaculty = () => (
    <div className="w-full mb-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl p-5 font-bold text-slate-800 text-center">Faculty</h2>
      <PeopleGrid title="Principal" role="Principal" people={teamData.faculty?.Principal || []} />
      <PeopleGrid title="Program Officers" role="Program Officer" people={teamData.faculty?.ProgramOfficers || []} />
    </div>
  );

  // Render Upper Core Section
  const renderUpperCore = () => (
    <div className="w-full mb-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl p-5 font-bold text-slate-800 text-center">Upper Core</h2>
      {Object.keys(teamData.core?.upperCore || {}).map((role, index) => (
        <PeopleGrid key={index} title={role.replace(/([A-Z])/g, ' $1')} role={role.replace(/([A-Z])/g, ' $1')} people={teamData.core.upperCore[role]} />
      ))}
    </div>
  );

  // Render Heads Section
  const renderHeads = () => (
    <div className="w-full mb-8">
      <h2 className="text-xl sm:text-2xl lg:text-3xl p-5 font-bold text-slate-800 text-center">Heads</h2>
      {Object.keys(teamData.core?.heads || {}).map((headCategory, index) => (
        <PeopleGrid key={index} title={`${headCategory.replace(/([A-Z])/g, ' $1')} Heads`} role={`${headCategory.replace(/([A-Z])/g, ' $1')} Head`} people={teamData.core.heads[headCategory]} />
      ))}
    </div>
  );

  // Render Volunteers Section
  const renderVolunteers = () => (
    <div className="w-full">
      <h2 className="text-xl sm:text-2xl lg:text-3xl p-5 font-bold text-slate-800 text-center">Volunteers</h2>
      <PeopleGrid title="Volunteers" role="Volunteer" people={teamData.volunteers || []} />
    </div>
  );

  return (
    <div className="team-container flex flex-col bg-gradient-to-bl from-blue-400 justify-center items-center p-4 sm:p-6 lg:p-10">
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold pt-12">{`Team for ${year}`}</h1>
      {renderFaculty()}
      {renderUpperCore()}
      {renderHeads()}
      {renderVolunteers()}
    </div>
  );
};

export default Team;
