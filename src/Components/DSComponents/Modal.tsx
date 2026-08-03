import { Pencil, Plus } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Input from "./Input";
import { GetRandom } from "../../hook/GetRandom";

const Modal: React.FC<{
  data: number[];
  setData: React.Dispatch<React.SetStateAction<number[]>>;
}> = ({ data, setData }) => {
  const [isopen, setisopen] = useState(false);
  const [editedData, setEditedData] = useState<number[]>([...data]);
  const [Arraylength, setArraylength] = useState<number | undefined>(editedData.length || 5);
  const [Selected, setSelected] = useState<"Manual" | "Random">("Manual");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    if (data.length > 0) {
      setEditedData([...data]);
    }
  }, [data]);

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

  const handleSubmit = (data = editedData, isClose = true) => {
    setEditedData([...data]);
    setData(data);
    if (isClose) {
      localStorage.setItem("data", JSON.stringify(data));
      setisopen((prev) => !prev);
    }
  };

  const handleKeySubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setisopen((prev) => !prev);
    }
  };

  const handleKey = (index: number) => {
    inputRefs.current[index]?.blur();
    handleSubmit();
  };

  const AddNumber = ()=>{
    if( editedData.length >= 10)  return
    
    setEditedData((prev) => [...prev,prev.push()])
  }

  const handleDelete = (value : number)=>{
     setEditedData(editedData.filter(prev => prev !== value));
  }


  

  return (
    <div>
      <button
        title="Edit"
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
          className="w-full h-full bg-[#ffffff70] z-999 flex justify-center items-center dark:bg-[#0000004e] text-text"
        >
          <div className="w-1/3 overflow-auto mt-30 mb-10 bg-secondry px-5 py-3 border border-border rounded-2xl">
            <div className="flex flex-col gap-3">
              <h1 className="text-xl font-bold">Edit Number</h1>

              <div className="w-full flex justify-around border-2 border-border rounded-2xl p-1 text-center ">
                <span
                  onClick={() => setSelected("Manual")}
                  className={`${Selected == "Manual" ? "bg-light-green text-xl" : "text-p text-lg"}  p-1 cursor-pointer w-full rounded-xl`}
                >
                  Manual
                </span>
                <span
                  onClick={() => setSelected("Random")}
                  className={`${Selected !== "Random" ? "text-p text-lg" : "bg-light-green text-xl"} p-1 cursor-pointer w-full rounded-xl`}
                >
                  Generate Random
                </span>
              </div>

              {Selected == "Random" && <RandomInputFeild generateRandom={handleSubmit} arraylength={editedData.length} />}

              <div className="overflow-auto h-55">
                <span className="text-2xl font-mono"> [</span>
                <span className="grid grid-cols-3 gap-2">
                  {editedData.map((i: number, ind: number) => (
                    <Input
                      key={ind}
                      values={i}
                      onNext={() => handleNext(ind)}
                      onPrev={() => handlePrev(ind)}
                      onEnter={() => handleKey(ind)}
                      onChange={(newval) => {
                        handleValueChange(ind, newval);
                      }}
                      DeleteNumber={()=>handleDelete(i)}
                      inputRef={(el) => (inputRefs.current[ind] = el) as any}
                    />
                  ))}
                  {editedData.length<10 ? 
                  <span 
                  className="border border-border rounded-2xl w-14 h-12 active:border-yellow active:border-dashed active:scale-90 active:border-2 active:text-yellow hover:text-yellow flex justify-center items-center"
                  onClick={AddNumber}
                  >
                    <Plus />
                  </span>
                  : <div></div>}
                </span>
                <span className="text-2xl font-mono">]</span>
              </div>
            </div>

            <section>
              <button
                className="border-2 border-orange mt-3 px-2  py-1 w-full bg-orange rounded-xl text-lg /font-bold active:scale-95 cursor-pointer"
                onClick={() => {
                  handleSubmit();
                }}
                onKeyDown={(e) => {
                  handleKeySubmit(e);
                }}
              >
                Save and Close
              </button>
              <button
                className="border-2 border-border my-2 px-2 py-1 w-full  rounded-xl text-lg /font-bold active:scale-95 cursor-pointer"
                onClick={() => {
                  setisopen(!open);
                }}
              >
                Cancel
              </button>
            </section>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;

const RandomInputFeild : React.FC<{generateRandom : (data : number[] , isClose : boolean) => void , arraylength :number}> = ({generateRandom , arraylength }) => {
  const [length, setlength] = useState<number>(arraylength);
  const [min, setmin] = useState<number>(0);
  const [max, setmax] = useState<number>(100);

  const DefaultValues: {
    name: string;
    value: number;
    setValue: React.Dispatch<React.SetStateAction<number>>;
  }[] = [
    { name: "length", value: length, setValue: setlength },
    { name: "Min", value: min, setValue: setmin },
    { name: "Max", value: max, setValue: setmax },
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    setValue: React.Dispatch<React.SetStateAction<number>>,
  ) => {
    const Inputnumber = parseInt(e.target.value, 10);

    if (Number.isNaN(Inputnumber)) {
      setValue(0);
      return;
    }

    setValue(Inputnumber);
  };

  const handleRandomData = (ArrayLength : number ) => {
    const RandomData = GetRandom(ArrayLength);
    generateRandom(RandomData,false)
  };

  return (
    <div>
      <div className="flex justify-between items-center gap-3">
        {DefaultValues.map((value, index) => (
          <span key={index} className="w-1/3">
            <label
              htmlFor={value.name}
              className="cursor-pointer text-p text-sm"
            >
              {value.name}
            </label>
            <input
              type="tel"
              className="w-full bg-tertiary rounded-lg text-base py-2 px-3 focus:outline-yellow focus:outline-2 "
              name=""
              maxLength={value.name == "Max" ? 3 : 2}
              id={value.name}
              value={value.value}
              onChange={(e) => handleChange(e, value.setValue)}
            />
          </span>
        ))}
      </div>
      <button 
      className="w-full text-xl bg-light-green active:bg-dark-green active:scale-99 cursor-pointer rounded-xl px-3 py-2 my-3 capitalize"
      onClick={()=> handleRandomData(length)}
      >
        generate
      </button>
    </div>
  );
};
