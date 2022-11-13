import Link from "next/link";
import { services } from "../images";
import { ServicesDetailsPath } from "../routes";
import { NextSeo } from "next-seo";
import { urlServices } from "../constants";
const Services = () => {
	return (
		
		<>
		<NextSeo
		title="SERVICES"
		description="Services provided by our company."
      openGraph={{
        type: 'website',
        url: urlServices,
        title: 'Afgfloor Services',
        description: 'Choose a service, AFGFLOOR is pleased to work for you.',
        images: [
          {
            url: 'https://www.example.ie/og-image.jpg',
            width: 800,
            height: 600,
            alt: 'Og Image Alt',
          },
          
        ],
      }}
    />
		<div className="flex justify-center px-4 w-full py-navbar bg-white">
		<div className="grid lg:grid-cols-3 gap-6 w-full max-w-lg lg:max-w-page py-10">
			{services.map((e, i) => {
				return (
					<Link key={i} href={ServicesDetailsPath(e.id)}>
						<div className="relative flex flex-col h-full rounded-lg overflow-clip group">
							<img src={e.preview} alt="works" className="w-full" />

							<div
								className="absolute w-full bottom-0 bg-black bg-opacity-40
									px-5 py-2 text-white flex flex-col gap-2"
							>
								<h1 className="text-2xl font-semibold leading-none">
									{e.name}
								</h1>

								<p className="group-hover:underline">Read More</p>
							</div>
						</div>
					</Link>
				);
			})}
		</div>
	</div>
	</>
	);
};

export default Services;
