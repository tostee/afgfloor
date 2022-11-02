import { useRef } from "react";
import styles from "./Carousel.module.scss";

type CarouselProps = { images: string[] };

const Carousel = ({ images }: CarouselProps) => {
	const ref = useRef<HTMLDivElement>(null);

	const onClick = (e: any) => {
		e.preventDefault();
		const { width, left } = ref.current!.getBoundingClientRect();
		return e.clientX - left < width / 2 ? prev() : next();
	};

	const prev = () => {
		const { width } = ref.current!.getBoundingClientRect();
		if (ref.current!.scrollLeft > 0) {
			ref.current?.scrollTo({
				left: ref.current.scrollLeft - width,
				behavior: "smooth",
			});
		}
	};

	const next = () => {
		const { width } = ref.current!.getBoundingClientRect();
		if (ref.current!.scrollLeft / width < images.length - 1) {
			ref.current?.scrollTo({
				left: ref.current.scrollLeft + width,
				behavior: "smooth",
			});
		}
	};

	const onScroll = (e: any) => {
		const { width } = ref.current!.getBoundingClientRect();
		const c = Math.floor((e.target.scrollLeft + width / 2) / width);
	};

	return (
		<div className="w-full shadow-lg relative" onKeyUp={(e) => console.log(e)}>
			<div className="relative w-full aspect-[1200/1600] rounded-xl overflow-hidden">
				<div
					ref={ref}
					onClick={onClick}
					className={styles.photos}
					onScroll={onScroll}
				>
					{images.map((url, i) => (
						<Photo key={i} url={url} />
					))}
				</div>

				<Indicators onLeft={() => prev()} onRight={() => next()} />
			</div>
		</div>
	);
};

const Photo = ({ url }: any) => {
	return (
		<div className={`${styles.photo}`}>
			<img src={url} alt="Photo" className="w-full h-full object-cover" />
		</div>
	);
};

export default Carousel;

function Indicators({ onLeft, onRight }: any) {
	return (
		<div className="hidden sm:flex absolute top-0 left-0 w-full h-full">
			<Indicator label="Previous" onClick={onLeft} />
			<Indicator label="Next" onClick={onRight} isNext />
		</div>
	);
}

function Indicator({ label, isNext = false, onClick }: any) {
	return (
		<div
			onClick={onClick}
			aria-label={label}
			className={`flex-1 h-full flex flex-col justify-center group transition-all duration-300
			p-10 cursor-pointer ${!isNext ? "items-start" : "items-end"} ${
				!isNext ? styles.IndicatorLeft : styles.IndicatorRight
			}`}
		>
			<div
				className={`opacity-0 group-hover:opacity-80 transition-all duration-150 ${
					!isNext ? "" : "rotate-180"
				}`}
			>
				<ArrowIcon />
			</div>
		</div>
	);
}

function ArrowIcon() {
	return (
		<svg
			width={8}
			height={14}
			viewBox="0 0 8 14"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M7 1L1 7L7 13"
				stroke="white"
				strokeWidth={2}
				strokeLinecap="round"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
