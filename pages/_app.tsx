import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import ModalForm from "../components/ModalForm";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import { NextSeo } from "next-seo";


function MyApp({ Component, pageProps }: AppProps) {
	const [visible, setVisible] = useState(false);

	return (
		<>
	<NextSeo
      title="AFGFLOOR"
	  
      description="By far our main specialty is the flooring business."
	  robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
      
/>
	

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
