import React from "react";
import { Link } from "react-router-dom";
import { services } from "../data/data";
const Services = () => {
	return (
		<div className="md:px-6 px-4 py-navbar bg-white">
			<div className="flex justify-center">
				<div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-6 items-center">
					{services.map((e, i) => {
						return (
							<div key={i} className="relative flex flex-col">
								<img src={e.preview} alt="works" className="w-full" />
								<img
									src={e.preview}
									alt="opacity bg"
									className="absolute w-full top-0"
								/>
								<div className="absolute m-6 bottom-0">
									<h1 className="w-64 text-2xl font-semibold leading-8 mt-2 text-white">
										{e.name}
									</h1>
									<Link to={"/services/" + e.id}>
										<p className="mt-4 text-base font-medium cursor-pointer leading-4 underline bg-slate-200 text-links">
											Read Moore
										</p>
									</Link>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};

export default Services;
