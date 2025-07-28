import React, { useState } from 'react';
import './main.css';
import { myProjects } from './myProjects';
import { AnimatePresence, motion, transform } from 'framer-motion';



const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setarr] = useState(myProjects);

  const handleClick =(buttonCategory) => {
    setcurrentActive(buttonCategory)
            const newArr = myProjects.filter((item) => {
              return item.category === buttonCategory
            })
            setarr(newArr)
  }
    return (
      <main id='projects' className="flex">
        <section className="flex left-section">
          <button onClick={() => {setcurrentActive("all"), setarr(myProjects);}} className={currentActive === "all" ? "active" : null}>All Projects</button>

          <button onClick={() => {
            handleClick("css")
            ;}} className={currentActive === "css" ? "active" : null}>HTML & CSS</button>

          <button onClick={() => {
            handleClick("js")
          }} className={currentActive === "js" ? "active" : null}>JavaScript</button>

          <button onClick={() => {
            handleClick("react")
            ;}} className={currentActive === "react" ? "active" : null}>React</button>
        </section>

        <section className="right-section flex">
          <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
              layout
              initial={{transform: "scale(0)"}}
              animate={{transform: "scale(1)"}}
              transition={{type: "spring", damping:8, stiffness:50}}

              key={item.imgPath} className="card">
                <img width={266} src={item.imgPath} alt="" />
                <div style={{ width: "266px" }} className="box">
                  <h1 className="title">{item.projectTitle}</h1>
                  <p className="sub-title">
                    {item.sub}
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "11px" }} className="flex">
                      <a href={item.webLink}>
                        <div className="icon-link"></div>
                      </a>
                      <a href={item.gitLink}>
                        <div className="icon-github"></div>
                      </a>
                    </div>
                    <a className="link flex" href={item.webLink}>
                      More{" "}
                      <span
                        style={{ alignSelf: "end" }}
                        className="icon-long-arrow-right"
                      ></span>
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
          </AnimatePresence>
        </section>
      </main>
    );
}

export default Main;
