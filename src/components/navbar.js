import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";


const Navbar = ({ onChange }) => {
	const {gallery} = useParams();
	let arr = [true, false, false, false, false];
	const menus = [
		{
			navigation: "Home",
			isSelectect: true,
		},
		{
			navigation: "About",
			isSelectect: false,
		},
		{
			navigation: "Services",
			isSelectect: false,
		},
		{
			navigation: "Gallery",
			isSelectect: false,
		},
		{
			navigation: "Contact",
			isSelectect: false,
		},
	];
	const [style, setStyle] = useState(arr);
	const [menu, setMenu] = useState(menus);
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

	const mobileSelected = (props) => {
		let newArr = [...menu];
		let index = 0;
		for (let i = 0; i < newArr.length; i++) {
			newArr[i].isSelectect = false;
			if (newArr[i].navigation === props) {
				index = i;
			}
		}
		newArr[index].isSelectect = true;
		setMenu(newArr);
	};

	const setSelectedText = (txt) => {
		setText(txt);
		mobileSelected(txt);
		setDropDown(true);
	};

	

	return (
		<div className="bg-white rounded shadow-lg p-2 fixed w-full z-30">
			<nav className="flex justify-between max-w-screen-xl items-center mx-auto">
				<Link to={"/"}>
					<div
						className="flex items-center space-x-3 lg:pr-16 pr-6 flex-1"
						onClick={() => selected(0)}
					>
						<img
							className="cursor-pointer w-10 h-10"
							src="/assets/images/logo.png"
							alt="logo"
						></img>

						<h2 className="font-bold text-3xl leading-6 text-primarydark">
							AFGfloor
						</h2>
					</div>
				</Link>
				{/* For medium and plus sized devices */}
				<div className="">
					<ul className="hidden md:flex flex-auto space-x-2 z-40">
						{menu.map((e, i) => {
							return (
								<li
									onClick={() => selected(i)}
									className={`${
										style[i]
											? "text-white bg-primary text-lg p-3"
											: "text-secundary border border-white bg-gray-50 text-lg"
									}  cursor-pointer px-4 py-3 font-normal leading-3 shadow-md rounded`}
								>
									<Link
										to={
											e.navigation.toLocaleLowerCase() === "home"
												? "/"
												: e.navigation.toLocaleLowerCase()
										}
									>
										{e.navigation}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>
				<div className=" flex space-x-1 justify-center items-center pl-2 flex-1">
					<button
						onClick={() => onChange(true)}
						className="focus:outline-none mx-auto hover:bg-indigo-600 bg-button rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
					>
						Get Quote
					</button>
					<a
						href="sms:+19542748026"
						className="ml-2  text-analogous rounded-full p-1 hover:text-green-700"
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
								d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
							/>
						</svg>
					</a>
					<a
						href="tel:+1-954-274-8026"
						className="ml-2  text-analogous rounded-full p-1 hover:text-green-700"
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
				</div>
			</nav>
			{/* for smaller devcies */}
			<div className="block md:hidden w-full mt-5 z-40 ">
				<div
					onClick={() => setDropDown(!dropDown)}
					className="cursor-pointer px-4 py-3 text-white bg-primary rounded flex justify-between items-center w-full"
				>
					<div className="flex space-x-2">
						<span
							id="s1"
							className={`${
								text.length !== 0 ? "" : "hidden"
							} font-semibold leading-3`}
						>
							{""}
						</span>
						<p
							id="textClicked"
							className="font-normal leading-3 focus:outline-none hover:bg-gray-800 duration-100 cursor-pointer "
						>
							{text ? text : "Home"}
						</p>
					</div>
					<svg
						id="ArrowSVG"
						className={`${dropDown ? "" : "rotate-180"} transform duration-100`}
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
						} font-normal leading-4 absolute top-2  w-full rounded shadow-md`}
					>
						{menu
							.filter((filter) => filter.isSelectect === false)
							.map((e, i) => {
								return (
									<li
										onClick={() => setSelectedText(e.navigation)}
										className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer leading-3 font-normal"
									>
										<Link
											to={
												e.navigation.toLocaleLowerCase() === "home"
													? "/"
													: e.navigation.toLocaleLowerCase()
											}
										>
											{e.navigation}
										</Link>
									</li>
								);
							})}
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
