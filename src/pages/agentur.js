import Head from 'next/head'
import {Inter} from 'next/font/google'
import Banner from '../components/common/Banner';
import WhoAreWe from '../components/sections/WhoAreWe';
import PostInMagazine from '../components/sections/PostInMagazine';
import Team from '../components/sections/Team';
import Clients from '../components/sections/Clients';
import Testimonials from '../components/sections/Testimonials';
import TopServices from '../components/sections/TopServices';
import meeting from '../assets/images/meeting7.png';
import SocialProof from "../components/sections/SocialProof";

import topServicesSectionData from '../data/topServicesSectionData';

const inter = Inter({subsets: ['latin']})




const pageTitle = 'Über SH Digital die Firma | SH Digital'
const metaDescription = 'Erfahren Sie mehr über SH Digital, das Team, die Methoden und die Visionen.'


export default function AboutUs() {
    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="about-us">
                <Banner arrow={true} bg={meeting} gradientClass="bg-gradient" arrowLight={true}>
                    <h1 className="banner-heading-lg text-white">ÜBER SH DIGITAL</h1>
                </Banner>

                <WhoAreWe />
                <PostInMagazine />
                <Team />
                <Clients />
                <SocialProof />
                <TopServices data={topServicesSectionData} />
            </main>
        </>
    )
}
