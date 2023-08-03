import React, {useState} from 'react'
import './Motions11.css'
import { motion, useScroll } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'
// react type 전환 

export const Motions = () => {
  const {scrollYProgress} = useScroll();
  console.log(scrollYProgress)


  return (
    
    <>
      <div className='scroll_trigger'>
          <motion.div className='scroll_box'
                      initial={{opacity:0,scale:0}}
                      whileInView={{opacity:1,scale:1}}
                      viewport ={{amount:true}}
          />
      </div>
      <div className='scroll_trigger'>
          <motion.div className='scroll_box'
                      initial={{opacity:0,scale:0}}
                      whileInView={{opacity:1,scale:1}}
          />
      </div>
      <div className='scroll_trigger'>
          <motion.div className='scroll_box'
                      initial={{opacity:0,scale:0}}
                      whileInView={{opacity:1,scale:1}}
            />
      </div>
      <div className='scroll_trigger'>
          <motion.div className='scroll_box'/>
      </div>
    </>
  )
}

export default Motions 

function LoremIpsum () {
  return(
    <div style={{width:"200px"}}>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    <article>
    Lorem ipsum dolor sit amet, 
    consectetur adipisicing elit. Velit saepe eos, 
    labore officia voluptatem magni sit voluptas alias porro totam et necessitatibus
     doloremque hic nostrum, non reprehenderit harum recusandae expedita.
    </article>
    </div>
  )
}