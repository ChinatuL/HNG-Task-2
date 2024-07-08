import QuantitySelector from "./QuantitySelector";
import iconTrash from "../assets/icons/trash.svg";

type CartItemProps = {
    img: string;
    name: string;
    price: string;
};

const CartItem = ({ img, name, price }: CartItemProps) => {
    return (
        <div className='flex  gap-4 bg-lightGray py-4 pr-6 pl-2 rounded-[10px] max-h-24 lg:max-h-32'>
            <div className='w-32 h-28'>
                <img src={img} alt='' />
            </div>
            <div className='flex justify-between w-full'>
                <div className='flex flex-col justify-between h-full'>
                    <h3 className='text-sm lg:text-base 2xl:text-xl font-medium uppercase'>
                        {name}
                    </h3>
                    <QuantitySelector />
                </div>
                <div className='flex flex-col justify-between h-full'>
                    <p className='text-sm lg:text-base 2xl:text-xl font-medium uppercase'>
                        ${price}
                    </p>
                    <button type='button' className='self-end'>
                        <img
                            src={iconTrash}
                            alt='remove item from cart'
                            className='w-[18px] h-[18px] lg:w-6 lg:h-6'
                        />
                    </button>
                </div>
            </div>
        </div>
    );
};
export default CartItem;
