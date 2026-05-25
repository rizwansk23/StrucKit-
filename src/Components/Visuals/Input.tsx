import { useState } from "react";

const Input: React.FC<{
    values: number;
    onNext?: () => void;
    onPrev?: () => void;
    onChange?: (value: number | undefined) => void;
    inputRef?: (el: HTMLInputElement | null) => void;
}> = ({ values, onNext, onPrev, onChange, inputRef }) => {
    const [value, setValue] = useState<number | undefined>(values);
    const ref = inputRef;


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
            onChange?.(undefined)
        }
        // onChange?.(Number(newValue) )
    };
    const handleNext = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === "ArrowRight" && onNext) {
            onNext();
        }
        if (event.key === "ArrowLeft" && onPrev) {
            onPrev();
        }
    };

    return (
        <input
            ref={ref}
            type="tel"
            maxLength={2}
            pattern="[0-9]{1,2}"
            inputMode="numeric"
            className="w-12 h-12 text-center text-xl  rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={value}
            onChange={handleChange}
            onKeyDown={(e) => handleNext(e)}
        />
    );
};

export default Input