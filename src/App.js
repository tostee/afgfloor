import Header from "./components/Header";
import Footer from "./components/Footer";
import Lastworks from "./components/Lastworks";
import About from "./components/Aboutus";
import Gallery from "./components/Gallery";
import Home from "./components/Home";
import Contactus from "./components/Contactus";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";


import 'flowbite';
import "./index.css";
import Navbar from "./components/navbar";
import ModalForm from "./components/ModalForm";

const App = () => {
	return (
		<div className="font-quicksand text-amber-700 bg-zinc-300 min-h-screen">
			<div className="flex justify-center w-full">
				<div className="flex flex-col gap-4 w-full max-w-5xl ">
					<BrowserRouter>
						<Navbar />
						<Routes>
							<Route path="/" element={<Home />}></Route>
							<Route path="/gallery" element={<Gallery />}></Route>
							<Route path="/contact" element={<Contactus />}></Route>
							<Route path="/about" element={<About />}></Route>
						</Routes>
						<ModalForm/>
						<Footer />
					</BrowserRouter>
				</div>
			</div>
		</div>
	);
};

export default App;
