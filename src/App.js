import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Aboutus";
import Contactus from "./components/Contactus";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import ModalForm from "./components/ModalForm";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import Services from "./components/Services";
import "./index.css";
import {
	AboutPath,
	ContactPath,
	GalleryPath,
	HomePath,
	ServicesDetailsPath,
	ServicesPath,
} from "./utils/routes";

const App = () => {
	const [showModal, setShowModal] = useState(false);

	return (
		<BrowserRouter>
			<ModalForm
				visible={showModal}
				onChange={(toggle) => setShowModal(toggle)}
			/>
			<div className="flex flex-col font-quicksand bg-white min-h-screen">
				<Navbar onChange={(toggle) => setShowModal(toggle)} />
				<div className="flex flex-col gap-4 w-full flex-1">
					<Routes>
						<Route
							path={HomePath}
							element={<Home onChange={(toggle) => setShowModal(toggle)} />}
						></Route>
						<Route path={GalleryPath} element={<Gallery />}></Route>
						<Route path={ContactPath} element={<Contactus />}></Route>
						<Route path={AboutPath} element={<About />}></Route>
						<Route path={ServicesPath} element={<Services />}></Route>
						<Route
							path={ServicesDetailsPath(":serviceId")}
							element={<Service />}
						/>
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
