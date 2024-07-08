type FormCheckboxProps = {
    name: string;
    label: string;
};
const FormCheckbox = ({ name, label }: FormCheckboxProps) => {
    return (
        <div className='flex items-center gap-4'>
            <input
                type='checkbox'
                name={name}
                id={name}
                className='w-4 h-4 bg-transparent border border-black accent-black'
            />
            <label htmlFor={name}>{label}</label>
        </div>
    );
};
export default FormCheckbox;
