import { useSelector, useDispatch } from 'react-redux';

import { IoGrid, IoList } from 'react-icons/io5';

import { sortBy } from '../../utils/constants';
import { productsAction } from '../../store/products';

const ProductsSort = () => {
  // set up filterInput subscription
  const { filterProducts, sortType } = useSelector((state) => state.products);
  const filterDispatch = useDispatch();

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center mb-4 p-1">
      {/* Display mode */}
      <div className="flex items-center">
        <p className="hidden md:flex">
          <IoGrid
            size={25}
            className="cursor-pointer border border-black rounded-sm"
            onClick={() => filterDispatch(productsAction.display('grid'))}
          />
          <IoList
            size={25}
            className="cursor-pointer border border-black rounded-sm mx-2"
            onClick={() => filterDispatch(productsAction.display('list'))}
          />
        </p>
        {/* The numer of products showed */}
        <p className="font-bold  text-gray-500">
          <span className="font-bold text-red-500 text-xl">
            {filterProducts.length}{' '}
          </span>
          products found
        </p>
      </div>
      {/* Sort */}
      <div className="flex items-center ">
        <label htmlFor="sort" className="pr-2">
          Sort by
        </label>
        <select
          name="sort"
          id="sort"
          className="bg-gray-300 outline-none border rounded-md cursor-pointer"
          value={sortType}
          onChange={(e) => {
            filterDispatch(productsAction.sort(e.target.value));
          }}
        >
          {sortBy.map((sort) => {
            return (
              <option key={sort.type} value={sort.type}>
                {sort.text}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};
export default ProductsSort;
