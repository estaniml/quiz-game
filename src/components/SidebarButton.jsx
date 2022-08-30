import { BsFillPlayFill } from 'react-icons/bs';

const PlayButton = ({children}) => {
  return (
    <button className='sidebar-button'>
        <div className="i-wrapper-1">
            <div className="i-wrapper">
                <BsFillPlayFill />
            </div>
        </div>
        <span>{children}</span>
    </button>
  )
}

export default PlayButton