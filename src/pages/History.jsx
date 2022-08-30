import GameSetup from '../components/GameSetup'
import { history } from '../db/history'
import { GiOpenBook } from 'react-icons/gi'

const History = ({top}) => {
  return (
    <div>


      <h1 className='flex items-center gap-2 mt-10 md:mt-10 text-2xl font-bold text-yellow-500  dark:text-yellow-200 transition-all ease-in-out duration-150 delay-300 animate__animated animate__fadeIn'>
        <GiOpenBook className='animate-pulse'/>HISTORY QUIZ:</h1>
      <p className='my-6 dark:text-gray-400'>How much do you know of the history in your planet?</p>

      <GameSetup 
        data={history}
        top={top}
      />
    </div>
  )
}

export default History