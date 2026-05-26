import { useEffect, useState } from "react";
import Footer from "../../Components/Visuals/Footer";
import Main from "../../Components/Visuals/Main";
import Navbar from "../../Components/Visuals/Navbar";
import { sidebar } from "../../Data/sidebar";
import { recursivefunc } from "../../hook/Datafetch";
import { GetPath } from "../../hook/GetPaths"
import Notfound from "../../Pages/Notfound";
import { GetRandom } from "../../hook/GetRandom";

const DsVisualLayout = () => {
    
    const path = GetPath();
    const url = recursivefunc(sidebar);

    const storedata = localStorage.getItem('data')
    const StoreData: number[] = storedata ? JSON.parse(storedata) : null;

    
    const [num, setnum] = useState<number[]>([]);

    useEffect(() => {
        
        const num = GetRandom();

        if (StoreData) {
            setnum(StoreData)
        } else {
            setnum(num);
        }
    }, [storedata]);


    const data = Array.from(num);



    return (
        <>
            {url.includes(path) ? (
                <div className="dark:bg-[#0c121a]  bg-tertiary w-full h-screen flex flex-col justify-center items-center">
                    <Navbar name={path} />
                    <Main data={data} />
                    <Footer data={data} />
                </div>
            )
                : <Notfound />}
        </>
    )
}

export default DsVisualLayout