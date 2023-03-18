import { ProductCard, ProductsFilter } from '../components';

const ProductsPage = () => {
  return (
    <section className="grid justify-center md:grid-cols-4 md:gap-4">
      <div className="col-span-1">
        <ProductsFilter />
      </div>
      <ul className="w-full grid gap-4 justify-center md:col-span-3 md:grid-cols-2 2xl:grid-cols-3">
        <li className="w-[250px] md:w-full">
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
        <li>
          <ProductCard />
        </li>
      </ul>
    </section>
  );
};
export default ProductsPage;
