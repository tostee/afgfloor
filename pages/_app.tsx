import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import ModalForm from "../components/ModalForm";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }: AppProps) {
	const [visible, setVisible] = useState(false);

	return (
		<>
			<Head>
				<meta charSet="utf-8" />
				<meta name="theme-color" content="#000000" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Your comfort is our priority" />

				<title>AFG Floor INC</title>
			</Head>

			<ModalForm visible={visible} onChange={(toggle) => setVisible(toggle)} />

			<div className="flex flex-col font-quicksand bg-white min-h-screen">
				<Navbar onChange={(toggle: any) => setVisible(toggle)} />

				<main className="flex flex-col gap-4 w-full flex-1">
					<Component {...pageProps} openModal={() => setVisible(true)} />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default MyApp;
