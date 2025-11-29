import Hero from './components/2-hero/Hero'
import Header from './components/1-header/Header'
import Main from './components/3-main/Main'
import Contact from './components/4-contact/Contact'
import Footer from './components/5-footer/Footer'
import { useEffect } from 'react'
import { useState } from 'react'
import LanguageMarquee from './components/6-languages/LanguageMarquee'


function App() {

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100){
        setshowScrollBTN(true)
      } else{
        setshowScrollBTN(false)
      }
    });
  }, []);
  const [showScrollBTN, setshowScrollBTN] = useState(false);
  return (
    <div id='up' className='container'>
     <Header/>
      <Hero/>
      <div className="divider"></div>
      <LanguageMarquee/>
      <div className="divider"></div>
      <Main/>
      <div className="divider"></div>
      <Contact/>
      <div className="divider"></div>
      <Footer/>

    <a style={{opacity: showScrollBTN? 1 : 0, transition: "0.4s"}} href="#up"><button className=" icon-keyboard_arrow_up scroll2Top"></button></a>
    </div>
  )
}

export default App
