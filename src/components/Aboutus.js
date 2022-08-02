const About = () => {
	return (
		<div className="2xl:mx-auto md:py-12 md:px-6 py-navbar px-4 bg-white w-full mt-navbar ">
			<div className="max-w-[1024px] mx-auto">
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-5xl lg:text-7xl font-bold leading-9 text-primary pb-4">
							About Us
						</h1>
						<p className="font-normal text-xl leading-6 text-primary ">
							By far our main specialty in the flooring business, our team can
							amaze you with a state of the art installation job. From Laminate
							to Hard Wood Flooring, or Vinyl to Exotics, Face of Wood
							Flooring’s installation team will render a perfect job for you!
						</p>
					</div>
					<div className="w-full lg:w-8/12 ">
						<img src="./assets/images/aboutus/1.jpg" alt="A group of People" />
					</div>
				</div>

				<div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
					<div className="w-full lg:w-5/12 flex flex-col justify-center">
						<h1 className="text-5xl lg:text-7xl font-bold leading-9 text-primary pb-4">
							Our Story
						</h1>
						<p className="font-normal text-xl leading-6 text-primary ">
							It is a long established fact that a reader will be distracted by
							the readable content of a page when looking at its layout. The
							point of using Lorem Ipsum.In the first place we have granted to
							God, and by this our present charter confirmed for us and our
							heirs forever that the English Church shall be free, and shall
							have her rights entire, and her liberties inviolate; and we will
							that it be thus observed; which is apparent from
						</p>
					</div>
					<div className="w-full lg:w-8/12 lg:pt-8">
						<div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/FYTKDG6/Rectangle-118-2.png"
									alt="Alexa featured Img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/zHjXqg4/Rectangle-118.png"
									alt="Alexa featured Img"
								/>
								<p className="font-medium text-xl leading-5 text-primary mt-4">
									Alexa
								</p>
							</div>
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/fGmxhVy/Rectangle-119.png"
									alt="Olivia featured Img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/NrWKJ1M/Rectangle-119.png"
									alt="Olivia featured Img"
								/>
								<p className="font-medium text-xl leading-5 text-primary mt-4">
									Olivia
								</p>
							</div>
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/Pc6XVVC/Rectangle-120.png"
									alt="Liam featued Img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/C5MMBcs/Rectangle-120.png"
									alt="Liam featued Img"
								/>
								<p className="font-medium text-xl leading-5 text-primary mt-4">
									Liam
								</p>
							</div>
							<div className="p-4 pb-6 flex justify-center flex-col items-center">
								<img
									className="md:block hidden"
									src="https://i.ibb.co/7nSJPXQ/Rectangle-121.png"
									alt="Elijah featured img"
								/>
								<img
									className="md:hidden block"
									src="https://i.ibb.co/ThZBWxH/Rectangle-121.png"
									alt="Elijah featured img"
								/>
								<p className="font-medium text-xl leading-5 text-primary mt-4">
									Elijah
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default About;
