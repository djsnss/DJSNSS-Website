import { Team as TeamData } from '../data/index'

const Team = () => {
  return (
    <div className='flex flex-col justify-center items-center p-10'>
      <h1 className='text-lg sm:text-xl lg:text-3xl p-5 font-normal sm:font-medium lg:font-semibold'>
        OUR TEAM
      </h1>
      <div className="flex flex-col sm:flex-row justify-center items-center">
        <div className="card flex flex-wrap *:flex-[30%] flex-col sm:flex-row justify-center items-center p-5 gap-8">
          {TeamData.map((team) => (
            <>
              <div className="rounded-xl border-gray-200 shadow-gray-700 hover:scale-105 duration-300 shadow-lg border-2 w-[20vw] p-8">
                <img
                  src="https://images.unsplash.com/photo-1557683316-973673baf926"
                  alt="team-member"
                  className=" object-cover rounded-lg w-[15vw] h-[30vh]"
                />
                <h1 className="text-lg font-semibold">{team.name}</h1>
                <p className="text-sm font-normal">{team.role}</p>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team