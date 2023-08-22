"use client";
import { p2e } from "@/libs/converters";
import { monthLitteral } from "@/utils/months";
import { weekDays, weekdaysIndex } from "@/utils/week";
import du_years from "@/utils/yearsDict";
import { useState } from "react";
import { HiOutlineChevronRight, HiOutlineChevronLeft } from "react-icons/hi2";

function DatePicker() {
  const today = new Date();
  const ISOToday = today.toISOString().split("T")[0];
  const persianTodayArr = today.toLocaleDateString("fa-IR").split("/");
  const currentDay = parseInt(p2e(persianTodayArr[2]))
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
    <div className="bg-primary shadow-lg p-5 sm:p-10 text-primary">
      <h6 className="text-xl font-semibold">تاریخ را انتخاب کنید</h6>
      <div className="flex justify-between items-center">
        <div>
          {monthLitteral[targetPeriod.month]} {currentYear}
        </div>
        <div className="flex justify-end items-center">
          <button
            disabled={
              targetPeriod.month + targetPeriod.year <
              currentMonth + currentYear
            }
            className={`${
              targetPeriod.month + targetPeriod.year <
                currentMonth + currentYear && "cursor-not-allowed text-gray-200"
            }}`}
            onClick={() => periodHandler(-1)}
          >
            <HiOutlineChevronRight className="w-6 h-6" />
          </button>
          <button onClick={() => periodHandler(1)}>
            <HiOutlineChevronLeft className="w-6 h-6" />
          </button>
        </div>
      </div>
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
              ISOToday == item.georgian && "text-white bg-sky-600"
            } ${
              (parseInt(`${currentYear}${currentMonth+1>9||`0${currentMonth+1}`}${currentDay}`) <= parseInt(item.persian.replace(/-/g,""))) &&
              "bg-[#84ecea8b] text-[#1a7e7c]"
            } rounded-full p-2 w-10 h-10`}
            key={index}
          >
            {item.persian.split("-")[2]}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DatePicker;
