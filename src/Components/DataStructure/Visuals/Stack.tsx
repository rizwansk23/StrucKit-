import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import type { dataProp } from "../../../Data/DataStructure";

type OperationDataProp = Pick<dataProp, "operation">;

export interface StackProp {
    data: number[];
    operation: OperationDataProp | string;
}

const Stack: React.FC<StackProp> = ({ data, operation }) => {
    const [array, setArray] = useState<number[]>(data);

    useEffect(() => {
        setArray(JSON.parse(JSON.stringify(data)));
    }, [data]);

    // let array : number[] = [...data];
    const [Scope, animate] = useAnimate();

    // const animation = async () => {
    //     await animate(
    //         "span",
    //         {
    //             y: [-80, 0],
    //             opacity: [0, 1],
    //             scale: [0.8, 1],
    //         },
    //         {
    //             duration: 0.5,
    //             delay: stagger(0.28),
    //             ease: "easeInOut",
    //         },
    //     );

    //     animate(
    //         "span:last-child",
    //         {
    //             scale: [1, 1.07, 1],
    //         },
    //         {
    //             duration: 1.2,
    //             repeat: Infinity,
    //             repeatDelay: 1,
    //             ease: "easeInOut",
    //         },
    //     );
    // };

    const SearchFunc = async () => {
        await animate(
            "span",
            {
                scale: [1, 1.2, 1],
                backgroundColor: "var(--color-yellow)",
            },
            {
                delay: stagger(1),
                // ease: "easeInOut"
            },
        );
        animate("span", {
            // scale:[1,1.2,1.5,1.2,1,0.8,1],
            backgroundColor: "var(--color-orange)",
        });
        animate("span:last-child", {
            // scale:[1,1.2,1.5,1.2,1,0.8,1],
            backgroundColor: "var(--color-light-green)",
        });
    };

    const [popValue, setPopValue] = useState<number | null>(null);

    const [popArray, setPopArray] = useState<number[]>([]);

    useEffect(() => {
        switch (operation) {
            case "Push":
                
                setPopArray((prev) => prev.slice(0, -1));
                if (popArray.length === 0) break;

                setArray((prev) => [...prev, popArray[popArray.length - 1]]);

                animate("span:last-child", {
                    y: [-40, 0],
                    scale: [1, 1.15, 1],
                });

                break;

            case "Pop":
                if (array.length === 0) break;

                setPopValue(array[array.length - 1]);

                setPopArray((prev) => [...prev, popValue as number]);

                setArray((prev) => prev.slice(0, -1));

                animate(
                    "span:last-child",
                    {
                        y: [0, -80],
                        opacity: [1, 0],
                    },
                    {
                        duration: 1,
                        ease: "easeInOut",
                        delay: 1,
                    },
                );
                break;

            case "Peek":
                animate("span:last-child", {
                    scale: [1, 1.2, 1],
                });
                break;
            case "Search":
                SearchFunc();
                break;
        }
    }, [operation]);

    return (
        <div
            ref={Scope}
            className="flex w-fit h-fit items-center border-t-0 border p-5 gap-4 flex-col-reverse justify-center"
        >
            {array.map((num, index) => {
                const isTop = index === array.length - 1;
                return (
                    <motion.span
                        key={index}
                        initial={{
                            y: -80,
                            opacity: 0,
                            scale: 0.8,
                        }}
                        animate={{
                            y: 0,
                            opacity: 1,
                            scale: isTop ? [1, 1.07, 1] : 1,
                        }}
                        transition={{
                            duration: 0.3,
                            delay: index * 0.18,
                            ease: "easeInOut",
                            scale: isTop
                                ? {
                                    repeat: Infinity,
                                    duration: 1,
                                    repeatDelay: 1,
                                }
                                : {},
                        }}
                        className={`w-18 h-16 flex items-center justify-center rounded-2xl text-black font-semibold shadow-lg 
                            ${isTop ? "bg-light-green" : "bg-orange-400"}`}
                    >
                        {num}
                    </motion.span>
                );
            })}
        </div>
    );
};

export default Stack;
