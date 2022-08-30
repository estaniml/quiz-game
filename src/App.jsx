import { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Sidebar from "./components/Sidebar";
import SwitchMode from "./components/SwitchMode";
import Geography from "./pages/Geography";
import History from "./pages/History";
import Home from "./pages/Home";
import Music from "./pages/Music";
import Sports from "./pages/Sports";

function App() {
  
  const top = useRef(null)

  return (
    <>
      <Sidebar />
      
      <div ref={top} className='ml-auto w-full md:w-4/5 p-6 md:p-12 pt-16  relative min-h-screen bg-stone-100 dark:bg-gray-900'>

      <div className='flex justify-between mt-6'>
        <p className='text-gray-300 dark:text-gray-700'>created by EML</p>
        <SwitchMode />
      </div>

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="sports" element={<Sports top={top} />} />
            <Route path="geography" element={<Geography top={top} />} />
            <Route path="history" element={<History top={top} />} />
            <Route path="music" element={<Music top={top} />} />
        </Routes>

      </div>
      <Footer />
    </>
  )
}

export default App
