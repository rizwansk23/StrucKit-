import React from 'react'
import type { dataProp } from '../../Data/DataStructure'

export interface dataType {
    [key: string]: dataProp
}

const Navbar: React.FC<dataType> = ({ data }) => {

    const bg_color: string[] = [
        'bg-[#ffd00037]', //yellow
        'bg-[#ff800037]',//orange
        'bg-[#2668674d]',//light green
    ]

    const text_color: string[] = [
        'text-yellow',
        'text-orange',
        'text-light-green'
    ]

    const random = Math.floor(Math.random() * (bg_color.length - 1 + 1)) + 0;

    return (
        <nav className='border-b border-border pb-3 py-2 px-5'>
            <h1 className='text-3xl uppercase font-bold pb-3'>{data.topic}</h1>
            <div className='flex gap-2'>
                {
                    data.type.map((a, index) => (
                        <h1 key={index} className={`text-sm ${bg_color[random]} ${text_color[random]}  font-medium rounded-2xl px-2 py-1`}>{a}</h1>
                    ))
                }
            </div>
        </nav>
    )
}

export default Navbar