import Carousel from "../components/Carousel/Carousel";
import { galleryImages } from "../images";
import { SeoGallery } from "../SEO/appSEO";

export default function Gallery() {
	return (
	<>
    <SeoGallery/>
		<div className="w-full px-4 py-10 flex justify-center mt-navbar">
			<div className="w-full max-w-lg">
				<Carousel images={galleryImages} />
			</div>
		</div>
	</>
	);
}
