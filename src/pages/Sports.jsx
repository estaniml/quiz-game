import GameSetup from '../components/GameSetup'
import { sports } from '../db/sports'
import { IoIosFootball } from 'react-icons/io'

const Sports = ({top}) => {
  return (
    <div>
      <h1 className='flex items-center gap-2 mt-10 md:mt-10 text-2xl font-bold text-green-600 dark:text-green-300 transition-all ease-in-out duration-150  delay-300 animate__animated animate__fadeIn'>
        <IoIosFootball className='animate-pulse' />SPORTS QUIZ:
      </h1>

      <p className='my-6 dark:text-gray-400'>Show your knowledge of sports. 1 questions with 4 posible options.</p>


      <GameSetup 
        data={sports}
        top={top}
      />
    </div>
  )
}

export default Sports