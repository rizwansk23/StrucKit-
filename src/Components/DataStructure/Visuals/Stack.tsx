import React from 'react'
import { motion } from 'motion/react'

const Stack: React.FC<{ data: number[] }> = ({ data }) => {
    return (
  <div className=" flex items-center justify-center">
           <div className="flex gap-2 flex-col ">
            {data.map((num, index) => (
                <motion.div
                    key={index}
                    animate={{ rotate: 360,  }}
                    transition={{ delay: 2, repeat: Infinity,repeatDelay:2 ,duration:3}}
                    className="bg-red-100 w-18 h-16 text-center rounded-2xl text-black p-5">
                    {num}
                </motion.div>
            ))}
        </div>
        </div>
    )
}

export default Stack