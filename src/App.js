import Footer from "./components/Footer";
import About from "./components/Aboutus";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";
import "./index.css";
import Navbar from "./components/navbar";
import Services from "./components/Services";


const App = () => {
	return (
		<BrowserRouter>
		<div className="flex flex-col font-quicksand text-amber-700 bg-gray-800 min-h-screen">
			
			<Navbar />
				<div className="flex flex-col gap-4 w-full flex-1">
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/gallery" element={<Gallery />}></Route>
							<Route path="/contact" element={<Contactus />}></Route>
							<Route path="/about" element={<About />}></Route>
							<Route path="/services" element={<Services />}></Route>
						</Routes>
						
				</div>
				<Footer />
		</div>
		</BrowserRouter>
	);
};

export default App;
