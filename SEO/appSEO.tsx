import { NextSeo, LocalBusinessJsonLd, CorporateContactJsonLd } from 'next-seo';
import { baseUrl } from '../constants';
import Head from 'next/head';

export const AppSeo = () => {
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
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
    </>
  );
};

export const SeoContact = () => {
  return (
    <>
      <NextSeo
        title="CONTACT"
        description="Get in touch with our team."
        openGraph={{
          type: 'website',
          url: `${baseUrl}/contact-us`,
          title: 'Afgfloor Contact Us',
          description: 'Get in touch with our team.',
          images: [
            {
              url: '/images/contact.png',
              width: 1200,
              height: 603,
              alt: 'AFGFLOOR Contact Image',
            },
          ],
        }}
      />
      <CorporateContactJsonLd
        url={`${baseUrl}/contact-us`}
        logo="/images/home.jpg"
        contactPoint={[
          {
            telephone: '+1-954-274-8026',
            contactType: 'customer service',
            email: 'afgfloorexpertsinc@gmail.com',
            areaServed: 'US',
            availableLanguage: ['English', 'Spanish'],
          },
        ]}
      />
    </>
  );
};

export const SeoAbout = () => {
  return (
    <>
      <NextSeo
        title="ABOUT"
        description="Learn about AFGFLOOR INC and its main goal."
        openGraph={{
          type: 'website',
          url: `${baseUrl}/about-us`,
          title: 'Afgfloor About Us',
          description: 'Learn about AFGFLOOR INC and its main goal.',
          images: [
            {
              url: '/images/aboutus/front.jpg',
              width: 1200,
              height: 603,
              alt: 'About Image',
            },
          ],
        }}
      />
    </>
  );
};

export const SeoServices = () => {
  return (
    <>
      <NextSeo
        title="SERVICES"
        description="Services provided by our company."
        openGraph={{
          type: 'website',
          url: `${baseUrl}/services`,
          title: 'Afgfloor Services',
          description: 'Choose a service, AFGFLOOR is pleased to work for you.',
          images: [
            {
              url: '/images/home.jpg',
              width: 1200,
              height: 603,
              alt: 'AFGFLOOR Services',
            },
          ],
        }}
      />
    </>
  );
};

export const SeoGallery = () => {
  return (
    <NextSeo
      title="GALLERY"
      description="Some pics of the company's work."
      openGraph={{
        type: 'website',
        url: `${baseUrl}/gallery`,
        title: 'Afgfloor Gallery',
        description: "Some pics of the company's work.",
        images: [
          {
            url: '/images/gallery/10.jpg',
            width: 1200,
            height: 603,
            alt: 'Indoor',
          },
        ],
      }}
    />
  );
};

export const SeoHome = () => {
  return (
    <>
      <NextSeo
        openGraph={{
          type: 'website',
          url: baseUrl,
          title: 'Afgfloor Main Page',
          description:
            'Everything about the wood flooring business is here on AFGFLOOR INC.',
          images: [
            {
              url: '/images/home.jpg',
              width: 1200,
              height: 603,
              alt: 'Indoor Image',
            },
          ],
        }}
      />
      <LocalBusinessJsonLd
        type="Flooring Enterprice"
        id={baseUrl}
        name="AFGFLOOR INC"
        description="Everything about the wood flooring business is here on AFGFLOOR INC"
        url={baseUrl}
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
            reviewBody:
              "I needed someone to install laminate flooring for me and so I found these guys on Angie's List & they got my request and called me right away! I spoke with Christina, who manages all the appointments and quotes! She found me the best deal possible and started right away! It's my first time owning a home so they were super honest with me and even told me to go return stuff I bought from Home Depot because I over paid and they got me their own stuff for a much lower price!",
            reviewRating: {
              ratingValue: '4',
            },
          },
          {
            author: 'Mike Blake',
            datePublished: '2022-07-22',
            name: 'A good read.',
            reviewBody:
              'Excellent service !!! I had horrible carpet on my second story and stairs, and changing it to wood was the best decision !! Adrian was very friendly and understanding, the prices were good and the end result was even better! I recommend it 100%',
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
          target: `${baseUrl}/services/3`,
        }}
      />
    </>
  );
};

export const SeoService = ({ service }: any) => {
  return (
    <>
      <NextSeo
        title={service.name}
        description={`Learn more about our service ${service.name}`}
        openGraph={{
          type: 'website',
          url: `${baseUrl}/services/${service.id}`,
          title: service.name,
          description: `Learn more about our service ${service.name}`,
          images: [
            {
              url: service.preview,
              width: 600,
              height: 800,
              alt: `${service.name} Image`,
            },
          ],
        }}
      />
    </>
  );
};
