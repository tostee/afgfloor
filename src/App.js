import Footer from "./components/Footer";
import About from "./components/Aboutus";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import Service from "./components/Service";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Services from "./components/Services";
import { useState } from "react";
import ModalForm from "./components/ModalForm";
const App = () => {
	const [showModal, setShowModal] = useState(false);
	return (
		<BrowserRouter>
			<ModalForm
				visible={showModal}
				onChange={(toggle) => setShowModal(toggle)}
			/>
			<div className="flex flex-col font-quicksand text-amber-700 bg-white min-h-screen">
				<Navbar onChange={(toggle) => setShowModal(toggle)} />
				<div className="flex flex-col gap-4 w-full flex-1">
					<Routes>
						<Route
							path="/"
							element={<Home onChange={(toggle) => setShowModal(toggle)} />}
						></Route>
						<Route path="/gallery" element={<Gallery />}></Route>
						<Route path="/contact" element={<Contactus />}></Route>
						<Route path="/about" element={<About />}></Route>
						<Route path="/services" element={<Services />}></Route>
						<Route path="services/:serviceId" element={<Service />} />
					</Routes>
				</div>
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
