import { useState } from 'react';
import {
  AiOutlineSearch,
  AiFillCheckCircle,
  AiOutlinePlus,
  AiOutlineMinus,
} from 'react-icons/ai';
// import { MdOutlineKeyboardArrowDown } from 'react-icons/md';

const ProductsFilter = () => {
  let [showList, setShowList] = useState(false);
  let [rangePrice, setRangePrice] = useState(0);
  return (
    <div className="w-full pb-4 md:px-0">
      <div className="text-center">
        {/* Search */}
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-[300px] relative">
            <AiOutlineSearch size={20} className="absolute left-1" />
            <input
              type="text"
              placeholder="Search"
              className=" w-full bg-gray-200 rounded-full placeholder:text-sm py-1 pl-7 outline-none border hover:border-amber-200 focus:border-amber-400 focus:bg-gray-50"
            />
          </div>
        </div>
        {/* Select options */}
        <div className="grid  grid-cols-2 grid-rows-[repeat(3,min-content)] gap-4 items-start pt-4 md:flex md: flex-col">
          {/* Category */}
          {/* use map for category, company, color */}
          <div className="border-y border-gray-500 flex flex-col justify-center relative overflow-hidden md:w-full">
            <div
              id="category"
              className="min-w-[100px] w-full flex justify-between items-center  cursor-pointer px-2 py-1"
              onClick={() => setShowList(!showList)}
            >
              Category {showList ? <AiOutlineMinus /> : <AiOutlinePlus />}
            </div>
            <ul
              className={`text-left px-2 transition-all duration-500 ${
                showList
                  ? 'translate-y-[0%] opacity-1'
                  : 'h-0 translate-y-[-5px] opacity-0 -z-10'
              }`}
            >
              <li className="flex justify-between items-center cursor-pointer">
                a {<AiFillCheckCircle className="text-blue-500" />}
              </li>
              <li className="flex justify-between items-center cursor-pointer">
                b {<AiFillCheckCircle className="text-blue-500" />}
              </li>
              <li className="flex justify-between items-center cursor-pointer">
                c {<AiFillCheckCircle className="text-blue-500" />}
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="flex flex-col justify-center border-y border-gray-500 md:w-full overflow-hidden">
            <div className="min-w-[100px] w-full flex justify-between items-center  cursor-pointer px-2 py-1">
              Company <AiOutlinePlus />
            </div>
            <ul
              className={`text-left px-2 transition-all duration-500 ${
                showList
                  ? 'translate-y-[0%] opacity-1'
                  : 'h-0 translate-y-[-5px] opacity-0 -z-10'
              }`}
            >
              <li className="flex justify-between items-center cursor-pointer">
                a {<AiFillCheckCircle className="text-blue-500" />}
              </li>
            </ul>
          </div>
          {/* Colors */}
          <div className="flex flex-col justify-center border-y border-gray-500 md:w-full overflow-hidden">
            <div className="min-w-[100px] w-full flex justify-between items-center border-y border-gray-500 cursor-pointer px-2 py-1">
              Color <AiOutlinePlus />
            </div>
            <ul className=""></ul>
          </div>
          {/* Price */}
          <div className="flex flex-col justify-center border-y border-gray-500 md:w-full overflow-hidden">
            <div className="min-w-[100px] w-full flex justify-between items-center border-y border-gray-500 md:w-full cursor-pointer px-2 py-1">
              Shipping <AiOutlinePlus />
            </div>
            <ul></ul>
          </div>
          {/* Shipping */}
          <div className="flex justify-center col-span-2">
            <div className="w-full max-w-[500px] flex justify-between items-center cursor-pointer px-2 py-1 md:flex-col md:items-start">
              <label htmlFor="price-range" className="">
                Price
              </label>

              <input
                id="price-range"
                type="range"
                min="0"
                max="5000"
                step="100"
                className="appearance-none w-40 h-2 bg-gray-300  rounded-lg cursor-pointer outline-none md:my-2"
                onChange={(e) => setRangePrice(+e.target.value)}
              />
              <p className="min-w-[60px] md:text-left">{`$ ${rangePrice.toLocaleString()}`}</p>
            </div>
            <ul></ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductsFilter;
