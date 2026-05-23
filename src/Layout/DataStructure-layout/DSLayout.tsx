import React from 'react'
import Navbar from '../../Components/DataStructure/Navbar'
import { dataStructures } from '../../Data/DataStructure'
import DataStructure from '../../Pages/DataStructure'
import Notfound from '../../Pages/Notfound'

const DSLayout: React.FC<{ name: String }> = ({ name }) => {

  const topic = name as string

  return (
    <div>
      {
        dataStructures[topic]
          ?
          <div>
            <Navbar data={dataStructures[topic]} />
            <DataStructure data={dataStructures[topic]} />
          </div>
          : <Notfound />
      }
    </div>
  )
}

export default DSLayout