import PersonalInfoForm from "../components/PersonalInfoForm";
import AddressForm from "../components/AddressForm";
import PaymentForm from "../components/PaymentForm";
import CartTotals from "../components/CartTotals";

const Checkout = () => {
    const isCheckout = true;

    return (
        <section className='self-start w-full'>
            <h2 className='text-3xl font-bold'>Check Out</h2>
            <div className='relative flex flex-col lg:flex-row gap-4 lg:gap-24 w-full'>
                <form
                    className='grid gap-6 pt-8 lg:w-[65%]'
                    onSubmit={(e) => e.preventDefault()}
                >
                    <PersonalInfoForm />
                    <AddressForm />
                    <PaymentForm />
                    <button
                        type='submit'
                        className='absolute bottom-4 left-4 sm:static w-[93%] sm:w-[65%] text-center font-bold bg-darkYellow text-white py-3 sm:py-2 rounded-[10px]'
                    >
                        PAY NOW
                    </button>
                </form>
                <section className='grid gap-4 lg:w-[35%] sm:max-h-60 bg-lightGray pt-4 px-4 pb-20 sm:p-4 rounded-[10px]'>
                    <CartTotals isCheckout={isCheckout} />
                </section>
            </div>
        </section>
    );
};
export default Checkout;
