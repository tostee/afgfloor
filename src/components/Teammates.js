const Teammates = () => {
	const teams = [
		{
			key: 1,
			imageUrl: "/assets/images/team/1.png",
			name: "Raciel Mendoza",
			job: "",
			info: "",
			github: "",
			twitter: "",
			instagram: "",
		},
		{
			key: 2,
			imageUrl: "/assets/images/team/2.png",
			name: "Alejandro Filgueiras",
			job: "",
			info: "",
			github: "",
			twitter: "",
			instagram: "",
		},
		{
			key: 3,
			imageUrl: "/assets/images/team/3.png",
			name: "René Filgueiras",
			job: "",
			info: "",
			github: "",
			twitter: "",
			instagram: "",
		},
		{
			key: 4,
			imageUrl: "/assets/images/team/4.png",
			name: "Adrián Filgueiras",
			job: "",
			info: "",
			github: "",
			twitter: "",
			instagram: "",
		},
	];

	const TeamCard = ({ user }) => {
		return (
			<div className="flex flex-col items-center">
				<div className="h-32 w-32 p-1 -mb-16 bg-gray-100 rounded-full relative">
					<img
						src={user.imageUrl}
						alt="omage"
						className="rounded-full object-cover h-full w-full shadow-md"
					/>
				</div>
				<div className="rounded overflow-hidden shadow-md bg-gray-100 pt-16 px-6 w-full flex flex-col items-center">
					<div className=" text-secundary font-bold text-3xl text-center pb-1">
						{user.name}
					</div>
					<p className="text-secundary text-xl text-center">{user.job}</p>
					<p className="text-center text-secundary pt-3 font-normal">
						{user.info}
					</p>
					<div className="w-full flex justify-center pt-5 pb-5">
						{/* TODO: remove lint rule when href are valid */}
						{/* eslint-disable-next-line */}
						<a href="#" className="mx-5">
							<div></div>
						</a>

						{/* eslint-disable-next-line */}
						<a href="#" className="mx-5">
							<div></div>
						</a>

						{/* eslint-disable-next-line */}
						<a href="#" className="mx-5">
							<div></div>
						</a>
					</div>
				</div>
			</div>
		);
	};

	return (
		<div className="w-full bg-white px-4 py-20 flex justify-center">
			<div className="w-full max-w-screen-xl flex flex-col gap-6">
				<div className="w-full flex gap-4 container flex-wrap justify-between items-center mx-auto">
					<div>
						<h1 className="lg:text-6xl text-3xl text-center text-secundary font-extrabold pb-6 mx-auto">
							The Talented People Behind the Scenes of the Organization
						</h1>
					</div>
				</div>
				<div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-start gap-x-6 gap-y-12">
					{teams.map((t) => (
						<TeamCard key={t.key} user={t} />
					))}
				</div>
			</div>
		</div>
	);
};
export default Teammates;
