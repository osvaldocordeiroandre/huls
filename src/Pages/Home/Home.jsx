import {useState} from 'react'

import Header from '../Header/Header'

import ScrollToTop from 'react-scroll-to-top'

export default function Home() {

    const [popUp, setPopUp] = useState(true);

    const closePopUp = () => {
        setPopUp(false)
    }

  return (
    
    <div className=' h-screen'>

        <ScrollToTop/>

        <Header/>

        <main className='flex flex-col justify-center items-center pt-24 '>

            <div className='space-y-2'> <h1 className='text-center text-5xl'> Huls.online </h1> <h4 className='text-center'> Estude como nunca ! </h4> </div>


        </main>

        {popUp && (
            
            <div className='flex justify-center fixed right-0 bottom-0 m-6 border rounded animate-pop-right'>
                <div className='  flex flex-col flex-wrap justify-center items-center rounded p-4 relative shadow-2xl'>
                    <div className='text-center space-y-3'> <h1 className='text-2xl  text-black'> Imperdivel </h1> <p> Os preços cairam e é seu momento de brilhar </p> </div>

                    <div className='flex space-x-5 mt-5 text-center'>
                        <button className='bg-green-300 p-1 rounded text-green-800 shadow-md font-semibold hover:scale-95 transition-all'> Comprar </button>
                        <button onClick={closePopUp} className='bg-red-500 p-1 text-white rounded hover:scale-95 transition-all'> Fechar </button>
                    </div>
                    
                </div>
            </div>

        )}

    </div>
    
  )
}
