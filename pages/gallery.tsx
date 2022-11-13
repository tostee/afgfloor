import Carousel from "../components/Carousel/Carousel";
import { galleryImages } from "../images";
import { NextSeo } from "next-seo";
import { urlGallery } from "../constants";

export default function Gallery() {
	return (
	<>
	<NextSeo
  title="GALLERY"
  description="Some pics of the company's work."
      openGraph={{
        type: 'website',
        url: urlGallery,
        title: 'Afgfloor Gallery',
        description: "Some pics of the company's work.",
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
		<div className="w-full px-4 py-10 flex justify-center mt-navbar">
			<div className="w-full max-w-lg">
				<Carousel images={galleryImages} />
			</div>
		</div>
	</>
	);
}
