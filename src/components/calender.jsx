"use client";
import { p2e } from "@/libs/converters";
import { monthLitteral } from "@/utils/months";
import { weekDays, weekdaysIndex } from "@/utils/week";
import du_years from "@/utils/yearsDict";
import { useState } from "react";

function Calender() {
  const today = new Date();
  const persianTodayArr = today.toLocaleDateString("fa-IR").split("/");
  const currentMonth = parseInt(p2e(persianTodayArr[1])) - 1;
  const currentYear = parseInt(p2e(persianTodayArr[0]));

  const [targetPeriod, setTargetPeriod] = useState({
    year: currentYear,
    month: currentMonth,
  });

  function periodHandler(index) {
    if (targetPeriod.month + index > 11) {
      setTargetPeriod((pre) => ({ year: pre.year + 1, month: 0 }));
      return;
    } else if (targetPeriod.month + index < 0) {
      setTargetPeriod((pre) => ({ year: pre.year - 1, month: 11 }));
      return;
    } else {
      setTargetPeriod((pre) => ({ year: pre.year, month: pre.month + index }));
      return;
    }
  }

  return (
    <>
    <div>{monthLitteral[targetPeriod.month]}</div>
      <div className="grid grid-cols-7 justify-between items-center p-5">
        {Object.values(weekDays).map((item, index) => (
          <div className={``} key={index}>
            {item}
          </div>
        ))}
        {du_years[targetPeriod.year][targetPeriod.month].map((item, index) => (
          <div
            style={{
              gridColumn: `${
                weekdaysIndex[new Date(item.georgian).getDay()]
              } / span 1`,
            }}
            className={`${
              today.toISOString().split("T")[0] == item.georgian &&
              "text-blue-700"
            }`}
            key={index}
          >
            {item.persian.split("-")[2]}
          </div>
        ))}
      </div>
      <div className="flex justify-between items-center">
        <button onClick={() => periodHandler(1)}>next</button>
        <button onClick={() => periodHandler(-1)}>pre</button>
      </div>
    </>
  );
}

export default Calender;
