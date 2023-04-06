import { useSelector } from 'react-redux';
import { ProductsSort, ProductCardGrid, ProductCardList, Loading } from '../';

import { motion, AnimatePresence } from 'framer-motion';

const ProductsDisplay = () => {
  const { loading, error, filterProducts, display } = useSelector(
    (state) => state.products
  );

  /* Error of data fetching */
  if (error) {
    return <div className="text-xl font-bold text-red-500">{error}</div>;
  }

  return (
    <>
      {/* Display Products */}
      {loading ? (
        <Loading text={'Loading Products Data...'} />
      ) : (
        <div>
          <ProductsSort />
          <motion.ul
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -100 }}
            transition={{ duration: 1.5, ease: [0.6, 0.01, 0.05, 0.9] }}
            className={
              display === 'grid'
                ? 'w-full grid gap-4 justify-center sm:grid-cols-2 xl:grid-cols-3'
                : 'w-full  flex-cols'
            }
          >
            {filterProducts.length === 0 && (
              <div className="font-bold text-red-500">
                Sorry! No products matched your search
              </div>
            )}
            <AnimatePresence>
              {filterProducts.map((product) => {
                return (
                  <motion.li
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    key={product.id}
                    className="w-[250px] md:w-full mb-8 last:mb-0"
                  >
                    {display === 'grid' ? (
                      <ProductCardGrid singleProductData={product} />
                    ) : (
                      <ProductCardList singleProductData={product} />
                    )}
                  </motion.li>
                );
              })}
            </AnimatePresence>
          </motion.ul>
        </div>
      )}
    </>
  );
};
export default ProductsDisplay;
