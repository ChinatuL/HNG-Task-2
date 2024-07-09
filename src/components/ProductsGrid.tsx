import ProductCard from "./ProductCard";

import { products } from "../lib/data";

const ProductsGrid = () => {
    return (
        <section className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12 w-full'>
            {products.map((product) => {
                const { id } = product;
                return (
                    <div
                        key={id}
                        className='flex flex-col items-center lg:gap-4 xl:gap-12 bg-lightGray relative rounded-[10px] p-4 max-h-64'
                    >
                        <ProductCard product={product} />
                    </div>
                );
            })}
        </section>
    );
};
export default ProductsGrid;
