import './hero.css'
import Lottie from "lottie-react";
import devAnimation from '../../animation/developer.json';
import { useRef } from 'react';
import { motion, spring } from 'framer-motion';

const Hero = () => {
    // @ts-ignore
    const lottieRef = useRef();
    return (
        <section className='hero flex' id="Home">
            <div className='left-section'>
                <div className="parent-avatar flex">
                    <motion.img
                    initial={{scale:(0)}}
                    animate={{scale:(1)}}
                    transition={{duration:2}}
                    src="./IMG_0325 (2)-modified.png" className='avatar' alt="" />
                    <div className="icon-verified"></div>
                </div>
            <motion.h1
            initial={{opacity:0}}
            animate={{opacity:1}}
            transition={{duration:2}}
            className='title'>Front-end Developer & UI/UX Designer
            </motion.h1>
            <p className='sub-title'>My name is Hassan Ahmed, I’m a detail-oriented Front-End Developer with hands-on experience from internships at Orbscope, ACS, and the Google Developer Student Club (GDSC), where I contributed to real-world web projects, collaborated in agile teams, and honed my skills in building clean, responsive, and user-centric interfaces.</p>
            
            <div className="all-icons flex">
                <a href="https://www.instagram.com/_call_me_skimo_?igsh=NDljbnluYzJvaWY2&utm_source=qr" target="_blank"><div className="icon icon-instagram"></div></a>
                <a href="https://wa.me/201070076584" target="_blank"><div className="icon icon-whatsapp"></div></a>
                <a href="https://github.com/Skimo-spec" target="_blank"><div className="icon icon-github"></div></a>
                <a href="https://www.linkedin.com/in/hassan-ahmed-9a8ba6232/" target="_blank"><div className="icon icon-linkedin-square"></div></a>
                <a href="../../../Hassan's-CV.pdf" download="CV" className="btn">Download CV</a>
            </div>



            </div>

            <div className='right-section animation'>
                <Lottie lottieRef={lottieRef} className="contactAnimation" animationData={devAnimation} onLoadedImages={() => {
                    lottieRef.current.setSpeed(0.5);
                }}  />
            </div>
        </section>
    );
}

export default Hero;
