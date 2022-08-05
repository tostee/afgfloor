import React from "react";
import {useParams} from "react-router-dom";
import { services } from "../data/data";
import ServiceGallery from "./ServiceGallery";

const Service = () => {
    const {serviceId} = useParams();
    return (
		services.filter((id)=>id.id === serviceId).map((e)=>{
			return(
<div className="bg-white w-full pt-40 ">
			<div className="max-w-screen-lg mx-auto">
            
				<div className="flex flex-col lg:flex-row justify-between gap-8">
					<div className="w-full lg:w-6/12 flex flex-col justify-start">
						
						<p className="font-normal mt-2 md:text-xl leading-6 text-secundary ">
							{e.description}
						</p>
					</div>
					
					<div className="w-full lg:w-2/5 ">
						<img src={e.preview} alt="A group of People" />
					</div>
					
				</div>
				
			
			</div>
			<div className="text-center mt-3 p-4 bg-slate-200 w-full"><h1 className="text-3xl lg:text-5xl font-bold leading-9 text-secundary pb-4">
							Other Works
						</h1></div>
			
			<ServiceGallery images = {e.images} />
			
		</div>
			)
		})
		
	);
}

export default Service;