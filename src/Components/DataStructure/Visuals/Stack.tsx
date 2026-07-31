import React, { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
// import type { dataProp } from "../../../Data/DataStructure";
import type { isSelectedProp } from "../../../Layout/DataStructure-layout/DsVisualLayout";

// type OperationDataProp = Pick<dataProp, "operation">;

export interface StackProp {
    data: number[];
    operation: isSelectedProp;
}

const Stack: React.FC<StackProp> = ({ data, operation }) => {
    const [array, setArray] = useState<number[]>(data);
    const [popArray, setPopArray] = useState<number[]>([]);
    const [Scope, animate] = useAnimate();

    useEffect(() => {
        setArray(JSON.parse(JSON.stringify(data)));
    }, [data]);

    const SearchFunc = async () => {
        await animate(
            "span",
            {
                scale: [1, 1.2, 1],
                backgroundColor: "var(--color-yellow)",
            },
            {
                delay: stagger(1),
            },
        );
        animate("span", {
            backgroundColor: "var(--color-orange)",
        });
        animate("span:last-child", {
            backgroundColor: "var(--color-light-green)",
        });
    };

    const PopFunc = async () => {
        const value = array[array.length - 1];

        await animate(
            "span:last-child",
            {
                y: [0, -80],
                opacity: [1, 0],
            },
            {
                duration: 0.3,
                ease: "easeInOut",
                delay: 0.3,
            },
        );
        setPopArray((prev) => [...prev, value]);

        setArray((prev) => prev.slice(0, -1));
    };

    const PushFunc = async () => {
        setPopArray((prev) => prev.slice(0, -1));

        setArray((prev) => [...prev, popArray[popArray.length - 1]]);

        await animate("span:last-child", {
            y: [-40, 0],
            scale: [1, 1.15, 1],
            backgroundColor: "var(--color-orange)",
        });
    };

    useEffect(() => {
        console.log(operation);
        switch (operation.type) {
            case "Push":
                if (popArray.length === 0) break;

                PushFunc();

                break;

            case "Pop":
                if (array.length === 0) break;

                PopFunc();
                break;

            case "Peek":
                animate("span:last-child", {
                    scale: [1, 1.2, 1],
                });
                break;
            case "Search":
                SearchFunc();
                break;
            default:
                animate("span:last-child", {
                    backgroundColor: "var(--color-light-green)",
                });
                if (array.length === 1) {
                    animate("span", {
                        backgroundColor: "var(--color-light-green)",
                    });
                }
        }
    }, [operation.id]);


    return (
        <div
            ref={Scope}
            className="flex w-fit h-fit items-center border-t-0 border-b-0 border  rounded-b-2xl px-5 py-3 gap-4 flex-col-reverse justify-center"
        >
            {array.map((num, index) => {
                const isTop = index === array.length - 1;
                return (
                    <motion.span
                        title={JSON.stringify(array[index])}
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
