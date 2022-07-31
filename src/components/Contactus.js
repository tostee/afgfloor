const Contactus = () => {
	return (
		<>
			<div className="py-4 mt-navbar h-screen lg:py-2 relative">
				<img
					src="./assets/images/Back_Image.png"
					className="h-2/5 lg:h-full w-full  absolute "
					alt="map"
				/>

				<div className="flex flex-wrap">
					<div className="w-full max-w-[1024px] mx-auto relative xl:pl-12 pl-0 ">
						<div className="w-full flex flex-col py-4">
							<div className="w-full xl:pt-1">
								<div className="w-full md:w-10/12 mt-3">
									<div className="mt-4 md:mt-8">
										<h2 className="text-sm md:text-2xl text-secundary font-semibold">
											Address
										</h2>
										<h2 className="text-primary md:text-xl leading-8 tracking-wider mt-2">
											271 Northwest Blvd Miami FL 33126
										</h2>
									</div>
									<div className="mt-4 md:mt-8">
										<h2 className="text-sm md:text-2xl text-primary font-semibold">
											Contact
										</h2>
										<h2 className="flex text-primary md:text-xl leading-8 tracking-wider mt-2">
											(954) 274-8026
											<a
												href="tel:+1-954-274-8026"
												className="ml-2 bg-indigo-700 text-primary rounded-full p-1 hover:bg-indigo-400 hover:text-primary"
											>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													class="h-6 w-6"
													fill="none"
													viewBox="0 0 24 24"
													stroke="currentColor"
													stroke-width="2"
												>
													<path
														stroke-linecap="round"
														stroke-linejoin="round"
														d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
													/>
												</svg>
											</a>
										</h2>
									</div>
									<div className="mt-4 md:mt-8">
										<h2 className="text-sm md:2xl text-primary font-semibold">
											Email
										</h2>
										<h2 className="text-primary md:text-xl leading-8 tracking-wider mt-2">
											afgfloorexpertsinc@gmail.com
										</h2>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
export default Contactus;
