import GameSetup from '../components/GameSetup'
import { music } from '../db/music'
import { MdMusicNote } from 'react-icons/md'

const Music = ({top}) => {
  return (
    <div>


      <h1 className='flex items-center gap-2 mt-10 md:mt-10 text-2xl font-bold text-red-500  dark:text-red-300 transition-all ease-in-out duration-150 delay-300 animate__animated animate__fadeIn'>
        <MdMusicNote className='animate-pulse'/>MUSIC QUIZ:
      </h1>
      <p className='my-6 dark:text-gray-400'>Its time for music! but not to listen to it :S</p>

      <GameSetup 
        data={music}
        top={top}
      />
    </div>
  )
}

export default Music