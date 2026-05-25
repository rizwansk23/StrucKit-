import React from 'react'
import type { dataType } from '../Components/DataStructure/Navbar'
import { Link } from 'react-router-dom'
import Stack from '../Components/DataStructure/VisualsBox/Stack'



const   DataStructure: React.FC<dataType> = ({ data }) => {

    const complexity = [data.complexity.insert, data.complexity.delete, data.complexity.search, data.complexity.traverse]

    return (
        <main className='m-10 w-[85%]'>
            <section className=' my-5'>
                <h1 className='text-sm text-heading uppercase'>description</h1>
                <p className='text-description text-lg mt-2 line-clamp-3'>{data.description}</p>
            </section>
            <section className=' my-5'>
                <h1 className='text-sm text-heading uppercase'>visual</h1>
                <Link to={'./visual'}>
                    <div className='border border-tile-color  w-full h-80 my-4 rounded-2xl bg-tile-shadow dark:bg-tertiary '>
                        <Stack/>
                    </div>
                </Link>
            </section>
            <section className='my-5'>
                <h1 className='text-sm text-heading uppercase'>complexity</h1>
                <div className='grid grid-cols-2 gap-5 my-4'>
                    {complexity.map((data, index) => (
                        <div
                            className='dark:border-tile-shadow border-tile-color  border rounded-2xl py-3 px-7 hover:scale-105 hover:border-[#A4DDED]'
                            key={index}>
                            <h1 className='text-text text-xl font-medium capitalize'>{data.name}</h1>
                            <h1 className='text-orange text-xl font-medium '> {data.time_complexity}</h1>
                            <p className='text-sm text-description'>{data.description}</p>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}

export default DataStructure