import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation  } from "react-router-dom";
import SidebarButton from "./SidebarButton";
import { CgMenuRightAlt, CgClose } from 'react-icons/cg';
import { RiGooglePlayFill } from 'react-icons/ri';

const Sidebar = () => {

  const [menu, setMenu] = useState(false)

  const responsiveMenu = useRef(null)
  const { pathname } = useLocation()

  useEffect(() => {
    showMenu(false)
  }, [pathname])
  

  const showMenu = val => {
    setMenu(val)

    if (val) {
      responsiveMenu.current.style.top = '60px'
    } else {
      responsiveMenu.current.style.top = '-350px'
    }
  }

  return (
    <div className='z-10 bg-indigo-300 dark:bg-indigo-800 w-full md:w-1/5  h-16 md:h-screen fixed top-0 shadow-sm md:shadow-xl flex md:flex-col items-center md:items-start justify-between md:justify-start md:py-10 md:gap-10 px-10 md:px-6'>

      <div className='font-bold text-indigo-700 dark:text-indigo-200 text-3xl'>
        <Link to='/' className="flex items-center gap-2">       <RiGooglePlayFill className="text-indigo-100 rotate-90"/> qame</Link>
      </div>

      <ul className='w-full hidden md:flex flex-col gap-4 text-indigo-500 dark:text-indigo-200'>
        <NavLink to='sports' className={ ({isActive}) => isActive  ? 'text-green-500 font-bold pl-2' : undefined}><SidebarButton>Sports</SidebarButton></NavLink>
        <NavLink to='geography' className={ ({isActive}) => isActive  ? 'text-blue-400 font-bold pl-2' : undefined}><SidebarButton>Geography</SidebarButton></NavLink>
        <NavLink to='history' className={ ({isActive}) => isActive ? 'text-yellow-300 font-bold pl-2' : undefined}><SidebarButton>History</SidebarButton></NavLink>
        <NavLink to='music' className={ ({isActive}) => isActive  ? 'text-red-500 font-bold pl-2' : undefined}><SidebarButton>Music</SidebarButton></NavLink>
      </ul>


      <div className='flex md:hidden text-3xl text-indigo-700 dark:text-indigo-200'>
        { menu ? 
          <CgClose onClick={ () => showMenu(false)} /> 
          : 
          <CgMenuRightAlt onClick={ () => showMenu(true)} />
        }
      </div>

      <ul ref={responsiveMenu} className="flex flex-col text-4xl bg-indigo-200/90 dark:bg-indigo-800/90 py-10 pl-10 -top-96 left-0 w-full absolute md:hidden text-indigo-500 dark:text-indigo-200 transition-all ease-in-out duration-300">
        <NavLink to='sports' className={ ({isActive}) => isActive  ? 'text-green-400 font-bold pl-2' : undefined}><SidebarButton>Sports</SidebarButton></NavLink>
          <NavLink to='geography' className={ ({isActive}) => isActive  ? 'text-blue-400 font-bold pl-2' : undefined}><SidebarButton>Geography</SidebarButton></NavLink>
          <NavLink to='history' className={ ({isActive}) => isActive ? 'text-yellow-300 font-bold pl-2' : undefined}><SidebarButton>History</SidebarButton></NavLink>
          <NavLink to='music' className={ ({isActive}) => isActive  ? 'text-red-500 font-bold pl-2' : undefined}><SidebarButton>Music</SidebarButton></NavLink>
      </ul>

    </div>
  )
}

export default Sidebar