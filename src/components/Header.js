import ModalForm from "./ModalForm";

const Header = ({ onChange }) => {
	return (
		<div
			className={`h-[450px] bg-zinc-400 grid place-items-center overflow-hidden bg-no-repeat bg-cover `}
			style={{ backgroundImage: "url(/assets/images/default.jpg)" }}
		>
			<div className="w-full max-w-[1024px] pt-navbar ">
				<div className="flex justify-start items-center h-full">
					<div className="text-center text-primarydark  px-6 md:px-12">
						<h1 className="text-6xl font-bold mt-0 mb-6">
							AFG Floor Experts INC
						</h1>
						<h3 className="text-3xl mb-4">Your comfort is our priority</h3>
						<button
							onClick={() => onChange(true)}
							className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-button rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
						>
							Get Quote
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
