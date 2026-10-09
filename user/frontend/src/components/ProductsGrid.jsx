import { Product } from "./Product";

export function ProductsGrid({ products }) {
  return (
    <div className="px-2 columns-1 sm:columns-2 md:columns-3 lg:columns-4 space-y-5 gap-5 w-fit max-w-350 mx-auto bg-gray-200 p-10">
      {products.map((product) => (
        <Product key={product._id} {...product} />
      ))}
    </div>
  );
}
