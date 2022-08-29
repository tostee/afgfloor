import React from "react";
import { Link } from "react-router-dom";

const Lastworks = () => {
	return (
		<div className="lg:px-20 md:px-6 px-4 md:py-12 py-8 bg-white ">
			<div className="lg:flex items-center justify-between w-full max-w-screen-xl flex gap-4 container flex-wrap mx-auto">
				<div className="lg:w-1/3">
					<h1 className="text-3xl xl:text-6xl font-semibold leading-none text-secundary">
						Indoor Interiors
					</h1>
					<p className="text-xl leading-6 mt-4 text-secundary">
						Get inspired by our selection of wood flooring work. We work to
						fulfill your expectations so you can have the desired indoor design
						for your home. Whatch as AFGFLOOR works to satisfied all of our
						customers
					</p>
					<Link to="/gallery">
						<button
							aria-label="view catalogue"
							className="focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 focus:outline-none mt-6 md:mt-8 text-xl font-semibold leading-none text-links flex items-center hover:underline"
						>
							View Catalogue
							<svg
								className="ml-2 mt-1"
								width="12"
								height="8"
								viewBox="0 0 12 8"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1.33325 4H10.6666"
									stroke="#1F2937"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8 6.66667L10.6667 4"
									stroke="#1F2937"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
								<path
									d="M8 1.33398L10.6667 4.00065"
									stroke="#1F2937"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</button>
					</Link>
				</div>
				<div className="lg:w-7/12 lg:mt-0 mt-8">
					<div className="w-full h-full bg-red-200">
						<img
							src="./assets/images/lastworks/1.png"
							alt="apartment design"
							className="w-full"
						/>
					</div>
					<div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 lg:gap-8 gap-6 lg:mt-8 md:mt-6 mt-4">
						<img
							src="./assets/images/lastworks/3.png"
							className="w-full"
							alt="kitchen"
						/>
						<img
							src="./assets/images/lastworks/4.png"
							className="w-full"
							alt="sitting room"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lastworks;
