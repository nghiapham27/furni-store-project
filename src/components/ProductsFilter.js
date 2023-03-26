import { useDispatch, useSelector } from 'react-redux';

import { AiOutlineSearch, AiOutlineCheck } from 'react-icons/ai';

import FilterDropdown from './FilterDropdown';
import { productsAction } from '../store/products';

const ProductsFilter = () => {
  // set up filterInput subscription
  const { productsData, filterInput, maxPrice } = useSelector(
    (state) => state.products
  );
  const { searchName, category, company, color, ship, price } = filterInput;
  // dispatch actions
  const filterDispatch = useDispatch();

  // Filter List UI to show
  const categories = [...new Set(productsData.map((item) => item.category))];
  const companies = [...new Set(productsData.map((item) => item.company))];
  const colors = [...new Set(productsData.map((item) => item.colors).flat())];

  return (
    <div className="w-full pb-4 md:px-0">
      <div className="text-center">
        {/* Search */}
        <div className="flex justify-center">
          <div className="flex items-center w-full max-w-[300px] relative">
            <AiOutlineSearch size={20} className="absolute left-1" />
            <input
              type="text"
              value={searchName}
              placeholder="Search"
              className=" w-full bg-gray-200 rounded-full placeholder:text-sm py-1 pl-7 outline-none border hover:border-amber-200 focus:border-amber-400 focus:bg-gray-50"
              onChange={(e) =>
                filterDispatch(
                  productsAction.setFilter({
                    type: 'searchName',
                    value: e.target.value,
                  })
                )
              }
            />
          </div>
        </div>

        {/* Select options */}
        <div className="grid grid-cols-2 gap-4 items-start pt-4 md:flex md:flex-col md:items-center">
          {/* Category */}
          <FilterDropdown filterName="Category">
            {['all', ...categories].map((item) => {
              return (
                <li
                  key={item}
                  className="flex justify-between items-center cursor-pointer pb-2"
                  onClick={() => {
                    filterDispatch(
                      productsAction.setFilter({
                        type: 'category',
                        value: item,
                      })
                    );
                  }}
                >
                  {item.split('')[0].toUpperCase() + item.slice(1)}
                  {item === category && (
                    <AiOutlineCheck className="text-blue-500" />
                  )}
                </li>
              );
            })}
          </FilterDropdown>

          {/* Company */}
          <FilterDropdown filterName="Company">
            {['all', ...companies].map((item) => {
              return (
                <li
                  key={item}
                  className="flex justify-between items-center cursor-pointer pb-2"
                  onClick={() => {
                    filterDispatch(
                      productsAction.setFilter({
                        type: 'company',
                        value: item,
                      })
                    );
                  }}
                >
                  {item.split('')[0].toUpperCase() + item.slice(1)}
                  {item === company && (
                    <AiOutlineCheck className="text-blue-500" />
                  )}
                </li>
              );
            })}
          </FilterDropdown>

          {/* Colors */}
          <FilterDropdown filterName="Color">
            <div className="grid grid-cols-3 gap-2 py-2">
              {['all', ...colors].map((item, index) => {
                return (
                  <li
                    key={item}
                    className={`flex justify-start ${
                      item === 'all' ? 'items-start' : 'items-center'
                    } cursor-pointer`}
                    onClick={() => {
                      filterDispatch(
                        productsAction.setFilter({
                          type: 'color',
                          value: item,
                        })
                      );
                    }}
                  >
                    <div
                      className="flex justify-center items-center w-5 h-5 rounded-[50%]"
                      style={{ backgroundColor: item !== 'all' && `${item}` }}
                    >
                      {item === 'all' && 'All'}
                      {item === color && (
                        <AiOutlineCheck className="text-white font-extrabold" />
                      )}
                    </div>
                  </li>
                );
              })}
            </div>
          </FilterDropdown>

          {/* Shipping */}
          <FilterDropdown filterName="Shipping">
            <div className="flex items-center py-2">
              <input
                id="ship"
                type="checkbox"
                checked={ship ? true : false}
                className="h-4 w-4 rounded border-gray-300"
                onChange={(e) => {
                  console.log(e.target.value);
                  filterDispatch(
                    productsAction.setFilter({
                      type: 'ship',
                    })
                  );
                }}
              />
              <label
                htmlFor="ship"
                className="ml-2 block text-sm text-gray-900"
              >
                Free Ship
              </label>
            </div>
          </FilterDropdown>

          {/* Price */}
          <div className="col-span-2 flex justify-center w-full max-w-[300px] items-center cursor-pointer px-2 py-1 md:flex-col md:items-start">
            <label htmlFor="price-range" className="font-bold">
              Price
            </label>
            <input
              id="price-range"
              type="range"
              // defaultValue={maxPrice + 10}
              value={price}
              min="0"
              max={maxPrice + 10}
              step="10"
              className="w-full h-2 bg-gray-300 rounded-lg cursor-pointer outline-none mx-2 md:mx-0 md:my-2"
              onChange={(e) => {
                filterDispatch(
                  productsAction.setFilter({
                    type: 'price',
                    value: +e.target.value,
                  })
                );
              }}
            />
            <p className="min-w-[60px] md:text-left">{`$ ${price.toLocaleString()}`}</p>
          </div>
        </div>
        {/* Clear Filter */}
        <div className="w-full max-w-[300px] mx-auto flex justify-center">
          <p
            className="cursor-pointer underline active:text-amber-300"
            onClick={() => filterDispatch(productsAction.clearFilter())}
          >
            Clear All Filters
          </p>
        </div>
      </div>
    </div>
  );
};
export default ProductsFilter;
