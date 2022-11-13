import { useRouter } from "next/router";
import ServiceGallery from "../../components/ServiceGallery";
import { services } from "../../images";
import { Seoservice } from "../../SEO/appSEO";



export default function Service() {
	const router = useRouter();
	const { id } = router.query;
	const [service] = services.filter((s) => s.id === id);

	if (!service) return <></>;

	return (
		<>
		<Seoservice service = {service}/>

			<div className="w-full pt-navbar flex justify-center px-4">
				<div className="w-full flex flex-col py-12 items-center gap-4 lg:gap-10 max-w-lg lg:max-w-page">
					<h1 className="text-3xl font-semibold text-center">{service.name}</h1>

					<div className="flex flex-col gap-8 w-full lg:flex-row lg:items-center lg:gap-16">
						<p className="text-center lg:text-left text-secundary text-lg flex-1">
							{service.description}
						</p>

						<div className="flex-1">
							<img
								src={service.preview}
								alt={service.name}
								className="w-full rounded-lg max-h-[620px] object-cover"
							/>
						</div>
					</div>
				</div>
			</div>

			<div className="w-full flex justify-center px-4 bg-slate-200">
				<div className="w-full max-w-page flex flex-col py-12">
					<h1 className="text-3xl font-semibold text-center">Other Works</h1>

					<ServiceGallery images={service.images} />
				</div>
			</div>
		</>
	);
}
