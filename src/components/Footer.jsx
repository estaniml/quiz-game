import { AiFillTwitterCircle, AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-stone-100 dark:bg-gray-900 ml-auto w-full md:w-4/5 px-6 md:px-10 relative bottom-0'>
        <div className='border-t-2 border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between p-6'>
            <div className='flex flex-col'>
                <p className='font-bold text-sky-400'>Estanislao Martinez Lacabe</p>
                <a target='_blank' href='https://github.com/estaniml'className='text-md md:text-right text-sky-300  hover:underline'>
                    React Developer
                </a>
            </div>
            <div className='mt-2 flex gap-5 text-xl text-sky-500'>
                <a target='_blank'  href='https://www.linkedin.com/in/estanislao-martinez-lacabe-79a11b249/' className='transition-all ease-in-out hover:scale-110 hover:text-sky-400'>
                    <AiFillLinkedin />
                </a>
                <a target='_blank'  href='https://github.com/estaniml' className='transition-all ease-in-out hover:scale-110 hover:text-sky-400'>
                    <AiOutlineGithub />
                </a>
                <a target='_blank'  href='https://twitter.com/home?lang=es' className='transition-all ease-in-out hover:scale-110 hover:text-sky-400'>
                    <AiFillTwitterCircle />
                </a>
            </div>
        </div>
    </div>
  )
}

export default Footer