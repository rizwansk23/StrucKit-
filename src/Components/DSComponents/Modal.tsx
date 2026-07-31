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
  const [Arraylength, setArraylength] = useState<number | undefined>(
    data.length,
  );
  const [Selected, setSelected] = useState<"Manual" | "Random">("Manual");

  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const DefaultValues: { name: string; value: number }[] = [
    { name: "length", value: 5 },
    { name: "Min", value: 1 },
    { name: "Max", value: 100 },
  ];

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
      setisopen(!open);
    }
  };

  const handleKeySubmit = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setisopen(!open);
    }
  };

  const handleKey = (index: number) => {
    inputRefs.current[index]?.blur();
    handleSubmit();
  };

  const handleRandomData = (ArrayLength = 10) => {
    const RandomData = GetRandom(ArrayLength);
    handleSubmit(RandomData, false);
  };

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
          className="w-full h-full bg-[#ffffff70] flex justify-center items-center dark:bg-[#0000004e] text-text"
        >
          <div className="w-1/3 overflow-auto  bg-secondry px-5 py-3 border border-border rounded-2xl">
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

              {Selected == "Random" && (
                <div className="flex justify-between items-center gap-3">
                  {DefaultValues.map((value, index) => (
                    <span key={index} className="w-1/3  ">
                      <label htmlFor="Label">{value.name}</label>
                      <input
                        type="number"
                        className="w-full bg-tertiary rounded-lg text-base py-2 px-3 focus:outline-yellow focus:outline-2 "
                        name=""
                        id={value.name}
                        value={value.value}
                      />
                    </span>
                  ))}
                </div>
                // <button
                //   onClick={() => {
                //     handleRandomData(Arraylength);
                //     // setArraylength();
                //   }}
                // >
                //   Getnerate random
                //   <input
                //     type="text"
                //     max={10}
                //     min={1}
                //     value={Arraylength}
                //     onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                //       const value = Number(e.target.value);
                //       if (value >= 0 && value <= 10) {
                //         setArraylength(value);
                //         handleRandomData(value);
                //       }
                //     }}
                //   />
                // </button>
              )}

              <div className="">
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
                      inputRef={(el) => (inputRefs.current[ind] = el) as any}
                    />
                  ))}
                  <span className="border border-border rounded-2xl w-14  active:border-yellow active:border-dashed active:scale-90 active:border-2 active:text-yellow hover:text-yellow flex justify-center items-center">
                    <Plus />
                  </span>
                </span>
                <span className="text-2xl font-mono">]</span>
              </div>
            </div>

            <section>
              <button
                className="border-2 border-border mt-3 px-2  py-1 w-full bg-orange rounded-xl text-lg font-bold active:scale-95 cursor-pointer"
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
                className="border-2 border-border my-2 px-2 py-1 w-full  rounded-xl text-lg font-bold active:scale-95 cursor-pointer"
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
