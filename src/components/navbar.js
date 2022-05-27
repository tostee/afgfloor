import React, { useState } from "react";
import ModalForm from "./ModalForm";

export default function Navbar() {
	let arr = [true, false, false, false, false];
	const [style, setStyle] = useState(arr);
	const [dropDown, setDropDown] = useState(true);
	const [text, setText] = useState("");

	const selected = (props) => {
		let newArr = [...arr];
		for (let i = 0; i < newArr.length; i++) {
			newArr[i] = false;
		}
		newArr[props] = true;
		setStyle(newArr);
	};

	const setSelectedText = (txt) => {
		setText(txt);
		setDropDown(true);
	};

	return (
		<div className="2xl:container 2xl:mx-auto">
			<div className="bg-white rounded shadow-lg py-5 px-7">
				<nav className="flex justify-between max-w-[1024px] items-center mx-auto">
					<div className="flex items-center space-x-3 lg:pr-16 pr-6 flex-1">
						<img
							className="cursor-pointer w-10 h-10"
							src="/assets/images/logo.png"
							alt="logo"
						></img>
						<h2 className="font-normal text-2xl leading-6 text-gray-800">
							AFGfloor
						</h2>
					</div>
					{/* For medium and plus sized devices */}
					<div className="">
						<ul className="hidden md:flex flex-auto space-x-2">
							<li
								onClick={() => selected(0)}
								className={`${
									style[0]
										? "text-white bg-primary"
										: "text-gray-600 border border-white bg-gray-50"
								}  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800  cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
							>
								Home
							</li>
							<li
								onClick={() => selected(1)}
								className={`${
									style[1]
										? "text-white bg-primary"
										: "text-gray-600 border border-white bg-gray-50"
								} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
							>
								About
							</li>
							<li
								onClick={() => selected(2)}
								className={`${
									style[2]
										? "text-white bg-primary"
										: "text-gray-600 border border-white bg-gray-50"
								} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
							>
								Services
							</li>
							<li
								onClick={() => selected(3)}
								className={`${
									style[3]
										? "text-white bg-primary"
										: "text-gray-600 border border-white bg-gray-50"
								} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
							>
								Gallery
							</li>
							<li
								onClick={() => selected(4)}
								className={`${
									style[4]
										? "text-white bg-primary"
										: "text-gray-600 border border-white bg-gray-50"
								} focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer px-3 py-2.5 font-normal text-xs leading-3 shadow-md rounded`}
							>
								Contact
							</li>
						</ul>
					</div>
					<div className=" flex space-x-5 justify-center items-center pl-2 flex-1">
						<ModalForm
							className="focus:ring-4 focus:outline-none self-start font-medium rounded-lg text-sm px-1 py-1 text-center mr-3 md:mr-0 bg-triadic hover:bg-amber-800 focus:ring-amber-800 uppercase text-white"
							name="Get quote"
						/>
					</div>
				</nav>
				{/* for smaller devcies */}
				<div className="block md:hidden w-full mt-5 ">
					<div
						onClick={() => setDropDown(!dropDown)}
						className="cursor-pointer px-4 py-3 text-white bg-primary rounded flex justify-between items-center w-full"
					>
						<div className="flex space-x-2">
							<span
								id="s1"
								className={`${
									text.length !== 0 ? "" : "hidden"
								} font-semibold text-sm leading-3`}
							>
								{" "}
							</span>
							<p
								id="textClicked"
								className="font-normal text-sm leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
							>
								{text ? text : "Home"}
							</p>
						</div>
						<svg
							id="ArrowSVG"
							className={`${
								dropDown ? "" : "rotate-180"
							} transform duration-100`}
							width={24}
							height={24}
							viewBox="0 0 24 24"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M6 9L12 15L18 9"
								stroke="white"
								strokeWidth="1.5"
								strokeLinecap="round"
								strokeLinejoin="round"
							/>
						</svg>
					</div>
					<div className=" relative">
						<ul
							id="list"
							className={`${
								dropDown ? "hidden" : "block"
							} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}
						>
							<li
								onClick={() => setSelectedText("About")}
								className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
							>
								About
							</li>
							<li
								onClick={() => setSelectedText("Services")}
								className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
							>
								Services
							</li>
							<li
								onClick={() => setSelectedText("Gallery")}
								className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
							>
								Gallery
							</li>
							<li
								onClick={() => setSelectedText("Contact")}
								className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
							>
								Contact
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

//import { Link } from "react-router-dom";
/*import ModalForm from "./ModalForm";
const Navbar = () => {
	return (
		<nav className="w-full px-4 flex justify-center font-quicksand h-navbar bg-primarydark mx-auto ">
			<div className="w-full max-w-[1024px] flex gap-4 container flex-wrap justify-between items-center mx-auto">
				<div className="flex-1 flex items-center">
					<a href="/" className="flex items-center gap-2">
						<img
							src="/assets/images/logo.png"
							className=" h-11 w-11 sm:h-11"
							alt="Afgfloor"
						/>
						<span className="self-center text-3xl font-semibold whitespace-nowrap text-white">
							AFGfloor
						</span>
					</a>
				</div>

				<div className="flex-1 flex items-center justify-end md:order-2">
					<ModalForm
						className="focus:ring-4 focus:outline-none self-start font-medium rounded-lg text-sm px-1 py-1 text-center mr-3 md:mr-0 bg-triadic hover:bg-amber-800 focus:ring-amber-800 uppercase text-white"
						name="Get quote"
					/>

					<button
						data-collapse-toggle="mobile-menu-4"
						type="button"
						className="inline-flex items-center p-2 text-sm rounded-lg md:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
						aria-controls="mobile-menu-4"
						aria-expanded="false"
					>
						<svg
							class="w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
						<svg
							class="hidden w-6 h-6"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fill-rule="evenodd"
								d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>

				<div
					class="items-center gap-4 hidden justify-between w-full md:flex md:w-auto md:order-1"
					id="mobile-menu-4"
				>
					<ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-lg md:font-semibold">
						<li className="flex flex-row align-middle">
							<Link
								to="/"
								aria-current="page"
								className=" flex py-2 pr-4 pl-3 border-b  md:border-0 md:p-0 md:hover:text-white text-secundary	<<> hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
							>
								<span className="flex items-center">
									<svg
										xmlns="http://www.w3.org/2000/svg"
										class="h-4 w-4 mr-1 text-white"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										stroke-width="2"
									>
										<path
											stroke-linecap="round"
											stroke-linejoin="round"
											d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
										/>
									</svg>{" "}
								</span>
								Home
							</Link>
						</li>

						<li>
							<Link
								to="/about"
								aria-current="page"
								className="block py-2 pr-4 pl-3 border-b  md:border-0 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
							>
								About
							</Link>
						</li>
						<li>
							<Link
								to="/services"
								aria-current="page"
								className="block py-2 pr-4 pl-3 border-b  md:border-0 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
							>
								Services
							</Link>
						</li>
						<li>
							<Link
								to="/gallery"
								aria-current="page"
								className="block py-2 pr-4 pl-3 border-b  md:border-0 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
							>
								Gallery
							</Link>
						</li>
						<li>
							<Link
								to="/contact"
								aria-current="page"
								className="block py-2 pr-4 pl-3 border-b  md:border-0 md:p-0 md:hover:text-white text-gray-400 hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"
							>
								Contact
							</Link>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default Navbar;*/
