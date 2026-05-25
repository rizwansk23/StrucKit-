import { useEffect, useState } from "react";
import Footer from "../../Components/Visuals/Footer";
import Main from "../../Components/Visuals/Main";
import Navbar from "../../Components/Visuals/Navbar";
import { sidebar } from "../../Data/sidebar";
import { recursivefunc } from "../../hook/Datafetch";
import { GetPath } from "../../hook/GetPaths"
import Notfound from "../../Pages/Notfound";

const DsVisualLayout = () => {
    
    const path = GetPath();
    const url = recursivefunc(sidebar);

    const storedata = localStorage.getItem('data')
    const StoreData: number[] = storedata ? JSON.parse(storedata) : null;

    console.log(StoreData[2])

    const [num, setnum] = useState<number[]>([]);

    useEffect(() => {
        let num: number[] = [];

        for (let i = 1; i <= 10; i++) {
            let n = Math.floor(Math.random() * 100);
            num = [...num, n];
        }

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
                <div className="dark:bg-[#0c121a] bg-tertiary w-full h-screen flex flex-col justify-center items-center">
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