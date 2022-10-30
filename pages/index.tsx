import Header from "../components/Header";
import Lastworks from "../components/Lastworks";
import MapComponent from "../components/MapComponent";
import Teammates from "../components/Teammates";
import Testimonials from "../components/Testimonials";

const Home = ({ openModal }: any) => {
	return (
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
	);
};

export default Home;
