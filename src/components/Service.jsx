import React from "react";
import {useParams} from "react-router-dom";
import { services } from "../data/data";
import ServiceGallery from "./ServiceGallery";

const Service = () => {
    const {serviceId} = useParams();
    return (
		services.filter((id)=>id.id === serviceId).map((e)=>{
			return(
<div className="bg-white w-full pt-40 px-4 ">
			<div className="max-w-[1024px] mx-auto">
            
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="w-full lg:w-5/12 flex flex-col justify-start">
						<h1 className="text-5xl lg:text-7xl font-bold leading-9 text-secundary pb-4">
							{e.name}
						</h1>
						<p className="font-normal mt-2 md:text-xl leading-6 text-secundary ">
							{e.description}
						</p>
					</div>
					<div className="w-full lg:w-2/5 ">
						<img src={e.preview} alt="A group of People" />
					</div>
					
				</div>

			
			</div>
			<ServiceGallery images = {e.images} />
		</div>
			)
		})
		
	);
}

export default Service;