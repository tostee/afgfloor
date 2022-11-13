import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import ModalForm from "../components/ModalForm";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import { AppSeo } from "../SEO/appSEO";


function MyApp({ Component, pageProps }: AppProps) {
	const [visible, setVisible] = useState(false);

	return (
		<>
	<AppSeo/>
	

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
