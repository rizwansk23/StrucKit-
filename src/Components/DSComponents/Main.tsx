import { Minus, Plus, Shrink } from "lucide-react";
import { MdCenterFocusWeak } from "@react-icons/all-files/md/MdCenterFocusWeak";
import { useContext, useRef, useState } from "react";
import {
    TransformComponent,
    TransformWrapper,
    useControls,
} from "react-zoom-pan-pinch";
import Stack from "../DataStructure/Visuals/Stack";
import { ThemeContext } from "../../Theme/ThemeContext";
import { dataStructures } from "../../Data/DataStructure";

const Main: React.FC<{ name: string, data: number[] , selected : string }> = ({ name, data , selected }) => {


    const operations = dataStructures[name]

    const { isDarkMode } = useContext(ThemeContext);

    const [zoom, setZoom] = useState<number>(100);
    const [isDragging, setIsDragging] = useState<Boolean>(false);

    const ref = useRef<HTMLDivElement>(null);

    const width = ref.current?.offsetWidth;
    const height = ref.current?.offsetHeight;

    return (
        <main
            ref={ref}
            className={`w-full  text-text flex-1 relative  z-99 ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}
        >
            <TransformWrapper
                initialScale={1}
                minScale={0.5}
                maxScale={4}
                smooth={true}
                limitToBounds={false}
                centerOnInit
                wheel={{
                    step: 0.1,
                }}
                onZoom={(ref) => {
                    setZoom(Math.round(ref.state.scale * 100));
                }}
                doubleClick={{
                    mode: "zoomIn",
                    step: 0.3,
                    animationType: "easeInOutCubic",
                }}
                onPanningStart={() => setIsDragging(true)}
                onPanningStop={() => setIsDragging(false)}
            >
                <Controls zoom={zoom} />
                <TransformComponent
                    wrapperStyle={{
                        width: width,
                        height: height,
                        // backgroundColor: "#0c121a",
                        backgroundImage: `radial-gradient(circle,${isDarkMode ? " rgba(255,255,255,0.12)" : " rgba(0,0,0,0.12)"} 1px, transparent 1px)`,
                        backgroundSize: "20px 20px",
                        // color: '#ffff'
                    }}
                    contentStyle={{
                        width: "100%",
                        height: "100%",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    {/* // animated component goes here */}

                    <operations.visual data = {data} operation = {selected}/>

                </TransformComponent>
            </TransformWrapper>
        </main>
    );
};

export default Main;

const Controls: React.FC<{ zoom: number }> = ({ zoom }) => {
    const { zoomIn, zoomOut, resetTransform, centerView } = useControls();

    window.addEventListener("keydown", (e: KeyboardEvent) => {
        if (e.ctrlKey && e.key === "y") resetTransform();
        e.key == "Ctrl + c" && centerView();
    });

    return (
        <div className="flex gap-4 z-80 absolute right-3 top-2 bg-primary text-text w-fit  p-3 rounded-2xl cursor-default">
            <button
                title="Zoom in"
                className="cursor-pointer active:scale-90"
                onClick={() => zoomIn(0.3)}
            >
                <Plus size={18} />
            </button>
            <button
                title="Zoom out"
                className="cursor-pointer active:scale-90"
                onClick={() => zoomOut(0.3)}
            >
                <Minus size={18} />
            </button>
            <button
                title="Resize"
                className="cursor-pointer active:scale-90"
                onClick={() => resetTransform()}
            >
                <Shrink size={18} />
            </button>
            <button
                title="Center"
                className="cursor-pointer active:scale-90"
                onClick={() => centerView()}
            >
                <MdCenterFocusWeak size={18} />
                {/* <TextAlignCenter size={18} /> */}
            </button>
            <div className="bg-orange text-text px-2 py-1 rounded">{zoom}%</div>
        </div>
    );
};
