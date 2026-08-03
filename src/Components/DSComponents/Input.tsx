import { X } from "lucide-react";
import { useEffect, useState } from "react";

const Input: React.FC<{
  values: number;
  onNext?: () => void;
  onPrev?: () => void;
  onEnter?: () => void;
  onChange?: (value: number | undefined) => void;
  DeleteNumber?: () => void ; 
  inputRef?: (el: HTMLInputElement | null) => void;
}> = ({ values, onNext, onPrev, onEnter, onChange,DeleteNumber, inputRef }) => {
  const [value, setValue] = useState<number | undefined>(values);
  const ref = inputRef;

  useEffect(() => {
    setValue(values);
  }, [values]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = event.target.value;

    // Allow only digits
    if (!/^\d*$/.test(newValue)) {
      setValue(undefined);
      onChange?.(undefined);
    }

    // Convert to number and ensure it's between 0-99
    if (newValue !== "") {
      const numValue = parseInt(newValue, 10);
      if (numValue > 99) return;
      setValue(numValue);
      onChange?.(numValue);

      // Agar 2 digits complete ho gaye toh next box pe focus karo
      if (newValue.length == 2 && onNext) {
        onNext();
      }
    } else {
      setValue(undefined);
    }
  };
  const handleNext = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "ArrowRight" && onNext) onNext();
    if (event.key === "ArrowLeft" && onPrev) onPrev();
    if (event.key === "Enter" && onEnter) onEnter();
  };

  return (
    <span className="flex justify-between items-center gap-3 bg-tertiary rounded-2xl px-3  focus-within:outline-yellow focus-within:outline-2">
      <input
        ref={ref}
        type="tel"
        maxLength={2}
        pattern="[0-9]{1,2}"
        inputMode="numeric"
        className="w-full h-12 rounded-md focus:outline-none pl-3"
        value={value}
        onChange={handleChange}
        onKeyDown={(e) => handleNext(e)}
      />
      <span 
      className="hover:text-red-400 cursor-pointer active:scale-90"
      onClick={DeleteNumber ? () => DeleteNumber() : undefined}
      >
        <X size={20} />
      </span>
    </span>
  );
};

export default Input;
