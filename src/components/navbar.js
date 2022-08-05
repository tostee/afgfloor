import React, { useState } from "react";
import { Link, useMatch } from "react-router-dom";
import {
	AboutPath,
	ContactPath,
	GalleryPath,
	HomePath,
	ServicesPath,
} from "../utils/routes";
import Button from "./Button";

const Navbar = ({ onChange }) => {
	const isHome = !!useMatch(HomePath);
	const isAbout = !!useMatch(AboutPath);
	const isServices = !!useMatch(ServicesPath);
	const isGallery = !!useMatch(GalleryPath);
	const isContact = !!useMatch(ContactPath);
	let arr = [
		{ name: "Home", active: isHome },
		{ name: "About", active: isAbout },
		{ name: "Services", active: isServices },
		{ name: "Gallery", active: isGallery },
		{ name: "Contact", active: isContact },
	];
	const menus = [];

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
				<div className="flex-1">
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
				</div>

				{/* For medium and plus sized devices */}
				<ul className="md:flex hidden items-center justify-center gap-2">
					<NavItem path={HomePath} active={isHome}>
						Home
					</NavItem>

					<NavItem path={AboutPath} active={isAbout}>
						About
					</NavItem>

					<NavItem path={ServicesPath} active={isServices}>
						Services
					</NavItem>

					<NavItem path={GalleryPath} active={isGallery}>
						Gallery
					</NavItem>

					<NavItem path={ContactPath} active={isContact}>
						Contact
					</NavItem>
				</ul>

				<div className="flex flex-1 items-center justify-end gap-3">
					<a
						href="sms:+19542748026"
						className="text-analogous rounded-full hover:text-green-700"
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
						className="text-analogous rounded-full hover:text-green-700"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6 "
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

					<Button onClick={() => onChange(true)}>Get Quote</Button>
				</div>
			</nav>

			{/* for smaller devcies */}
			<div className=" md:hidden bg-gray-300 mt-2 z-40 ">
				<div className="px-4 py-3 text-gray-700 rounded flex justify-between items-end w-full">
					<div className="flex flex-row-reverse w-full">
						<div
							onClick={() => setDropDown(!dropDown)}
							className="flex border border-gray-400 py-0 px-1"
						>
							<p id="textClicked" className="font-normal cursor-pointer ">
								{arr
									.filter((e) => e.active === true)
									.map((e) => {
										return e.name;
									})}
							</p>
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
									stroke="gray"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</div>
					</div>
				</div>
				<div className=" relative">
					<ul
						id="list"
						className={`${
							dropDown ? "hidden" : "block"
						} font-normal leading-4 absolute top-2  w-full rounded shadow-md`}
					>
						<NavItemMobile
							path={HomePath}
							active={isHome}
							onclick={() => setDropDown(!dropDown)}
						>
							Home
						</NavItemMobile>

						<NavItemMobile
							path={AboutPath}
							active={isAbout}
							onclick={() => setDropDown(!dropDown)}
						>
							About
						</NavItemMobile>

						<NavItemMobile
							path={ServicesPath}
							active={isServices}
							onclick={() => setDropDown(!dropDown)}
						>
							Services
						</NavItemMobile>

						<NavItemMobile
							path={GalleryPath}
							active={isGallery}
							onclick={() => setDropDown(!dropDown)}
						>
							Gallery
						</NavItemMobile>

						<NavItemMobile
							path={ContactPath}
							active={isContact}
							onclick={() => setDropDown(!dropDown)}
						>
							Contact
						</NavItemMobile>
					</ul>
				</div>
			</div>
		</div>
	);
};

const NavItem = ({ children, path, active = false }) => {
	return (
		<Link to={path}>
			<div
				className={`${
					active
						? "text-primarydark text-lg font-bold"
						: "text-secundary text-lg hover:font-extralight"
				} cursor-pointer px-4 `}
			>
				{children}
			</div>
		</Link>
	);
};

const NavItemMobile = ({ children, path, active = false, onclick }) => {
	return (
		<Link to={path}>
			<div
				onClick={onclick}
				className={`${
					active
						? "text-white bg-primary text-lg"
						: "text-secundary border border-white bg-gray-50 text-lg hover:bg-gray-100"
				} px-4 py-3  duration-100 cursor-pointer leading-3 font-normal`}
			>
				{children}
			</div>
		</Link>
	);
};

export default Navbar;
