const FormInput = ({
	id,
	name,
	classname,
	placeholder,
	required,
	value,
	onText,
}) => {
	return (
		<input
			type="text"
			name={name}
			id={id}
			className={`border text-sm rounded-lg focus:ring-primary  block w-full p-2.5 text-primary outline-none ${classname}`}
			placeholder={placeholder}
			required={required}
			value={value}
			onChange={onText}
		/>
	);
};
export default FormInput;
