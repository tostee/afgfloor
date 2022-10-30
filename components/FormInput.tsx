import { ChangeEventHandler } from "react";

type FormInputProps = {
	autoFocus?: boolean;
	className?: string;
	id?: string;
	onChange?: ChangeEventHandler<HTMLInputElement>;
	placeholder?: string;
	required?: boolean;
	value?: string;
	defaultValue?: string;
};
const FormInput = ({
	autoFocus = false,
	className,
	id,
	onChange,
	placeholder,
	required = false,
	value,
	defaultValue,
}: FormInputProps) => {
	return (
		<input
			id={id}
			type="text"
			value={value}
			defaultValue={defaultValue}
			required={required}
			onChange={onChange}
			autoFocus={autoFocus}
			placeholder={placeholder}
			className={`border text-sm md:text-base rounded-lg focus:ring-primary  block w-full p-1.5 text-secundary outline-none ${className}`}
		/>
	);
};
export default FormInput;
