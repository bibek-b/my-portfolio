import { IconType } from "react-icons"
import { CiCalendar } from "react-icons/ci";

type InfoCardProps = {
    icon: IconType;
    title: string,
    date: number | string,
    subTitle: string,
    info1: string,
    info2: string,
}


export default function InfoCard ({icon: Icon, title, date, subTitle, info1, info2}: InfoCardProps) {
    return (
        <div className="border border-white/20 rounded p-2 text-xl font-[200] space-y-3 w-80 md:w-full ">
             <div className="flex items-center gap-2">
            <Icon />
            <span>{title}</span>
           </div>
           <div className="h-40 flex items-center gap-4 pl-2 text-[17px] text-white/50">
            <div className="h-[70%] bg-white/20 w-[1px] "/>
            <div className="flex gap-2 flex-col">
                <div className="flex items-center gap-2">
            <CiCalendar color="white"/>
            <span className="text-[15px]">{date}</span>
           </div>
           <span className="font-[400] text-white">{subTitle}</span>
           <span>{info1}</span>
           <span>{info2}</span>
            </div>
           </div>
        </div>
    )
}