import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalForm from "./ModalForm";

const Navbar = ({ onChange }) => {
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
			<nav className="flex justify-between max-w-[1024px] items-center mx-auto">
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
				<div className=" flex space-x-5 justify-center items-center pl-2 flex-1">
					<button
						onClick={() => onChange(true)}
						className="focus:outline-none mx-auto hover:bg-indigo-600 bg-button rounded text-white px-4 sm:px-8 py-2 text-xs sm:text-sm"
					>
						Get Quote
					</button>
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
							} font-semibold text-sm leading-3`}
						>
							{""}
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
						} font-normal text-base leading-4 absolute top-2  w-full rounded shadow-md`}
					>
						{menu
							.filter((filter) => filter.isSelectect === false)
							.map((e, i) => {
								return (
									<li
										onClick={() => setSelectedText(e.navigation)}
										className="px-4 py-3 text-gray-600 bg-gray-50 border border-gray-50 focus:outline-none focus:bg-gray-100 hover:bg-gray-100 duration-100 cursor-pointer text-xs leading-3 font-normal"
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
