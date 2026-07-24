import React, { useState } from 'react'
import type { isSelectedProp } from '../../Layout/DataStructure-layout/DsVisualLayout';

const Dropdown: React.FC<{ data: string[] | undefined, setSelected: React.Dispatch<React.SetStateAction<isSelectedProp>> }> = ({ data, setSelected }) => {
    const [isOpen, setisOpen] = useState<boolean>(false);

    const [Value, setValue] = useState<string>('');

    const handleOptionClick = (value: string) => {
        // Aapka existing state logic naye timestamp id ke saath
        setValue(value)
        setSelected({ type: value, id: Date.now() });
        setisOpen(false); // Option select hote hi dropdown close ho jaye
    };
    return (
        <div className="relative w-35 font-sans select-none">

            {/* 1. Select Box (Trigger Button) */}
            {isOpen && (
                <ul className="absolute z-10 w-full  -translate-y-44 mt-1.5 overflow-auto bg-secondry border border-gray-200 rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none">
                    {data?.map((value, index) => (
                        <li
                            key={index}
                            onClick={() => handleOptionClick(value)}
                            className="relative px-4 py-2 text-base cursor-pointer select-none hover:bg-tertiary  transition-colors active:bg-primary"
                        >
                            {value}
                        </li>
                    ))}
                </ul>
            )}
            <div
                onClick={() => setisOpen(!isOpen)}
                className="flex items-center justify-between px-4 py-2.5 bg-secondry border text-text border-gray-300 rounded-md shadow-sm cursor-pointer hover:border-gray-400 active:bg-tertiary transition-colors"
            >
                <span className="text-base">
                    {Value || 'Select'}
                </span>
                {/* Dynamic Arrow Rotation */}
                <span className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}>
                    ▼
                </span>
            </div>
        </div>
    )
}

export default Dropdown