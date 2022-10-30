import {
	ButtonBack,
	ButtonNext,
	CarouselProvider,
	Slide,
	Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

type ServiceGalleryProps = {
	images: string[];
};

export default function ServiceGallery({ images }: ServiceGalleryProps) {
	return (
		<div className="w-full bg-slate-200 px-4 py-2 flex justify-center">
			<div className="2xl:px-20 px-6 py-12 w-full lg:w-4/5">
				{/* Carousel for Small-Sized Screen */}
				<CarouselProvider
					className="relative block sm:hidden"
					infinite
					isIntrinsicHeight
					naturalSlideWidth={100}
					naturalSlideHeight={100}
					step={1}
					totalSlides={images.length}
					visibleSlides={1}
				>
					<div className="js-flickity flex justify-center items-center">
						<ButtonBack
							role="button"
							aria-label="slide backward"
							className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
							id="prev"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 1L1 7L7 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonBack>
						<Slider>
							{images.map((e, i) => {
								return (
									<Slide key={i} index={i}>
										<div className="gallery-cell lg:mr-7 mr-6 lg:w-1/2 sm:w-96 w-full h-full">
											<div className="relative w-full h-full lg:block hidden">
												<img
													src={e}
													alt="sitting area"
													className="object-center object-cover w-full h-full"
												/>
											</div>
											<div className="relative w-full h-full lg:hidden">
												<img
													src={e}
													alt="sitting area"
													className="object-center object-cover w-full h-full"
												/>
											</div>
										</div>
									</Slide>
								);
							})}
						</Slider>
						<ButtonNext
							role="button"
							aria-label="slide forward"
							className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
							id="next"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L7 7L1 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonNext>
					</div>
				</CarouselProvider>

				{/* Carousel for Medium and Large-Sized Screen */}
				<CarouselProvider
					className="relative hidden sm:block"
					currentSlide={1}
					infinite
					isIntrinsicHeight
					naturalSlideHeight={100}
					naturalSlideWidth={100}
					step={1}
					totalSlides={images.length}
					visibleSlides={1}
				>
					<div className="js-flickity flex justify-center items-center">
						<ButtonBack
							role="button"
							aria-label="slide backward"
							className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 left-0 ml-8 focus:outline-none focus:bg-gray-400 focus:ring-2 focus:ring-offset-2 focus:ring-gray-400 cursor-pointer"
							id="prev"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M7 1L1 7L7 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonBack>
						<Slider className="carousel__sliderLarge">
							{images.map((e, i) => {
								return (
									<Slide
										key={i}
										className="carousel__inner-slideLarge"
										index={i}
									>
										<div className="gallery-cell w-full h-full">
											<div className="relative w-full h-full lg:block hidden">
												<img
													src={e}
													alt="sitting area"
													className="object-center object-cover w-full h-full"
												/>
											</div>
											<div className="relative w-full h-full lg:hidden">
												<img
													src={e}
													alt="sitting area"
													className="object-center object-cover w-full h-full"
												/>
											</div>
										</div>
									</Slide>
								);
							})}
						</Slider>
						<ButtonNext
							role="button"
							aria-label="slide forward"
							className="w-12 h-12 md:w-14 md:h-14 rounded-full flex justify-center items-center bg-white border border-gray-300 hover:bg-gray-400 absolute z-30 right-0 mr-8 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800"
							id="next"
						>
							<svg
								width={8}
								height={14}
								viewBox="0 0 8 14"
								fill="none"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M1 1L7 7L1 13"
									stroke="black"
									strokeWidth={2}
									strokeLinecap="round"
									strokeLinejoin="round"
								/>
							</svg>
						</ButtonNext>
					</div>
				</CarouselProvider>
			</div>

			<style>
				{`
                    .gallery-cell {
                        height: 386px;
                        padding-right:15px;
                    }
                    @media (min-width: 300px) and (max-width: 420px) {
                        .gallery-cell {
                            height: 500px !important;
                            
                        }
                    }
                    
                    @media (max-width: 640px) {
                        .gallery-cell {
                            padding-right:0;
                        }
                    }

                    .carousel__sliderLarge {
                        padding-left: 20%;
                        padding-right: 20%;
                    }

                    /* gives us the illusion of spaces between the slides */
                    .carousel__inner-slideLarge {
                        width: calc(100% - 20px);
                        height: calc(100% - 20px);
                        left: 10px;
                        top: 10px;
                        
                    }
                `}
			</style>
		</div>
	);
}
