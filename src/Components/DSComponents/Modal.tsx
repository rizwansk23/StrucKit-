import { Pencil } from "lucide-react";
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
          <div className="w-1/3 overflow-auto  bg-primary px-5 py-3 border border-border rounded-2xl">
            <div className="flex justify-around gap-20">
              <h1>Edit</h1>
              <button
                onClick={() => {
                  handleRandomData(Arraylength);
                  // setArraylength();
                }}
              >
                Getnerate random
                <input
                  type="text"
                  max={10}
                  min={1}
                  value={Arraylength}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    const value = Number(e.target.value);
                    if (value >= 0 && value <= 10) {
                      setArraylength(value);
                      handleRandomData(value);
                    }
                  }}
                />
              </button>
            </div>
            {editedData.map((i: number, ind: number) => (
              <span
                key={ind}
                className=" hover:text-yellow cursor-default text-base     "
              >
                {ind == 0 && <span className="text-2xl font-mono">[</span>}
                <Input
                  values={i}
                  onNext={() => handleNext(ind)}
                  onPrev={() => handlePrev(ind)}
                  onEnter={() => handleKey(ind)}
                  onChange={(newval) => {
                    handleValueChange(ind, newval);
                  }}
                  inputRef={(el) => (inputRefs.current[ind] = el) as any}
                />
                {ind == data.length - 1 && (
                  <span className="text-2xl font-mono">]</span>
                )}
              </span>
            ))}
            <section>
              <button
                className="border mt-3 px-2  py-1 w-1/2   rounded-xl text-base cursor-pointer"
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
                className="border my-2 px-2 py-1 w-full  rounded-xl text-base cursor-pointer"
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
