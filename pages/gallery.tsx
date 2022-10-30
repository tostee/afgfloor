import Carousel from "../components/Carousel/Carousel";
import { galleryImages } from "../images";

export default function Gallery() {
	return (
		<div className="w-full px-4 py-10 flex justify-center mt-navbar">
			<div className="w-full max-w-lg">
				<Carousel images={galleryImages.map(({ original }) => original)} />
			</div>
		</div>
	);
}
