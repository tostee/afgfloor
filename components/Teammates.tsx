import Image from "next/image";
import img1 from "../assets/team/1.png";
import img2 from "../assets/team/2.png";
import img3 from "../assets/team/3.png";
import img4 from "../assets/team/4.png";

const teams = [
	{
		key: 1,
		imageUrl: img1,
		name: "Raciel Mendoza",
		job: "",
		info: "",
		github: "",
		twitter: "",
		instagram: "",
	},
	{
		key: 2,
		imageUrl: img2,
		name: "Alejandro Filgueiras",
		job: "",
		info: "",
		github: "",
		twitter: "",
		instagram: "",
	},
	{
		key: 3,
		imageUrl: img3,
		name: "René Filgueiras",
		job: "",
		info: "",
		github: "",
		twitter: "",
		instagram: "",
	},
	{
		key: 4,
		imageUrl: img4,
		name: "Adrián Filgueiras",
		job: "",
		info: "",
		github: "",
		twitter: "",
		instagram: "",
	},
];

export default function Teammates() {
	return (
		<div className="w-full bg-white px-4 py-20 flex justify-center">
			<div className="w-full max-w-page flex flex-col gap-6">
				<div className="w-full flex gap-4 container flex-wrap justify-between items-center mx-auto">
					<div>
						<h1 className="lg:text-6xl text-3xl text-center text-secundary font-extrabold pb-6 mx-auto">
							The Talented People Behind the Scenes of the Organization
						</h1>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
					{teams.map((t) => (
						<TeamCard key={t.key} user={t} />
					))}
				</div>
			</div>
		</div>
	);
}

const TeamCard = ({ user }: any) => {
	return (
		<div className="rounded shadow-md bg-gray-100 pt-20 pb-8 px-6 w-full flex flex-col items-center relative mt-16">
			<Image
				src={user.imageUrl}
				alt={user.name}
				width={128}
				height={128}
				className="w-32 h-32 rounded-full p-1 bg-gray-100 absolute top-0 left-1/2
				-translate-x-1/2 -translate-y-1/2"
			/>

			<div className=" text-secundary font-bold text-3xl text-center pb-1">
				{user.name}
			</div>

			<p className="text-secundary text-xl text-center">{user.job}</p>
			<p className="text-center text-secundary pt-3 font-normal">{user.info}</p>
		</div>
	);
};
