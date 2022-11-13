import { NextSeo, LocalBusinessJsonLd, CorporateContactJsonLd } from "next-seo";
import { urlAboutus,
    urlContact,
    urlGallery,
    urlHome,
    urlServices } from "../constants";

    export const AppSeo = () =>{
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
            </>
        )
    }

    export const Seocontact = () =>{
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
	<CorporateContactJsonLd
      url={urlHome}
      logo="/images/home.jpg"
      contactPoint={[
        {
          telephone: '+1-954-274-8026',
          contactType: 'customer service',
          email: 'afgfloorexpertsinc@gmail.com',
          areaServed: 'US',
          availableLanguage: ['English', 'Spanish'],
        },
        
      ]}/>
      </>      
         
        )
    }

    export const Seoabout = () =>{
        return(
            <>
            <NextSeo
		title="ABOUT"
		description="By far our main specialty is the flooring business."
      openGraph={{
        type: 'website',
        url: urlAboutus,
        title: 'Afgfloor About Us',
        description: 'By far our main specialty is the flooring business, our team can amaze you with a state of the art installation job.',
        images: [
          {
            url: '/images/aboutus/front.jpg',
            width: 640,
            height: 480,
            alt: 'About Image',
          },
          
        ],
      }}
    /></>
        )
    }

    export const Seoservices = () =>{
        return(
            <>
            <NextSeo
		title="SERVICES"
		description="Services provided by our company."
      openGraph={{
        type: 'website',
        url: urlServices,
        title: 'Afgfloor Services',
        description: 'Choose a service, AFGFLOOR is pleased to work for you.',
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
            </>
        )
    }

    export const Seogallery = () =>{
        return (
            <NextSeo
  title="GALLERY"
  description="Some pics of the company's work."
      openGraph={{
        type: 'website',
        url: urlGallery,
        title: 'Afgfloor Gallery',
        description: "Some pics of the company's work.",
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
        )
    }

    export const Seohome = () => {
        return (
            <>
            <NextSeo
		
        openGraph={{
          type: 'website',
          url: urlHome,
          title: 'Afgfloor Main Page',
          description: 'Your comfort is our priority.',
          images: [
            {
              url: '/images/home.jpg',
              width: 800,
              height: 600,
              alt: 'Indoor Image',
            },
            
          ],
        }}
      />
            </>
        )
    }

    export const Seoservice = (service:any) =>{
        console.log(service)
        return (
            <>
     <NextSeo
      title={service.name}
	  
      description={service.description}
    
	  openGraph={{
        type: 'website',
        url: '',
        title: service.name,
        description: service.description,
        images: [
          {
            url: service.preview,
            width: 800,
            height: 600,
            alt: service.name + ' Image',
          },
          
        ],
      }}
	  
      
/>
            </>
        )
    }