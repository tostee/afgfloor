import Header from "../components/Header";
import Lastworks from "../components/Lastworks";
import MapComponent from "../components/MapComponent";
import Teammates from "../components/Teammates";
import Testimonials from "../components/Testimonials";
import { NextSeo } from "next-seo";
import { urlHome } from "../constants";
import Head from "next/head";
const Home = ({ openModal }: any) => {
	return (
		<>
		
		<NextSeo
		
      openGraph={{
        type: 'website',
        url: urlHome,
        title: 'Afgfloor Main Page',
        description: 'Your comfort is our priority.',
        images: [
          {
            url: '/images/home.jpg',
            width: 800,
            height: 600,
            alt: 'Indoor Image',
          },
          
        ],
      }}
    />
		<div className="grid auto-rows-auto auto">
			<Header openModal={openModal} />

			<Lastworks />

			<Testimonials />

			<Teammates />

			<div className="flex justify-center py-14 px-4 bg-gray-300">
				<div className="w-full max-w-page rounded overflow-hidden">
					<MapComponent />
				</div>
			</div>
		</div>
		</>
	);
};

export default Home;
