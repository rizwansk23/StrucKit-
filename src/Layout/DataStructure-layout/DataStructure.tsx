import React from 'react'
import { Link } from 'react-router-dom'
import { DataStructures } from '../../Data/DataStructure'

const DataStructure: React.FC<{ name: String }> = ({ name }) => {

  const topic = name as string

  return (
    <div>
      <Link to={'./visval'}>
        {DataStructures[topic]?.name}
      </Link>
    </div>
  )
}

export default DataStructure