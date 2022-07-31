export const _IMAGES = [];
for (let index = 1; index < 50; index++) {
	let image = {
		original: `/images/${index}.jpg`,
		thumbnail: `/images/${index}.jpg`,
	};
	_IMAGES.push(image);
}
const hardwoodStairs = [];
for (let index = 1; index < 7; index++) {
	hardwoodStairs.push(`/assets/images/services/HardwoodStairs/${index}.jpg`);
}

const floorMaintenance = [];
for (let index = 1; index < 7; index++) {
	floorMaintenance.push(
		`/assets/images/services/FloorMaintenance/${index}.jpg`
	);
}

const luxuryVinyl = [];
for (let index = 1; index < 7; index++) {
	luxuryVinyl.push(`/assets/images/services/LuxuryVinyl/${index}.jpg`);
}
export const services = [
	{
		id: "1",
		name: "Hardwood Stairs",
		images: hardwoodStairs,
		preview: "/assets/images/services/1.jpeg",
		description:
			"Let Martin’s Flooring help you with all of your Flooring Installation needs! Martin’s Flooring is registered in Pennsylvania as a Home Improvement Contractor, contractor number PA005901. Martin’s Flooring is also rated A+ with the Better Business Bureau.",
	},
	{
		id: "2",
		name: "Floor Maintenance & Cleaning",
		images: floorMaintenance,
		preview: "/assets/images/services/2.jpeg",
		description:
			"Cleaning your floors can be a daunting and never-ending task. Why not call the floor care specials at Martin’s Flooring to clean all of your carpets, tile, hardwoods, upholstery, area rugs, and more.",
	},
	{
		id: "3",
		name: "Luxury Vinyl Flooring",
		images: luxuryVinyl,
		preview: "/assets/images/services/3.jpg",
		description:
			"Sanding and refinishing your flooring is like getting a facelift for your floors. The floors look clean, fresh, smooth and it even gives you the ability to change the color.",
	},
];
