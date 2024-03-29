export const galleryImages: string[] = Array.from(
	{ length: 49 },
	(_, i: number) => `/images/gallery/${i + 1}.jpg`
);

export const services = [
	{
		id: "1",
		name: "Hardwood Stairs",
		preview: "/images/services/1.jpg",
		description: `Hardwood stairs offer and ensure all the benefits and advantages of a wooden floor. First of all, hardwood stairs are very beautiful, elegant, and stylish. They can easily suit a number of interior designs, from traditional and classic where they are in their natural habitat to cutting-edge modern where they can create an intriguing juxtaposition between modern and classic styles. In addition, hardwood stairs are offered in a great variety of styles, wood species, designs, colours, textures, and grades, just like wooden floors.`,
		images: Array.from(
			{ length: 6 },
			(_, i: number) => `/images/services/stairs/${i + 1}.jpg`
		),
	},
	{
		id: "2",
		name: "Floor Maintenance & Cleaning",
		preview: "/images/services/2.jpg",
		description: `There are four major steps in the maintenance process: Stripping, Scrubbing and Cleaning, Buffing and Polishing, and Burnishing. Understanding each step and the specific floor pads involved is crucial to achieving the best appearance and extending the life of the floor.`,
		images: Array.from(
			{ length: 6 },
			(_, i: number) => `/images/services/maintenance/${i + 1}.jpg`
		),
	},
	{
		id: "3",
		name: "Laminate Flooring",
		preview: "/images/services/3.jpg",
		description: `Laminate flooring comes in a significant variety of styles, colors, and patterns, so the design possibilities with laminate are practically limitless. Laminate stands as such a versatile flooring type because of its composition: laminate planks or tiles are made of layers of plywood or compressed fiber backing topped off with a photograph covered with a plastic coating. The fact that realistic photography is incorporated into this flooring means that laminate can be visually indistinguishable from real wood as well as stone, ceramic tile, and stained concrete. The technology of laminate flooring enables you to imitate most any kind of flooring in your home for a much lower price. Furthermore, the feel of laminate is a major plus: its soft, warm surface provides a corresponding experience underfoot to hardwood and an improved experience over ceramic or stone tile.`,
		images: Array.from(
			{ length: 6 },
			(_, i: number) => `/images/services/luxury/${i + 1}.jpg`
		),
	},
];
