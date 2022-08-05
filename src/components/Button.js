const Button = ({ children, onClick }) => {
	return (
		<button
			onClick={onClick}
			className="whitespace-nowrap outline-none hover:bg-indigo-600 bg-button rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
		>
			{children}
		</button>
	);
};

export default Button;
