const Teammates = () => {
	const teams = [
		{
			key: 1,
			imageUrl: "/assets/images/team/1.png",
			name: "Raciel Mendoza",
			job: "asjdjasdja jasdasdj jasdasd",
			info: "holaaaaaa",
			github: "",
			twitter: "",
			instagram: "",
		},
		{
			key: 2,
			imageUrl: "/assets/images/team/2.png",
			name: "Alejandro Filgueiras",
			job: "asjdjasdja jasdasdj jasdasd",
			info: "holaaaaaa",
			github: "",
			twitter: "",
			instagram: "",
		},
		{
			key: 3,
			imageUrl: "/assets/images/team/3.png",
			name: "René Filgueiras",
			job: "asjdjasdja jasdasdj jasdasd",
			info: "holaaaaaa",
			github: "",
			twitter: "",
			instagram: "",
		},
		{
			key: 4,
			imageUrl: "/assets/images/team/4.png",
			name: "Adrián Filgueiras",
			job: "asjdjasdja jasdasdj jasdasd",
			info: "holaaaaaa",
			github: "",
			twitter: "",
			instagram: "",
		},
	];

	const TeamCard = ({ key, user }) => {
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
						<a href="#" className="mx-5">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="#718096"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-github"
								>
									<path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
								</svg>
							</div>
						</a>
						<a href="#" className="mx-5">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="#718096"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-twitter"
								>
									<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
								</svg>
							</div>
						</a>
						<a href="#" className="mx-5">
							<div>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width={24}
									height={24}
									viewBox="0 0 24 24"
									fill="none"
									stroke="#718096"
									strokeWidth="1.5"
									strokeLinecap="round"
									strokeLinejoin="round"
									className="feather feather-instagram"
								>
									<rect x={2} y={2} width={20} height={20} rx={5} ry={5} />
									<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
									<line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
								</svg>
							</div>
						</a>
					</div>
				</div>
			</div>
		);
	};
	return (
		<div className="w-full bg-white px-4 py-20 flex justify-center">
			<div className="w-full max-w-[1024px] flex flex-col gap-6">
				<div className="w-full max-w-[1024px] flex gap-4 container flex-wrap justify-between items-center mx-auto">
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
