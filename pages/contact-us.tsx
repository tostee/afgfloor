import {
	contactAddress,
	contactEmail,
	contactPhone,
	contactPhoneDisplay,
	urlContact,
} from "../constants";
import { NextSeo } from "next-seo";

const Contactus = () => {
	return (
		<>
		<NextSeo
		title="CONTACT"
		description= 'Get in touch with our team.'

      openGraph={{
        type: 'website',
        url: urlContact,
        title: 'Afgfloor Contact Us',
        description: 'Get in touch with our team.',
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
