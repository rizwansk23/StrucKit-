import { Sidebar } from 'lucide-react'
import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Stack:React.FC<{name :String}> = ({name}) => {
  return (
    <div>
        <Link to={'./visval'}>
        {name} page
        </Link>
    </div>
  )
}

export default Stack