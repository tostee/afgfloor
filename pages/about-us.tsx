import { SeoAbout } from "../SEO/appSEO";

const About = () => {
	return (
		<>
		<SeoAbout/>
		<div className="md:py-12 md:px-6 py-navbar px-4 bg-white w-full flex justify-center mt-navbar">
			<div className="w-full max-w-page">
				<div className="flex flex-col md:flex-row items-center gap-8">
					<div className="flex-1 flex flex-col max-w-sm md:max-w-full">
						<h1 className="text-4xl lg:text-6xl font-bold leading-9 text-secundary pb-4">
							About Us
						</h1>
						<p className="font-normal text-xl leading-6 text-secundary ">
							By far our main specialty is the flooring business, our team can
							amaze you with a state of the art installation job. From Laminate
							to Hard Wood Flooring, or Vinyl to Exotics, AFGFloor Flooring’s
							installation team will render a perfect job for you!
						</p>
					</div>

					<div className="flex-1 flex justify-center">
						<img
							src="/images/aboutus/front.jpg"
							alt="Living"
							className="max-w-sm md:max-w-full max-h-[620px] rounded-lg "
						/>
					</div>
				</div>
			</div>
		</div>
		</>
	);
};

export default About;
