import Head from 'next/head'
import {Inter} from 'next/font/google'
import Banner from '../components/common/Banner';
import CustomerExpectation from '../components/sections/CustomerExpectation';
import OurBenefits from '../components/sections/OurBenefits';
import Testimonials from '../components/sections/Testimonial2';
import Evidence from '../components/sections/Evidence';
import FAQ from '../components/sections/FAQ_wovideo';
import holdingLaptop from '../assets/images/holding-laptop-3.png';
import emptyHall from '../assets/images/empty-hall.png';
import faqSeoSectionData from '../data/faqSeoSectionData';

const inter = Inter({subsets: ['latin']})

export default function MonatSEO() {
    return (
        <>
            <Head>
                <title>Monatliche SEO Betreuung für Firmen | SH Digital</title>
                <meta name="description" content={`Die monatliche SEO Betreuung von SH Digital verbessert Ihre Rankings und führt langfristig zu mehr Umsatz.`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="services-detail">
                <Banner arrow={true} bg={holdingLaptop}>
                    <h1 className="banner-heading-lg text-white">
                        SEO Betreuung <br />für Firmen

                    </h1>
                    <p className="description text-white">
                        Die monatliche SEO Betreuung für Firmen hilft Unternehmern und Marketingexperten bei Google ganz nach oben zu kommen.
                    </p>
                </Banner>

                <CustomerExpectation />
                <OurBenefits />
                <Testimonials />
                <Evidence img={emptyHall} fullImg={true} className="bg-gray pt-0" />
                <FAQ data={faqSeoSectionData} />
            </main>
        </>
    )
}
