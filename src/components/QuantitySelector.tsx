import plusIcon from "../assets/icons/plus.svg";
import minusIcon from "../assets/icons/minus.svg";

const QuantitySelector = () => {
    return (
        <div className='flex gap-2 items-center'>
            <button type='button' className='transition-ease hover:opacity-70'>
                <img
                    src={minusIcon}
                    alt='Decrease quantity'
                    className='w-[18px] h-[18px] lg:w-6 lg:h-6'
                />
            </button>
            <span>1</span>
            <button type='button' className='transition-ease hover:opacity-70'>
                <img
                    src={plusIcon}
                    alt='Increase quantity'
                    className='w-[18px] h-[18px] lg:w-6 lg:h-6'
                />
            </button>
        </div>
    );
};
export default QuantitySelector;
