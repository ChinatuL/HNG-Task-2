import FormCheckbox from "./FormCheckbox";
import iconPaypal from "../assets/icons/paypal.svg";
import iconVisa from "../assets/icons/visa.svg";
import iconMastercard from "../assets/icons/mastercard.svg";

const PaymentForm = () => {
    return (
        <fieldset>
            <legend className='font-medium pb-2'>Payment</legend>
            <div className='grid'>
                <div className='flex justify-between items-center border-b border-b-borderGray pb-4'>
                    <FormCheckbox name='paypal' label='Paypal' />
                    <img src={iconPaypal} alt='' />
                </div>
                <div className='flex justify-between items-center border-b border-b-borderGray pb-4 pt-2'>
                    <FormCheckbox name='card' label='Credit or Debit Card' />
                    <div className='flex gap-4'>
                        <img src={iconVisa} alt='' />
                        <img src={iconMastercard} alt='' />
                    </div>
                </div>
            </div>
        </fieldset>
    );
};
export default PaymentForm;
