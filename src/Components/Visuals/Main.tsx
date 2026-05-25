import { Minus, Plus, RotateCw, TextAlignCenter } from "lucide-react";
import { useState } from "react";
import { TransformComponent, TransformWrapper, useControls } from "react-zoom-pan-pinch";

const Main: React.FC<{ data: number[] }> = ({ data }) => {

    const [zoom, setZoom] = useState(100);


    return (
        <main className="w-full text-text flex-1 relative cursor-grabbing z-99">


            <TransformWrapper
                initialScale={1}
                minScale={0.4}
                maxScale={4}
                smooth={true}
                limitToBounds={false}
                centerOnInit
                // centerZoomedOut
                // panning={{
                //     velocityDisabled: false,
                // }}
                wheel={{
                    step: 0.1,
                }}
                onZoom={(ref) => {
                    setZoom(Math.round(ref.state.scale * 100));
                }}

            >
                <Controls zoom={zoom} />
                <TransformComponent
                    wrapperStyle={{
                        width: "100%",
                        height: "100%",
                        // // backgroundColor: "#0c121a",
                        backgroundImage:
                            "radial-gradient(circle, rgba(255,255,255,0.10) 1px, transparent 1px)",
                        backgroundSize: "20px 20px",
                        //     color:'#ffff'
                    }}
                >
                    <div className="flex gap-2">
                        {data.map((num, index) => (
                            <div key={index} className="bg-red-100 w-18 h-16 text-center rounded-2xl text-black p-5">
                                {num}
                            </div>
                        ))}
                    </div>
                </TransformComponent>
            </TransformWrapper>
        </main>
    );
};

export default Main;


const Controls: React.FC<{ zoom: number }> = ({ zoom }) => {
    const { zoomIn, zoomOut, resetTransform, centerView } = useControls();

    return (
        <div className="flex gap-4 z-80 absolute right-3 top-2 bg-primary text-text w-fit  p-3 rounded-2xl cursor-default">
            <button
                className="cursor-pointer active:scale-90"
                onClick={() => zoomIn()}>
                <Plus size={18} />
            </button>
            <button
                className="cursor-pointer active:scale-90"
                onClick={() => zoomOut()}>
                <Minus size={18} />
            </button>
            <button
                className="cursor-pointer active:scale-90"
                onClick={() => resetTransform()}>
                <RotateCw size={18} />
            </button>
            <button
                className="cursor-pointer active:scale-90"
                onClick={() => centerView()}>
                <TextAlignCenter size={18} />
            </button>
            <div className="bg-orange text-text px-2 py-1 rounded">
                {zoom}%
            </div>
        </div>
    );
};
