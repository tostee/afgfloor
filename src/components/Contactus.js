const Contactus = () => {
	return (
		<>
			<div className="flex flex-wrap bg-contain">
				<div className="max-w-screen-xl mx-auto lg:pl-12 pl-4 ">
					<div className="pt-32 md:w-10/12 h-screen">
						<div className="mt-4 md:mt-8">
							<h2 className="text-xl md:text-2xl text-secundary font-semibold">
								Address
							</h2>
							<h2 className="text-secundary md:text-xl leading-8 tracking-wider mt-2">
								271 Northwest Blvd Miami FL 33126
							</h2>
						</div>
						<div className="mt-4 md:mt-8">
							<h2 className="text-xl md:text-2xl text-secundary font-semibold">
								Contact
							</h2>
							<h2 className="flex text-secundary md:text-xl leading-8 tracking-wider mt-2">
								(954) 274-8026
								<a
									href="tel:+1-954-274-8026"
									className="ml-2 bg-button text-white rounded-full p-1 hover:bg-links"
								>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										strokeWidth="2"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
										/>
									</svg>
								</a>
							</h2>
						</div>
						<div className="mt-4 md:mt-8">
							<h2 className="text-xl md:text-2xl text-secundary font-semibold">
								Email
							</h2>
							<h2 className="text-secundary md:text-xl leading-8 tracking-wider mt-2">
								afgfloorexpertsinc@gmail.com
							</h2>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contactus;
