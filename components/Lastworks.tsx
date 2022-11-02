import Image from "next/image";
import Link from "next/link";
import img1 from "../assets/lastworks/1.png";
import img2 from "../assets/lastworks/2.png";
import img3 from "../assets/lastworks/3.png";
import { GalleryPath } from "../routes";

const Lastworks = () => {
	return (
		<div className="flex justify-center px-4 py-20 bg-white">
			<div className="w-full max-w-lg lg:max-w-page flex flex-col gap-16 lg:flex-row items-center">
				<div className="flex-1">
					<h1 className="text-3xl xl:text-6xl font-semibold leading-none text-secundary">
						Indoor Interiors
					</h1>
					<p className="text-xl leading-6 mt-4 text-secundary">
						Get inspired by our selection of wood flooring work. We work to
						fulfill your expectations so you can have the desired indoor design
						for your home. Whatch as AFGFLOOR works to satisfied all of our
						customers
					</p>

					<Link href={GalleryPath}>
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

				<div className="flex-1 grid gap-6 lg:grid-cols-2 w-full">
					<div className="lg:col-span-2 w-full h-60 relative">
						<Image
							src={img1}
							alt="Apartment Design"
							fill
							sizes="720px"
							className="rounded-lg object-cover"
						/>
					</div>

					<div className="w-full h-60 relative">
						<Image
							src={img2}
							alt="Kitchen"
							fill
							sizes="720px"
							className="rounded-lg object-cover"
						/>
					</div>

					<div className="w-full h-60 relative">
						<Image
							src={img3}
							alt="Sitting Room"
							fill
							sizes="720px"
							className="rounded-lg object-cover"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Lastworks;
