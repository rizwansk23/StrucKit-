import Modal from "./Modal"

const Footer: React.FC<{ data: number[] , setData :React.Dispatch< React.SetStateAction<number[]>> }> = ({ data ,setData}) => {


    return (
        <footer className='w-full z-999 text-description dark:bg-secondry bg-primary h-20 border flex justify-between items-center  self-end border-border px-5'>
            <div className="text-xl flex  items-center  ">
                <h3>Array : </h3>
                <span className="overflow-auto  flex justify-baseline items-center">
                    {data.map((i, ind) => (
                        <span key={ind} className="p-1 m-1 hover:text-yellow cursor-default text-xl">
                            {ind == 0 && '[ '}
                            {i}
                            {ind != data.length - 1 && ','}
                            {ind == data.length - 1 && " ]"}
                        </span>
                    ))}
                </span>
                <span>
                    <Modal data={data} setData={setData} />
                </span>
            </div>
            <div>

            </div>
        </footer>
    )
}

export default Footer