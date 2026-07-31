import { dataStructures } from "../../Data/DataStructure";
import type { isSelectedProp } from "../../Layout/DataStructure-layout/DsVisualLayout";
import Dropdown from "./Dropdown";
import Modal from "./Modal";

const Footer: React.FC<{
    name: string;
    data: number[];
    setData: React.Dispatch<React.SetStateAction<number[]>>;
    setSelected: React.Dispatch<React.SetStateAction<isSelectedProp>>
}> = ({ name, data, setData, setSelected }) => {


    const Datas = dataStructures[name].operation;



    return (
        <footer className="w-full z-999 text-description dark:bg-secondry bg-primary h-20 border flex justify-between items-center  self-end border-border px-5">
            <div className="text-lg w-full flex  items-center cursor-default gap-2 ">
                <kbd className="text-p">Array </kbd>
                <span className="overflow-auto  flex justify-baseline items-center">
                    [
                    {data.map((i, number) => (
                        <span key={number} title={'Index = '+number.toString()} className={`p-1 m-1  text-lg ${number == data.length -1 && 'text-orange'}`}>
                            {i}
                            {number != data.length - 1 && ","}
                        </span>
                    ))}
                    ]
                </span>
                <span className="flex-1">
                    <Modal data={data} setData={setData} />
                </span>

                <div className="">
                    {/* <select
                        onChange={(e) => {
                            setSelected({ type: e.target.value, id: Date.now() });
                            console.log('operation change')
                        }}
                        className="bg-secondry border hover:border-orange  focus:border-orange-400 focus:ring-2 focus:ring-blue-500/20  border-border px-5 py-1 rounded-lg cursor-pointer"
                    >
                        {Datas?.map((data, index) => (
                            <option key={index} value={data}>
                                {data}
                            </option>
                        ))}
                    </select> */}
                    <Dropdown data={Datas} setSelected={setSelected} />
                </div>
            </div>
            <div></div>
        </footer>
    );
};

export default Footer;
