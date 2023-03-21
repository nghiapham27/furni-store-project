import { useState } from 'react';
import { useSelector } from 'react-redux';

import { ProductCard, ProductsFilter, ProductsSort } from '../components';
import { filterAction } from '../store/filter';

import { productsData } from '../utils/Draft-Data';

const ProductsPage = () => {
  const [displayType, setDisplayType] = useState('grid');
  // set up filterInput subscription
  const { searchName, category, company, color, ship, price, sortType } =
    useSelector((state) => state.filter);

  // Filter Hanlder
  const filterHandler = (product) => {
    if (
      (searchName === '' || product.name.includes(searchName)) &&
      (category === 'all' || product.category === category) &&
      (company === 'all' || product.company === company) &&
      (color === 'all' || product.colors.includes(color)) &&
      (ship === false || product.shipping === ship) &&
      (price === 5000 || product.price / 100 <= price)
    ) {
      return true;
    }
    return false;
  };

  // Sort Handler
  const sortHandler = (type = 'ascending') => {
    if (type === 'ascending') {
      return productsList.sort((a, b) => a.price - b.price);
    }
    if (type === 'descending') {
      return productsList.sort((a, b) => b.price - a.price);
    }
    return 'Unknown sort type';
  };
  // productsList Handler
  let productsList = [];
  const productsListHandler = () => {
    // Filter
    productsList = productsData.filter((item) => filterHandler(item));
    // Sort
    sortHandler(sortType);
  };
  productsListHandler();

  console.log(productsList);

  return (
    <section className="grid justify-center md:grid-cols-4 md:gap-4">
      <div className="col-span-1">
        <ProductsFilter />
      </div>
      {/* Show products list */}
      <div className=" md:col-span-3">
        <ProductsSort
          productsList={productsList}
          setDisplay={(display) => setDisplayType(display)}
        />
        {/* Show Grid or List layout */}
        <ul
          className={
            displayType === 'grid'
              ? 'w-full grid gap-4 justify-center md:grid-cols-2 xl:grid-cols-3'
              : 'w-full flex-cols'
          }
        >
          {productsList.map((product) => {
            return (
              <li
                key={product.id}
                className="w-[250px] md:w-full mb-8 last:mb-0"
              >
                <ProductCard
                  singleProductData={product}
                  displayType={displayType}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
export default ProductsPage;
