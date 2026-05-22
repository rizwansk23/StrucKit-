import React, { useState } from 'react'

interface togglefunction {
  onchange: (active : boolean) => void,
  isDarkmode : boolean ,
  className ?: string,
}

const ToggleButton: React.FC<togglefunction> = ({ onchange ,isDarkmode, className = '' }) => {

  const [isactive, setisActive] = useState<boolean>(isDarkmode)

  const handleclick = () => {
    const nextstage = !isactive;
    setisActive(nextstage);
    onchange(nextstage);

  }


  return (
    <div
      onClick={handleclick}
      className={`h-7 w-12 bg-dark-green dark:bg-[#F5F5F5]  rounded-full cursor-pointer relative ${className}`}
    >
      <div
        className={`size-4 bg-orange rounded-full transition-all ease-in-out duration-500 absolute top-1.5 ${isactive
          ? 'left-full -translate-x-[calc(100%+8px)]'
          : 'left-2 translate-x-0'
          }`}
      />
    </div>
  )
}

export default ToggleButton