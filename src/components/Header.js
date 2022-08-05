const Header = ({ onChange }) => {
	return (
		<div
			className={`h-80 md:h-[450px] bg-zinc-400 grid place-items-center overflow-hidden bg-cover bg-blend-multiply`}
			style={{ backgroundImage: "url(/assets/images/default.jpg)" }}
		>
			<div className="w-full max-w-screen-xl md:pt-navbar pt-28">
				<div className="flex justify-start items-center h-full">
					<div className="text-left font-serif text-white px-6 md:px-12">
						<h1 className="md:text-5xl text-2xl font-bold mt-0 mb-6">
							AFG Floor Experts INC
						</h1>
						<h3 className="text-xl md:text-3xl mb-4 inline-block ">
							Your comfort is our priority
						</h3>
						<div>
							<button
								onClick={() => onChange(true)}
								className="focus:outline-none mx-auto transition duration-150 ease-in-out hover:bg-indigo-600 bg-button rounded text-white px-16 md:px-8 py-2 text-base md:text-lg"
							>
								Get Quote
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Header;
