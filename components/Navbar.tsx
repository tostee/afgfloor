import Link from "next/link";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { contactEmail, contactPhone, contactPhoneDisplay } from "../constants";
import {
	AboutPath,
	ContactPath,
	GalleryPath,
	HomePath,
	ServicesPath,
} from "../routes";
import Button, { SandwichButton } from "./Button";
import { CloseIcon, EmailIcon, PhoneIcon } from "./icons";
import Logo from "./Logo";

const Navbar = ({ onChange }: any) => {
	const [open, setOpen] = useState(false);

	return (
		<>
			<div className="shadow-lg fixed w-full h-navbar top-0 left-0 px-4 z-30 flex justify-center bg-white">
				<nav className="flex max-w-page items-center w-full h-full gap-4">
					<div className="flex-1 flex justify-start">
						<Link href={HomePath}>
							<Logo />
						</Link>
					</div>

					<div className="hidden lg:inline">
						<NavItems />
					</div>

					<div className="flex flex-1 items-center justify-end gap-4">
						<a
							href={`mailto:${contactEmail}`}
							title={contactEmail}
							className="text-analogous rounded-full hover:text-green-700"
						>
							<EmailIcon />
						</a>

						<a
							href={`tel:${contactPhone}`}
							title={contactPhoneDisplay}
							className="text-analogous rounded-full hover:text-green-700"
						>
							<PhoneIcon />
						</a>

						<div className="fixed bottom-4 right-4 lg:bottom-0 lg:right-0 lg:relative">
							<Button onClick={() => onChange(true)}>Get Quote</Button>
						</div>
					</div>

					<div className="lg:hidden">
						<SandwichButton onClick={() => setOpen(!open)} />
					</div>
				</nav>
			</div>

			<Drawer open={open} onClose={() => setOpen(false)}>
				<NavItems onSelect={() => setOpen(false)} />
			</Drawer>
		</>
	);
};

const NavItems = ({ onSelect }: any) => {
	const { pathname } = useRouter();

	return (
		<ul className="flex flex-col lg:flex-row items-center justify-center gap-8">
			<NavItem
				path={HomePath}
				active={pathname === HomePath}
				onSelect={onSelect}
			>
				Home
			</NavItem>

			<NavItem
				path={AboutPath}
				active={pathname === AboutPath}
				onSelect={onSelect}
			>
				About
			</NavItem>

			<NavItem
				path={ServicesPath}
				active={pathname === ServicesPath}
				onSelect={onSelect}
			>
				Services
			</NavItem>

			<NavItem
				path={GalleryPath}
				active={pathname === GalleryPath}
				onSelect={onSelect}
			>
				Gallery
			</NavItem>

			<NavItem
				path={ContactPath}
				active={pathname === ContactPath}
				onSelect={onSelect}
			>
				Contact
			</NavItem>
		</ul>
	);
};

const NavItem = ({ children, path, active = false, onSelect }: any) => {
	return (
		<Link href={path}>
			<span
				className={`${
					active ? "text-primary" : "text-gray-500"
				} hover:text-primary text-lg uppercase font-bold tracking-wide`}
				onClick={() => onSelect?.()}
			>
				{children}
			</span>
		</Link>
	);
};

const Drawer = ({ open = false, onClose, children }: any) => {
	const ref = useRef(null);

	if (!open) return <></>;

	return (
		<div
			ref={ref}
			onClick={(e) => {
				if (e.target === ref.current) onClose?.();
			}}
			className="flex justify-end fixed bg-opacity-60 w-full h-full z-50 bg-black"
		>
			<div
				className="w-full h-full max-w-xs grid place-items-center shadow-lg
				overflow-y-auto bg-white"
			>
				<button
					type="button"
					onClick={onClose}
					className="fixed right-5 top-5 rounded-full grid place-items-center"
				>
					<CloseIcon />
				</button>

				{children}
			</div>
		</div>
	);
};

export default Navbar;
