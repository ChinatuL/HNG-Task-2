type FormInputProps = {
    name: string;
    type: string;
    label: string;
    placeholder: string;
    size?: string;
};

const FormInput = ({
    name,
    type,
    placeholder,
    label,
    size,
}: FormInputProps) => {
    return (
        <div>
            <label htmlFor={name} className='sr-only'>
                {label}
            </label>
            <input
                type={type}
                placeholder={placeholder}
                id={name}
                name={name}
                className={`w-full bg-lightGray rounded-[4px] px-3 placeholder:text-black ${
                    size ? size : " py-3 "
                }`}
            />
        </div>
    );
};
export default FormInput;
