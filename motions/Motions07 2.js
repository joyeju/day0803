import React, {useState} from 'react'
import './Motions.css'
import { motion } from 'framer-motion'
import img from '../assets/4607564680502824585.jpg'
// react type 전환 

const Motions = () => {
  const [toggle, setToggle]=useState(false);
  const [isRotate, setIsRotate]=useState(false);

  return (

    <>
    <motion.div 
      className='box'
      animate={{
        scale:[1,2,2,1,1],
        rotate:[0,0,180,180,0],
        borderRadius:["0%","0%","50%","50%","0%"]
      }}
      transition = {{
        duration:2,
        ease:"easeInOut",
        times:[0,0.2,0.5,0.8,1],
        repeat:Infinity

      }}
      >
        Motion
      </motion.div>

  

  
    
    </>
  )
}

export default Motions