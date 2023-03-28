import { useState } from 'react';
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai';

const FilterDropdown = ({ children, filterName }) => {
  const [showList, setShowList] = useState(false);

  return (
    <div className="border-y border-gray-500 flex flex-col justify-center relative overflow-hidden max-w-[300px] w-full">
      <div
        className="min-w-[100px] w-full flex justify-between items-center cursor-pointer px-2 py-1"
        onClick={() => setShowList(!showList)}
      >
        <span className="font-bold">{filterName}</span>
        {showList ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </div>
      <ul
        className={`text-left px-2 transition-all duration-500 ${
          showList
            ? 'translate-y-[0%] opacity-1'
            : 'h-0 translate-y-[-5px] opacity-0 -z-10'
        }`}
      >
        {children}
      </ul>
    </div>
  );
};
export default FilterDropdown;
