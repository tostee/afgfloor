import Lastworks from "./Lastworks";
import Testimonials from "./Testimonials";
import MyComponent from "./map.component";
import Notfound from "./Notfound";
import Header from "./Header";
import Teammates from "./Teammates";


const Home = (className) => {
	return (
		<div className="grid gap-3 auto-rows-auto ">
			<Header/>
			<div
				className={` bg-transparent mt-10 place-items-center ${className}`}
			>
				<Lastworks />
			</div>
			<div
				className={`min-w-[64px] min-h-[64px] bg-zinc-400 mt-10 grid place-items-center ${className}`}
			>
				<Testimonials />
			</div>
			<div
				className={`min-w-[64px] min-h-[64px] bg-transparent mt-10 grid place-items-center ${className}`}
			>
				<Teammates />
			</div>
			<div
				className={`min-w-[64px] min-h-[64px] bg-transparent mt-10 grid place-items-center ${className}`}
			>
				<MyComponent />
			</div>
		</div>
	);
};

export default Home;
