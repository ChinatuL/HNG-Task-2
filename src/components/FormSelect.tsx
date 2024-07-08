type FormSelectProps = {
    name: string;
    label: string;
    placeholder: string;
};
const FormSelect = ({ name, placeholder, label }: FormSelectProps) => {
    return (
        <div>
            <label htmlFor={name} className='sr-only'>
                {label}
            </label>
            <select
                name={name}
                id={name}
                className='w-full bg-lightGray rounded-[4px] py-3 px-3'
            >
                <option value=''>{placeholder}</option>
            </select>
        </div>
    );
};
export default FormSelect;
