import {BsFillHandIndexFill} from 'react-icons/bs'
import { IoIosFootball } from 'react-icons/io'
import{BiWorld} from 'react-icons/bi'
import { MdMusicNote } from 'react-icons/md'
import { GiOpenBook } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import 'animate.css';

const Home = () => {
  return (
    <div className='mt-20 flex flex-col justify-center items-center'>
      <div>  
        <h1 className='home-title text-center text-7xl font-black animate__animated animate__pulse'>Welcome to qame</h1>
        <p className='text-right italic text-indigo-800 font-light'>develop by EML</p>
      </div>

      <p className='mt-20  flex items-center gap-4 text-2xl text-indigo-800 dark:text-indigo-300'>I challenge you! <BsFillHandIndexFill className='rotate-180' /> </p>

      <div className='mt-10 mb-20 grid md:grid-cols-2 gap-6 animate__animated animate__fadeInUp'>

        <Link to='sports' className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br  shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-4xl p-6 flex flex-col items-center justify-center gap-2">
          Sports
          <IoIosFootball />
        </Link>

        <Link to='geography' className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br  shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-4xl p-6 flex flex-col items-center justify-center gap-2">
          Geography
          <BiWorld />
        </Link>

        <Link to='history' className="text-white bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500 hover:bg-gradient-to-br  shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-4xl p-6 flex flex-col items-center justify-center gap-2">
          History
          <GiOpenBook />
        </Link>

        <Link to='music' className="text-white bg-gradient-to-r from-red-500 via-red-600 to-red-700 hover:bg-gradient-to-br  shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-4xl p-6 flex flex-col items-center justify-center gap-2">
          Music
          <MdMusicNote />
        </Link>

      </div>
    </div>
  )
}

export default Home