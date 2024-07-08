import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import CartTotals from "../components/CartTotals";
import imgAirMax from "../assets/images/air-max.png";
import imgAddidas from "../assets/images/addidas.png";

const Cart = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-16 self-start w-full'>
            <section className='grid gap-6 lg:w-[65%]'>
                <CartItem img={imgAirMax} name='nike air max' price='370' />
                <CartItem img={imgAddidas} name='addidas' price='120' />
                <button className='hidden lg:block justify-self-end font-medium py-1 px-3 transition-ease border border-black rounded text-sm'>
                    Clear cart
                </button>
            </section>

            <section className='grid gap-4 lg:w-[35%] max-h-72 bg-lightGray p-4 rounded-[10px]'>
                <CartTotals />
                <Link
                    to='/checkout'
                    className='block text-center bg-darkYellow text-white  rounded-[10px] py-3'
                >
                    CHECKOUT
                </Link>
            </section>
        </div>
    );
};
export default Cart;
