import DJSLogo from '../assets/DJSLogo.png'
import { MenuLinks } from '../data/index'
import { Link } from 'react-router-dom'
import { SocialLinks } from '../data/index'

const Footer = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-center items-start bg-gray-800 text-white'>
            <div className="flex flex-col justify-center items-center w-1/4 p-10">
                <img src={DJSLogo} alt="" className='h-20 w-20' />
                <h1>Plot No. U-15 JVPD Scheme, Bhaktivedanta Swami Marg, Vile Parle West Mumbai - 400 056</h1>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 p-10">
                <h1 className='text-xl font-semibold sm:font-bold'>
                    We are Social!
                </h1>
                <ul>
                    {SocialLinks.map((link) => (
                        <li key={link.id}>
                            <a key={link.id} href={link.link} className="text-white hover:text-gray-400">
                                -{link.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            <div className='flex flex-col justify-left items-center w-1/4 p-10'>
                <h1 className='text-xl font-semibold sm:font-bold'>Quick Links</h1>
                <ul>
                    {MenuLinks.map((link) => (
                        <li key={link.id}>
                            <Link key={link.id} to={`/${link.link}`} className="text-white hover:text-gray-400">
                                -{link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="flex flex-col justify-center items-center w-1/4 p-10">
                <h1 className='text-xl font-semibold sm:font-bold'>
                    About Us
                </h1>
            </div>
        </div>
    )
}

export default Footer