import {
	contactAddress,
	contactEmail,
	contactPhone,
	contactPhoneDisplay,
	
} from "../constants";
import { Seocontact } from "../SEO/appSEO";

const Contactus = () => {
	return (
		<>
		<Seocontact/>
		<div className="flex justify-center pt-navbar w-full px-4">
			<div className="max-w-page flex flex-col gap-8 my-8">
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
		</>
	);
};

const ContactField = ({ label, field }: any) => {
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
