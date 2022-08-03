const FormInput = ({
	id,
	name,
	classname,
	placeholder,
	required,
	value,
	onText,
	autoFocus,
}) => {
	return (
		<input
			autoFocus={autoFocus}
			type="text"
			name={name}
			id={id}
			className={`border text-sm md:text-base rounded-lg focus:ring-primary  block w-full p-1.5 text-secundary outline-none ${classname}`}
			placeholder={placeholder}
			required={required}
			value={value}
			onChange={onText}
		/>
	);
};
export default FormInput;
