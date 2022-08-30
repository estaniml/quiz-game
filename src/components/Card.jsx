import { useState } from "react";
import { ImCross, ImCheckmark } from 'react-icons/im'

const Card = ({data, score, setScore, setFinalScore}) => {

    const [currentQuestion, setCurrentQuestion] = useState(0)
    const [showAnimation, setShowAnimation] = useState('')

    const options = data[currentQuestion].answers

    const optionChoosen = value => {
        if(value){
            setScore(score + 1)
            setShowAnimation('correct')
        } else if(!value){
            setShowAnimation('wrong')
        }

        if(currentQuestion + 1 < data.length){
            setCurrentQuestion(currentQuestion + 1)
        } else {  
            setFinalScore(true)
        }

        setTimeout(() => {
            setShowAnimation('')
        }, 1000);
    }

  return (
    <div className='mt-12 bg-white dark:bg-gray-800 px-5 md:px-10 py-6 rounded-xl shadow-md relative animate__animated animate__fadeInUp'>

        <div className='flex flex-col gap-2 text-lg mb-2 border-b-2 pb-2 dark:text-gray-300 dark:border-gray-700'>
            
            <p className='text-xl'><strong>{currentQuestion +1}.</strong> {data[currentQuestion].question}</p>

            { data[currentQuestion].img && <img className='w-32' src={data[currentQuestion].img} alt={data[currentQuestion].question} /> }

        </div>

        <ul className="text-gray-600 dark:text-gray-300">
            { 
                options.map( option => ( 
                    <li 
                        onClick={() => optionChoosen(option.correct)}
                        key={option.id}
                        className={ 'cursor-pointer even:bg-indigo-100 dark:even:bg-gray-900 p-4 transition-all ease-in-out md:hover:pl-4 md:hover:bg-indigo-300 dark:md:hover:bg-indigo-500 flex gap-10'  }
                    > {option.answer}
                    </li>   
            ))}
        </ul>

        {
            showAnimation === 'correct' ? (
                <p className="absolute transition-all ease-in-out text-4xl right-10 bottom-10 text-green-500 animate-ping">
                    <ImCheckmark />
                </p>
            ) : showAnimation === 'wrong' ? (
                <p className="absolute transition-all ease-in-out text-2xl right-10 bottom-10 text-red-500 animate-ping">
                    <ImCross />
                </p>
            ) : null
        }

    </div>
  )
}

export default Card