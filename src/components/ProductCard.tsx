import { Link } from "react-router-dom";
import cartIcon from "../assets/icons/cart-yellow.svg";

type Product = {
    id: number;
    name: string;
    price: number;
    img: string;
};

type ProductCardProps = {
    product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
    const { name, price, img } = product;
    return (
        <>
            <Link
                to='/cart'
                type='button'
                className='absolute z-5 top-4 right-4 block bg-lightYellow px-2 py-2 rounded-full shadow-md transition-ease hover:opacity-70 '
            >
                <img src={cartIcon} alt='add to cart' />
            </Link>
            <div className='flex justify-center items-center text-center h-40 w-52'>
                <img
                    src={img}
                    alt={name}
                    className='w-full '
                />
            </div>
            <div className='flex justify-between items-center w-full'>
                <h2 className='uppercase font-medium'>{name}</h2>
                <p className='font-semibold'>${price}</p>
            </div>
        </>
    );
};
export default ProductCard;
