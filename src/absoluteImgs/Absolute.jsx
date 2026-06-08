import React from 'react'
import {motion} from "motion/react"
import reactlogo from "../assets/react-logo.png"

const Absolute = () => {
  return (
    <motion.div 
    initial={{opacity:0, x:0, y:0, filter:"blur(50px)"}}
    animate={{opacity:0.3, x:0, y:0,filter:"blur(0px)"}}
    transition={{duration:2}}
    className='relative'>
      
        <img src={reactlogo} alt="React-Images" className='animate absolute -top-[100px] -left-[400px] w-2/3'/>
    </motion.div>
  )
}

export default Absolute
