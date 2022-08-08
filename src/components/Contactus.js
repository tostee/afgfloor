import {
	contactAddress,
	contactEmail,
	contactPhone,
	contactPhoneDisplay,
} from "../utils/constants";

const Contactus = () => {
	return (
		<div className="flex justify-center pt-header w-full px-4">
			<div className="max-w-screen-xl flex flex-col gap-8 my-8">
				<ContactField label="Address" field={contactAddress} />

				<ContactField
					label="Email"
					field={<a href={`mailto:${contactEmail}`}>{contactEmail}</a>}
				/>

				<ContactField
					label="Phone number"
					field={
						<a
							className=" text-secundary md:text-xl leading-8 tracking-wider"
							href={`tel:${contactPhone}`}
						>
							{contactPhoneDisplay}
						</a>
					}
				/>
			</div>
		</div>
	);
};

const ContactField = ({ label, field }) => {
	return (
		<div className="flex flex-col">
			{label && (
				<h2 className="text-xl md:text-2xl text-secundary font-semibold">
					{label}
				</h2>
			)}

			<h2 className="text-secundary md:text-xl leading-8 tracking-wider mt-2">
				{field}
			</h2>
		</div>
	);
};

export default Contactus;
