import Navbar from '../components/navbar/Navbar';

const Home = () => {
    return (
        <div className="h-screen overflow-x-hidden scroll-smooth">
            <Navbar className="sticky" />
            <div className="relative min-w-full pt-32 justify-start text-white px-10 gap-b-10">
                <div className=' flex flex-col sm:flex-row'>
                    <div>
                        <></>
                    </div>
                    <div className="text-left flex flex-col">
                        <h1 className='text-5xl xl:text-9xl md:text-7xl sm:text-5xl font-bold md:pb-6 pb-16'>
                            YOGA.
                        </h1>
                        <h1 className='text-5xl xl:text-9xl md:text-7xl sm:text-5xl font-bold md:pb-6 pb-16'>
                            AYURVEDA.
                        </h1>
                        <h1 className='text-5xl xl:text-9xl md:text-7xl sm:text-5xl font-bold md:pb-12 pb-16'>
                            COUNSELING.
                        </h1>
                    </div>
                </div>
                <p className="flex w-full justify-center mt-4 font-semibold text-3xl sm:2xl lg:4xl">Join Us &rarr;</p>
            </div>
        </div>
    );
}

export default Home;
