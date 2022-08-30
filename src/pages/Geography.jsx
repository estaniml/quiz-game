import GameSetup from '../components/GameSetup'
import { geography } from '../db/geography'
import { BiWorld } from 'react-icons/bi'

const Geography = ({top}) => {
  return (
    <div>
      <h1 className='flex items-center gap-2 mt-10 md:mt-10 text-2xl font-bold text-blue-600 dark:text-blue-300 transition-all ease-in-out duration-150 delay-300 animate__animated animate__fadeIn' >
        <BiWorld className='animate-pulse'/> GEOGRAPHY QUIZ:</h1>

      <p className='my-6 dark:text-gray-400'>Ready for 20 country flags? Try to guess it all! Good luck</p>

      <GameSetup 
        data={geography}
        top={top}
      />
    </div>
  )
}

export default Geography