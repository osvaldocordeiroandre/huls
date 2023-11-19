import {useState} from 'react'

import Header from '../Header/Header'

import ScrollToTop from 'react-scroll-to-top'

export default function Home() {

    const [popUp, setPopUp] = useState(true);
    const [comprar, setComprar] = useState(false);

    const openPopUp = () => {
        setComprar(true)
        setPopUp(false)
    }

    const closePopUp = () => {
        setPopUp(false)
        setComprar(false)
    }

  return (
    
    <div className=' h-screen'>

        <ScrollToTop/>

        <Header/>

        <main className='flex flex-col justify-center items-center pt-24 '>

            <div className='space-y-2'> <h1 className='text-center text-5xl'> Huls.online </h1> <h4 className='text-center'> Estude como nunca ! </h4> </div>

            <div>

                <img className='shadow-2xl w-full rounded' src="https://leads2b.com/blog/wp-content/uploads/2021/05/blog_13-cursos-de-venda-online.png" alt="" />

            </div>


        </main>

        {popUp && (
            
            <div className='flex justify-center fixed right-0 bottom-0 m-6 rounded animate-pop-right z-50 bg-white'>
                <div className='  flex flex-col flex-wrap justify-center items-center rounded p-4 relative shadow-2xl'>
                    <div className='text-center space-y-3'> <h1 className='text-2xl  text-black'> Imperdivel </h1> <p> Os preços cairam e é seu momento de brilhar </p> </div>

                    <div className='flex space-x-5 mt-5 text-center'>
                        <button className='bg-green-300 p-1 rounded text-green-800 shadow-md font-semibold hover-buttons' onClick={openPopUp}> Comprar </button>
                        <button onClick={closePopUp} className='bg-red-500 p-1 text-white rounded hover-buttons'> Fechar </button>
                    </div>
                    
                </div>
            </div>

        )}

        {comprar && (

            <div className=' fixed top-60 w-full flex justify-center items-center '>

                <div className='flex justify-center items-center flex-col space-y-6 w-5/12'>
                   
                   <iframe src="https://www.youtube.com/embed/Ldl_CvMGmEA?si=nhTb0WLoVGBZgWp-" className='rounded w-full' width={700} height={300}  allowFullScreen frameborder="0"></iframe>

                   <button className='bg-red-400 p-1 rounded text-white w-40 text-xl hover-buttons shadow-2xl' onClick={closePopUp}> Fechar </button>


                </div>

            </div>

        )}

    </div>
    
  )
}
