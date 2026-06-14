import React, { useEffect } from 'react'
import { motion } from "motion/react"
import { useActionState } from 'react'
import axios from "axios"


async function handleClick(prev, formData) {
  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  try {
    const res = await axios.post("http://localhost:5000/contact", {
      name,
      email,
      message
    });
    return res.data;
  } catch (err) {
    return { success: false, msg: "Error sending message" };
  }
}

const Contact = () => {
  const [result, fn, isPending] = useActionState(handleClick,null)

  return (<motion.div 
    id="contact"
  initial={{opacity:1 , y:500, filter:"blur(50px"}}
  whileInView={{opacity:1,y:0,filter:"blur(0px"}}
  viewport={{once:false,amount:0.3}}
  transition={{duration:1}}
  className='flex flex-col gap-5'>
  <h1 className='text-white italic text-bold text-center text-3xl'>Connect with Me</h1>
    <motion.div 
      initial={{ opacity: 0, y: 20 }} 
      animate={{ opacity: 1, y: 0 }} 
      className="mx-5 nm:mx-44 p-6 border rounded-lg shadow bg-blue-700/20"
    >
      <form action={fn} className="space-y-4">
        <input 
          type="text" 
          name="name" 
          placeholder="Your Name" 
          className="border p-2 w-full rounded border-none bg-white" 
          required 
        />
        <input 
          type="email" 
          name="email" 
          placeholder="Your Email" 
          className="border p-2 w-full rounded border-none bg-white" 
          required 
        />
        <textarea 
          name="message" 
          placeholder="Your Message" 
          className="border p-2 w-full rounded border-none bg-white" 
          required 
        />
        <button 
          type="submit" 
          disabled={isPending} 
          className="bg-blue-500 text-white px-4 py-2 rounded w-full"
        >
          {isPending ? "Sending..." : "Send Message"}
        </button>
      </form>

      {result?.success && (
        <p className="mt-4 text-green-600">
          {result.message}
        </p>
      )}
    </motion.div>
  </motion.div>)
}

export default Contact
