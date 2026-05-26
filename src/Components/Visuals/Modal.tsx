import { Pencil } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";

const Modal: React.FC<{ data: number[] }> = ({ data }) => {

    const [isopen, setisopen] = useState(false);
    const [editedData, setEditedData] = useState<(number | undefined)[]>([...data]);


    useEffect(() => {
        if (data.length > 0) {
            setEditedData([...data]);
        }
    }, [data]);
    
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleNext = (currentIndex: number) => {
        if (currentIndex < inputRefs.current.length - 1) {
            inputRefs.current[currentIndex + 1]?.focus();
        }
    };

    const handlePrev = (currentIndex: number) => {
        if (currentIndex > 0) {
            inputRefs.current[currentIndex - 1]?.focus();
        }
    };

    const handleValueChange = (index: number, newValue: number | undefined) => {
        setEditedData((prev) => {
            const updated = [...prev];
            updated[index] = newValue ?? data[index];
            return updated;
        });
    };

    const handleSubmit = () => {
        setEditedData(editedData);
        localStorage.setItem('data', JSON.stringify(editedData));
        setisopen(!open)
    }

    const handleKeySubmit = (event:React.KeyboardEvent)=>{
        if(event.key === 'Enter'){
            // handleSubmit()
        setisopen(!open)

        }
    }

    const handleKey = (index : number)=>{
            inputRefs.current[index ]?.blur();
            handleSubmit()
    }

    return (
        <div>
            <button
                className="align-top cursor-pointer"
                onClick={() => {
                    setisopen(!isopen);
                }}
            >
                <Pencil size={12} />
            </button>

            {isopen && (
                <div
                    id="modal"
                    popover="manual"
                    className="w-full h-full bg-[#ffffff70] flex justify-center items-center dark:bg-[#0000004e] text-text"
                >
                    <div className="w-fit bg-primary px-5 py-3 border border-border rounded-2xl">
                        <h1>Add list</h1>
                        {data.map((i: number, ind: number) => (
                            <span
                                key={ind}
                                className=" hover:text-yellow cursor-default text-base"
                            >
                                {ind == 0 && <span className="text-2xl">[</span>}
                                <Input
                                    values={i}
                                    onNext={() => handleNext(ind)}
                                    onPrev={() => handlePrev(ind)}
                                    onEnter={()=> handleKey(ind)}
                                    onChange={(newval) => {
                                        handleValueChange(ind, newval);
                                    }}
                                    inputRef={(el) => (inputRefs.current[ind] = el) as any}
                                />
                                {ind == data.length - 1 && <span className="text-2xl">]</span>}
                            </span>
                        ))}
                        <button
                            className="border mt-3 px-2  py-1 w-full  rounded-xl text-base cursor-pointer"
                            onClick={handleSubmit}
                            onKeyDown={(e)=>{handleKeySubmit(e)}}
                        >
                            close
                        </button>
                        {/* <button
                            className="border my-2 px-2 py-1 w-full  rounded-xl text-base cursor-pointer"
                            onClick={() => {
                                setisopen(!open);
                                console.log(editedData)
                            }}
                        >
                            close
                        </button> */}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Modal;
