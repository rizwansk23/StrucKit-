import { useEffect, useState } from "react";
import { dataStructures } from "../../Data/DataStructure";
import Modal from "./Modal";

const Footer: React.FC<{
    name: string;
    data: number[];
    setData: React.Dispatch<React.SetStateAction<number[]>>;
     setSelected: React.Dispatch<React.SetStateAction<string>>
}> = ({ name, data, setData , setSelected }) => {

    
    const Datas = dataStructures[name].operation;

    

    return (
        <footer className="w-full z-999 text-description dark:bg-secondry bg-primary h-20 border flex justify-between items-center  self-end border-border px-5">
            <div className="text-xl w-full flex  items-center cursor-default  ">
                <h3>Array : </h3>
                <span className="overflow-auto  flex justify-baseline items-center">
                    {data.map((i, ind) => (
                        <span key={ind} className="p-1 m-1 hover:text-yellow  text-xl">
                            {ind == 0 && "[ "}
                            {i}
                            {ind != data.length - 1 && ","}
                            {ind == data.length - 1 && " ]"}
                        </span>
                    ))}
                </span>
                <span className="flex-1">
                    <Modal data={data} setData={setData} />
                </span>

                <div className="">
                    <select
                        onChange={(e) => {
                            setSelected(e.target.value);
                        }}
                        className="bg-secondry border hover:border-orange  focus:border-orange-400 focus:ring-2 focus:ring-blue-500/20  border-border px-5 py-1 rounded-lg cursor-pointer"
                    >
                        {Datas?.map((data, index) => (
                            <option key={index} value={data}>
                                {data}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;
