import { Activity, useState } from "react";
import type { datavalue } from "../../Data/sidebar";
import { ChevronRight, } from "lucide-react";
import { Link } from "react-router-dom";


interface DatastructureProps {
    item: datavalue;
    activeItem: string;
    setActiveItem: React.Dispatch<React.SetStateAction<string>>;
}


export const SideList: React.FC<DatastructureProps> = ({ item, activeItem, setActiveItem }) => {

    const [isopen, setisopen] = useState<boolean>(false);

    const hasChildren = item.subtopic && item.subtopic.length > 0;

    const Url = item.topic.replaceAll(' ', '')


    const handlelist = () => {
        setisopen(!isopen);

        if (setActiveItem) {
            setActiveItem(item.topic as string);
        }
    }

    return (
        <li className="list-disc text-text my-2">
            {!hasChildren
                ?
                <Link to={`/${Url}`}>
                    <div
                        onClick={handlelist}
                        className={`flex gap-4 items-center justify-between hover:bg-tile-shadow text-text hover:rounded-xl text-md p-2.5 rounded-xl ${activeItem === item.topic && 'bg-tile-color'} ${hasChildren ? 'cursor-pointer border border-border  ' : 'cursor-default'}`}>
                        {item.icon ?
                            <div className={`border border-border rounded-lg p-1 text-yellow bg-[#ffd00037]`}>
                                {<item.icon  className='size-6' />}
                            </div>
                            : null
                        }
                        <h1 className="flex-1">
                            {item.topic}
                        </h1>
                        {hasChildren ? <ChevronRight size={24} className={`${isopen ? 'rotate-90' : 'rotate-0 '} transition-all ease-in-out duration-200 `} /> : null}
                    </div>
                </Link>
                :
                <div
                    onClick={handlelist}
                    className={`flex gap-4 items-center justify-between h-14 hover:bg-tile-shadow text-text hover:rounded-xl text-md p-2.5  ${hasChildren ? 'cursor-pointer border border-border rounded-xl  ' : 'cursor-default'}`}>
                    {item.icon ?
                        <div className="border border-border rounded-lg p-1 text-yellow bg-[#ffd00037]">
                            {<item.icon className="size-6 rotate-180" />}
                        </div>
                        : null
                    }
                    <h1 className="flex-1">
                        {item.topic}
                    </h1>
                    {hasChildren ? <ChevronRight size={24} className={`${isopen ? 'rotate-90' : 'rotate-0 '} transition-all ease-in-out duration-200 `} /> : null}
                </div>
            }
            {hasChildren && (
                <Activity mode={isopen ? 'visible' : 'hidden'}>
                    <ul className={`${item.topic != 'Data Structure' && ` border-border ml-5 pl-6 `}`}>
                        {
                            item.subtopic?.map((child: any, index: number) => (
                                <SideList item={child} activeItem={activeItem}
                                    setActiveItem={setActiveItem} key={index} />
                            ))
                        }
                    </ul>
                </Activity>
            )}
        </li>
    )
}


