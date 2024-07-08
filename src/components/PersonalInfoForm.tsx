import FormInput from "./FormInput";
const PersonalInfoForm = () => {
    return (
        <fieldset>
            <legend className='font-medium pb-2'>Personal Information</legend>
            <div className='grid sm:grid-cols-2 lg:grid-cols-[60%_40%] gap-4'>
                <FormInput
                    label='Enter full name'
                    name='name'
                    type='text'
                    placeholder='Enter Full name'
                />
                <FormInput
                    label='Phone No'
                    name='phone'
                    type='tel'
                    placeholder='Phone No'
                />
            </div>
        </fieldset>
    );
};
export default PersonalInfoForm;
