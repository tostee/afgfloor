const Box = ({ className }) => {
	return (
		<div
			className={`min-w-[64px] min-h-[64px] bg-red-500 grid place-items-center ${className}`}
		>
			Box!
		</div>
	);
};
export default Box;
