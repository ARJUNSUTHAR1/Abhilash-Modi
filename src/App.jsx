import React, { useEffect } from 'react'
import Header from './Component/Header/Header'
import { AnimatePresence } from 'framer-motion';
import Impact from './pages/Imapct/Impact'
import Landing from './pages/Landing/Landing'
import { Routes, Route, useNavigate, Link } from 'react-router-dom'
import Footer from './Component/Footer/Footer'
import PreLoader from './Component/Preloader/PreLoder';
import Dost from './Component/Dost/Dost';


function App() {


  const navigate = useNavigate()




  useEffect(() => {
    (
      async () => {
        const LocomotiveScroll = (await import('locomotive-scroll')).default
        const locomotiveScroll = new LocomotiveScroll();

        setTimeout(() => {
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }

    )()
    navigate('/')
  }, [])


  return (
    <>
      <AnimatePresence mode='wait'>
        {
          PreLoader()
        }
      </AnimatePresence>
      {/* TOGGLE*/}
      <div className='dost-toggle'>
        <input type="checkbox" defaultChecked="checked" id="favorite" name="favorite-checkbox" defaultValue="favorite-button" />
        <Link to={'/dost'}>
          <label htmlFor="favorite" className="container">
            <div className="action">
              <span className="option-2">You Are Not Alone I'm Your Dost</span>
            </div>
          </label>
        </Link>
      </div>

      <Header />

      <Routes>
        {/* home */}
        <Route path='/' element={<Landing />} />

        {/* Impact */}
        <Route path='/impact' element={<Impact />} />

        {/* Dost */}
        <Route path='/dost' element={<Dost />} />

      </Routes>

      <Footer />
    </>
  )
}

export default App
