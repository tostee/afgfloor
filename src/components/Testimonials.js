import React from "react";

const Testimonials = () => {
	return (
		<div className="w-full bg-slate-200 px-4 py-20 flex justify-center">
			<div className="w-full max-w-screen-xl flex flex-col gap-6">
				<h1 className="xl:text-6xl text-3xl text-center text-secundary font-extrabold">
					What People Say About Us
				</h1>
				<div
					role="list"
					aria-label="Testimonials"
					className="w-full grid sm:grid-cols-1 md:grid-cols-3 gap-4 items-start"
				>
					<div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
						<img src="./assets/images/quote.png" aria-hidden="true" />
						<div className="pl-4 pt-4 flex items-start justify-between">
							<div className="mr-6">
								<p className="text-secundary md:text-xl">
									Would recommend 100% They recently did the installation for my
									laminate flooring. Adrian and crew were on time, professional
									and efficient. I already recommended them for another job
								</p>
								<p className="mt-4 font-semibold leading-none text-black md:text-xl">
									Anna Smith
								</p>
							</div>
						</div>
					</div>
					<div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
						<img src="./assets/images/quote.png" aria-hidden="true" />
						<div className="pl-4 pt-4 flex items-start justify-between">
							<div className="mr-6">
								<p className="text-secundary md:text-xl">
									I needed someone to install laminate flooring for me and so I
									found these guys on Angie’s List & they got my request and
									called me right away! I spoke with Christina, who manages all
									the appointments and quotes! She found me the best deal
									possible and started right away! It’s my first time owning a
									home so they were super honest with me and even told me to go
									return stuff I bought from Home Depot because I over paid and
									they got me their own stuff for a much lower price!
								</p>
								<p className="mt-4 font-semibold leading-none text-black md:text-xl">
									Dany John
								</p>
							</div>
						</div>
					</div>
					<div role="listitem" className="bg-white shadow rounded p-4 xl:p-8">
						<img src="./assets/images/quote.png" aria-hidden="true" />
						<div className="pl-4 pt-4 flex items-start justify-between">
							<div className="mr-6">
								<p className="text-secundary md:text-xl">
									Excellent service !!! I had horrible carpet on my second story
									and stairs, and changing it to wood was the best decision !!
									Adrian was very friendly and understanding, the prices were
									good and the end result was even better ! I recommend it 100%
								</p>
								<p className="mt-4 font-semibold leading-none text-black md:text-xl">
									Mike Blake
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default Testimonials;
