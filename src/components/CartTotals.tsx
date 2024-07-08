
type CartTotalsProps = {
    isCheckout?: boolean;
};

const CartTotals = ({ isCheckout = false }: CartTotalsProps) => {

    return (
        <>
            <h3 className='text-xl font-semibold'>Summary</h3>
            <div className='grid gap-2'>
                <div className='flex justify-between items-center'>
                    <p>Subtotal</p>
                    <p>$490.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Estimated Shipping</p>
                    <p>$8.00</p>
                </div>
                <div className='flex justify-between items-center'>
                    <p>Estimated Tax</p>
                    <p>-</p>
                </div>
            </div>
            {isCheckout && <div className='w-full h-[1px] bg-black'></div>}
            <div className='flex justify-between items-center py-2 text-lg'>
                <p>Total</p>
                <p className='font-semibold'>$498.00</p>
            </div>
        </>
    );
};
export default CartTotals;
