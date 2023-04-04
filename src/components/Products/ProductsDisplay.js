import { useSelector } from 'react-redux';
import { ProductCardGrid, ProductCardList, Loading } from '../';

import { motion, AnimatePresence } from 'framer-motion';

const ProductsDisplay = () => {
  const { loading, filterProducts, display, error } = useSelector(
    (state) => state.products
  );

  if (error) {
    console.log(error);
  }

  return (
    <>
      {/* Error when fetching API */}
      {error && <div className="text-xl font-bold text-red-500">{error}</div>}

      {/* Display Products */}
      {loading ? (
        <Loading text={'Loading Products Data...'} />
      ) : (
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
          {filterProducts.length === 0 && !error && (
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
      )}
    </>
  );
};
export default ProductsDisplay;
