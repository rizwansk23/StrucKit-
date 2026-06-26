import { useEffect, useState } from "react";
import Footer from "../../Components/DSComponents/Footer";
import Main from "../../Components/DSComponents/Main";
import Navbar from "../../Components/DSComponents/Navbar";
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

    const [numbers, setNumbers] = useState<number[]>([]);
    const [selected, setSelected] = useState<string>("");

    useEffect(() => {

        const RandomNumber = GetRandom();

        if (StoreData) {
            setNumbers(StoreData)
        } else {
            setNumbers(RandomNumber);
        }
    }, []);





    return (
        <>
            {url.includes(path) ? (
                <div className="dark:bg-[#0c121a]  bg-tertiary w-full h-screen flex flex-col justify-center items-center">
                    <Navbar name={path} />
                    <Main name={path} data={numbers} selected = {selected} />
                    <Footer name={path} data={numbers} setData={setNumbers} setSelected={setSelected} />
                </div>
            )
                : <Notfound />}
        </>
    )
}

export default DsVisualLayout