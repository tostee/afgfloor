import Lastworks from "./Lastworks";
import Testimonials from "./Testimonials";
import MyComponent from "./map.component";
import Notfound from "./Notfound";
import Header from "./Header";
import Teammates from "./Teammates";
import MapComponent from "./map.component";

const Home = ({ className, onChange }) => {
	return (
		<div className="grid auto-rows-auto auto">
			<Header onChange={onChange} />

			<Lastworks />

			<Testimonials />

			<Teammates />

			<div
				className={`min-w-[64px] min-h-[64px] grid place-items-center py-14 px-4 bg-gray-300 ${className}`}
			>
				<div className="w-full max-w-screen-xl rounded overflow-hidden">
					<MapComponent />
				</div>
			</div>
		</div>
	);
};

export default Home;
