'use client'
import {weekDays, weekdaysIndex} from "@/utils/week";
import du_years from "@/utils/yearsDict";

const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))


function Calender() {
    const today = new Date();

    const month = parseInt(p2e((today.toLocaleDateString("fa-IR").split("/")[1])))-1;

    const year = parseInt(p2e((today.toLocaleDateString("fa-IR").split("/")[0])));
console.log(today.getDay(), month)
  return (
    <div className="grid grid-cols-7 justify-between items-center">
        {Object.values(weekDays).map((item,index)=><div className={``} key={index}>{item}</div>)}
        {du_years[year][month].map((item,index)=><div style={{gridColumn: `${weekdaysIndex[new Date(item.georgian).getDay()]} / span 1`}} className={`${today.toISOString().split("T")[0]==item.georgian&&"text-blue-700"}`} key={index}>{item.persian.split("-")[2]}</div>)}
    </div>
  )
}

export default Calender