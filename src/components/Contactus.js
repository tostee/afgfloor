const Contactus = () => {
	return (
		<>
			<div className="py-4 lg:py-8  relative">
				<img
					src="./assets/images/Back_Image.png"
					className="h-2/5 lg:h-full w-full  absolute inset-0 object-cover object-center xl:block hidden"
					alt="map"
				/>
				<div className="xl:mx-auto xl:container  relative ">
					<div className="flex flex-wrap xl:mx-auto xl:container">
						<div className="w-full relative xl:mt-10 mb-10 2xl:pr-24 2xl:pl-0 xl:pl-12 pl-0 ">
							<img
								src="./assets/images/Back_Image.png"
								className="h-full w-full xl:w-1/2 absolute inset-0 bg-cover bg-center xl:hidden"
								alt="map"
							/>
							<div className="w-full flex flex-col items-start  xl:justify-start  relative z-20 xl:px-0 px-4 xl:py-0 py-4">
								<div className="w-full 2xl:pl-48 xl:pt-1">
									<h1 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-wider text-primary">
										We’re Here
									</h1>
									<div className="w-full md:w-10/12 mt-3">
										<h2 className="text-primary md:text-xl leading-8 tracking-wider">
											We believe digital innovation is at the heart of every
											business success
										</h2>
										<div className="mt-4 md:mt-8">
											<h2 className="text-sm md:text-2xl text-primary font-semibold">
												Address
											</h2>
											<h2 className="text-primary md:text-xl leading-8 tracking-wider mt-2">
												Office #13, NSTP, NUST University H-12 Sector, Islamabad
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
			</div>
		</>
	);
};
export default Contactus;
