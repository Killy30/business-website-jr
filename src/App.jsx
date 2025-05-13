import { useEffect, useState } from 'react'
import Header from './components/Header'
import Carousel from './components/Carousel'
import About from './components/About'
import Services from './components/Services'
import Galery from './components/Galery'
import Coments from './components/Coments'
import Message from './components/Message'
import Footer from './components/Footer'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [datafr, setDatafr] = useState(null)

  useEffect(()=>{
    const requestDataFr = async() => {
      const req = await fetch('../data/data.json')
      const res = await req.json()
      console.log(res);
      setDatafr(res)
    }
    requestDataFr()
  },[])

  return (
    <main>
      <Header/>
      <section id='home'>
        <Carousel/>
      </section>

      <section id='about'>
        <About about={datafr?.about}/>
      </section>

      <section id='service' className='section_services'>
        <Services services={datafr?.services}/>
      </section>

      <section id='section_xx'>
        <div className='container padg_container'>
          <h2 className='text-center fw-bold text-white m-0 fs-1'>
            VOUS AVEZ PRIS UNE DÉCISION COURAGEUSE, BIENVENUE  
          </h2>
        </div>
      </section>

      <section id='galery'>
        <Galery galery={datafr?.galery}/>
      </section>

      <section id='coment'>
        <Coments coments={datafr?.coments} />
      </section>

      <section id='contact'>
        <Message contacts={datafr?.contacts}/>
      </section>
      
      <section id='footer'>
        <Footer/>
      </section>
    </main>
  )
}

export default App
