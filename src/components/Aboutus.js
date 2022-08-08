const About = () => {
	return (
		<div className="md:py-12 md:px-6 py-navbar px-4 bg-white w-full mt-navbar ">
			<div className="max-w-screen-xl mx-auto">
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
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
					<div className="w-full lg:w-8/12 ">
						<img src="./assets/images/aboutus/1.jpg" alt="A group of People" />
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
