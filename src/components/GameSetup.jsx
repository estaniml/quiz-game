import { useEffect, useState } from 'react'
import Card from '../components/Card'

const GameSetup = ({data, top}) => {

    const [play, setPlay] = useState(false)
    const [finalScore, setFinalScore] = useState(false)
    const [score, setScore] = useState(0)
  
    const restartGame = () => {
      setScore(0)
      setFinalScore(false)
      setPlay(false)
    }

    useEffect(() => {
        top.current.scrollIntoView()
    }, [])
    



    
  
    return (
        <div>
    
          { !finalScore && play && 
            <div className='flex justify-center items-center gap-2 mt-16 overflow-hidden'>
                <div className='bg-gradient-to-t from-indigo-300 to-indigo-200 py-3 px-4 text-center text-xl shadow rounded-lg animate__animated animate__fadeIn'>
                    Your score: <strong>{score}</strong>
                </div>
            </div>
          }
    
          {
            play ? 
              (
                finalScore ? (
                    <div className='flex flex-col gap-10 items-center mt-16 bg-indigo-50 py-10 md:w-1/2 mx-auto rounded-xl shadow animate__animated animate__bounceIn'>
                      <p className='text-gray-600 text-xl font-bold animate__animated animate__flash animate__delay-1s'>Final scored: {score} points ({Math.round((score/data.length) * 100)}%)</p>
                      <button 
                        className='bg-indigo-600 text-white font-bold w-40 py-2 transition-all ease-linear hover:bg-indigo-700'
                        onClick={restartGame}
                      >Go back!</button>
                    </div>
                  ) : (
                    <Card 
                      data={data}
                      score={score}
                      setScore={setScore}
                      setFinalScore={setFinalScore}
                    />
                    )
              ) : (
                  <button 
                    className='mt-10 bg-indigo-600 text-white font-bold w-40 py-2 transition-all ease-linear hover:bg-indigo-700  animate-bounce'
                    onClick={() => setPlay(true)}
                  >Play now!</button>
                )
          }
        </div>)
}

export default GameSetup