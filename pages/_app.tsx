import type { AppProps } from "next/app";
import Head from "next/head";
import { useState } from "react";
import Footer from "../components/Footer";
import ModalForm from "../components/ModalForm";
import Navbar from "../components/Navbar";
import "../styles/globals.scss";
import { NextSeo, LocalBusinessJsonLd } from "next-seo";
import { urlHome, urlServices } from "../constants";


function MyApp({ Component, pageProps }: AppProps) {
	const [visible, setVisible] = useState(false);

	return (
		<>
	<NextSeo
      title="AFGFLOOR"
	  
      description="By far our main specialty is the flooring business."
	  robotsProps={{
        nosnippet: true,
        notranslate: true,
        noimageindex: true,
        noarchive: true,
        maxSnippet: -1,
        maxImagePreview: 'none',
        maxVideoPreview: -1,
      }}
      
/>
<LocalBusinessJsonLd
  type="Flooring Enterprice"
  id={urlHome}
  name="AFGFLOOR INC"
  description="By far our main specialty is the flooring business, our team can amaze you with a state of the art installation job. From Laminate to Hard Wood Flooring, or Vinyl to Exotics, AFGFloor Flooring’s installation team will render a perfect job for you"
  url={urlHome}
  telephone="+19542748026"
  address={{
    streetAddress: '271 Northwest Blvd Miami FL 33126',
    addressLocality: 'Miami',
    addressRegion: 'FLD',
    postalCode: '95129',
    addressCountry: 'US',
  }}
  geo={{
    latitude: '25.7729493',
    longitude: '-80.3160661',
  }}
  
  openingHours={[
    {
      opens: '07:00',
      closes: '20:00',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
		'Sunday',
      ],
      validFrom: '2021-12-23',
      validThrough: '2025-04-02',
    },
    
  ]}
  rating={{
    ratingValue: '4.5',
    ratingCount: '3',
  }}
  review={[
    {
      author: 'Excelent Work',
      datePublished: '2021-05-04',
      name: 'A masterpiece of literature',
      reviewBody:
        'Would recommend 100% They recently did the installation for my laminate flooring. Adrian and crew were on time, professional and efficient. I already recommended them for another job',
      reviewRating: {
        
        ratingValue: '4',
      },
    },
    {
      author: 'Dany John',
      datePublished: '2022-06-15',
      name: 'A good prices.',
      reviewBody: "I needed someone to install laminate flooring for me and so I found these guys on Angie's List & they got my request and called me right away! I spoke with Christina, who manages all the appointments and quotes! She found me the best deal possible and started right away! It's my first time owning a home so they were super honest with me and even told me to go return stuff I bought from Home Depot because I over paid and they got me their own stuff for a much lower price!",
      reviewRating: {
        ratingValue: '4',
      },
    },
	{
		author: 'Mike Blake',
		datePublished: '2022-07-22',
		name: 'A good read.',
		reviewBody: "Excellent service !!! I had horrible carpet on my second story and stairs, and changing it to wood was the best decision !! Adrian was very friendly and understanding, the prices were good and the end result was even better! I recommend it 100%",
		reviewRating: {
		  ratingValue: '4',
		},
	  },
  ]}
  makesOffer={[
    {
      priceSpecification: {
        type: 'UnitPriceSpecification',
        priceCurrency: 'USD',
        price: '500-10000',
      },
      itemOffered: {
        name: 'Laminate Flooring',
        description:
          'By far our main specialty is the flooring business.',
      },
    },
    
  ]}
  areaServed={[
    {
      geoMidpoint: {
        latitude: '28.133333',
        longitude: ' -81.6316672',
      },
      geoRadius: '10000',
    },
   
  ]}
  action={{
    actionName: 'Laminate Flooring',
    actionType: 'ReviewAction',
    target: urlServices + '/3',
  }}
/>
	

			<ModalForm visible={visible} onChange={(toggle) => setVisible(toggle)} />

			<div className="flex flex-col font-quicksand bg-white min-h-screen">
				<Navbar onChange={(toggle: any) => setVisible(toggle)} />

				<main className="flex flex-col gap-4 w-full flex-1">
					<Component {...pageProps} openModal={() => setVisible(true)} />
				</main>

				<Footer />
			</div>
		</>
	);
}

export default MyApp;
