import React, { useState, useEffect, useRef  } from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";

type DateType = {
  date: Date;
  accessible: boolean;
};

const DatePicker: React.FC<any> = ({ setDate }) => {
  const [hoveredDate, setHoveredDate] = useState<Date | null>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [calendar, setCalendar] = useState<DateType[]>([]);
  const calendarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setCalendar(generateCalendar());
  }, [currentMonth]);

  function generateCalendar(): DateType[] {
    let dates: DateType[] = [];
    let currentDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
    while (currentDate.getMonth() === currentMonth.getMonth()) {
      dates.push({ date: new Date(currentDate), accessible: currentDate >= new Date() });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }

  function onDateClick(clickedDate: Date) {
    setDate(clickedDate);
    setSelectedDate(clickedDate);
  }

  function nextMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() + 1, 1));
  }

  function prevMonth() {
    setCurrentMonth(prev => new Date(prev.getFullYear(), prev.getMonth() - 1, 1));
  }


  const daysOfWeek = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

  return (
    <div className="border-2 rounded-xl">
        <div className="w-[270px] rounded-[5px] p-3 mt-3 ">
          <div className='arrow-up'></div>
          <div className="flex justify-between items-center px-2 py-1">
            <button className='text-black' onClick={prevMonth}>
            <ChevronLeftIcon className="h-7 w-7" />
            </button>
            <div className="text-center text-black w-32">
              <div>{currentMonth.toLocaleString('fr-FR', { month: 'long' })}</div>
              <div>{currentMonth.getFullYear()}</div>
            </div>
            <button className='text-black' onClick={nextMonth}>
              <ChevronRightIcon className="h-7 w-7" />
            </button>
          </div>
          <div className="grid grid-cols-7 gap-1">
            {daysOfWeek.map((day, index) => (
              <div key={index} className="flex justify-center text-black items-center border-b border-gray-200">
                {day}
              </div>
            ))}
            {calendar.map(({ date, accessible }, i) => (
              <div
                key={i}
                className={`flex justify-center  items-center rounded-sm
                ${accessible ? 'cursor-pointer' : 'text-gray-400'}
                ${(hoveredDate && date.toISOString() === hoveredDate.toISOString() && date.toISOString() !== selectedDate?.toISOString()) ? 'bg-[#343434] text-white' : ''}
                ${(selectedDate && date.toISOString() === selectedDate?.toISOString()) ? 'bg-amber-100 text-amber-900' : ''}`}
                onClick={accessible ? () => onDateClick(date) : undefined}
                onMouseEnter={accessible ? () => setHoveredDate(date) : undefined}
                onMouseLeave={accessible ? () => setHoveredDate(null) : undefined}
              >
                {date.getDate()}
              </div>
            ))}
          </div>
        </div>
    </div>
  );
};

export default DatePicker;
