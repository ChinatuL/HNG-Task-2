import FormInput from "./FormInput";
import FormSelect from "./FormSelect";
const AddressForm = () => {
    return (
        <fieldset>
            <legend className='font-medium pb-2'>Address</legend>
            <div className='grid sm:grid-cols-2 lg:grid-cols-[60%_40%] gap-4 pb-4'>
                <FormInput
                    label='Address'
                    name='address'
                    type='text'
                    placeholder='Enter Address'
                />
                <FormInput
                    label='Landmark'
                    name='landmark'
                    type='text'
                    placeholder='Landmark (Optional)'
                />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                <FormSelect
                    label='Country'
                    name='country'
                    placeholder='Country'
                />
                <FormSelect label='State' name='State' placeholder='State' />
                <FormInput
                    label='Postal Code'
                    name='postal-code'
                    type='text'
                    placeholder='Postal Code'
                />
            </div>
        </fieldset>
    );
};
export default AddressForm;
