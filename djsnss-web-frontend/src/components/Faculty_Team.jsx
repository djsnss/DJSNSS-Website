import { TeamYearLinks } from '../data/index'
import { Link } from 'react-router-dom'
const Faculty_Team = () => {
  return (
    <div className="mb-8 flex flex-col m-5 items-center justify-center text-gray-900">
      <div className="mb-8 p-6 flex items-center justify-center">
        <h2 className="relative rounded-md text-zinc-700 text-lg sm:text-3xl font-medium sm:font-semibold bg-gray-200 px-3 sm:px-4 py-1 shadow-gray-600 tracking-wide shadow-md transition-all duration-500 hover:shadow-xl hover:shadow-gray-600 border-gray-200 border-1 z-10 hover:rounded-2xl">
          <div className="relative z-10">OUR TEAM</div>
        </h2>
      </div>
      <div className='flex flex-col items-center max-w-4xl justify-center'>
        <p className="text-center text-md sm:text-lg font-normal mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit modi sint at deleniti consequatur veniam amet dolore distinctio autem tempore earum, ratione eius reprehenderit optio soluta, illo quasi nam neque fugiat enim ipsam? Aliquid commodi voluptas mollitia nulla aliquam iusto, porro iure nihil pariatur temporibus ipsam eius quaerat voluptatibus modi maxime explicabo tempora similique fugiat quae asperiores dignissimos! Doloribus, voluptatem, reiciendis voluptate obcaecati sunt molestiae magni quos odio minus vel officiis debitis laudantium maxime eveniet harum praesentium blanditiis. Pariatur corporis consectetur a itaque accusantium quaerat cupiditate dolores consequatur esse voluptatem omnis beatae porro iusto qui, atque fugiat quo eos quidem!
        </p>
      </div>
      <div className='flex flex-col justify-center items-center text-gray-800'>
        <h1 className='text-xl sm:text-3xl font-medium sm:font-semibold p-2 text-gray-600'>Our Legacy</h1>
        <div className='w-1/2 border-2 border-gray-600'></div>
        <div className="flex flex-wrap max-w-3xl items-center justify-center">
          {TeamYearLinks.map((teamYearLink) => (
            <>
              <div className='gap-500 m-5'>
                <Link to={teamYearLink.link} className="bg-blue-500 text-sm sm:text-lg text-white py-2 px-10 rounded-full hover:bg-blue-600">
                  {teamYearLink.name}
                </Link>
              </div>
            </>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Faculty_Team