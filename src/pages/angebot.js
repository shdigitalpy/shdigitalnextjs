import Head from 'next/head'
import {Inter} from 'next/font/google'
import Image from 'next/image';
import Banner from '../components/common/Banner';
import ImageContentWithCTA from '../components/sections/ImageContentWithCTA';
import CardGrid from "../components/sections/CardGrid2";
import Evidence from "../components/sections/Evidence";
import WorkWithUs from "../components/sections/WorkWithUs";
import phoneInHand from '../assets/images/phone-in-hand.png';
import googleLogo from '../assets/images/google-logo.png';

import businessGrowthSectionData from '../data/businessGrowthSectionData';
import topPerformanceSectionData from '../data/topPerformanceSectionData';

const inter = Inter({subsets: ['latin']})

export default function Services() {
    return (
        <>
            <Head>
                <title>Angebot | SH Digital</title>
                <meta name="description" content="SH Digital - Services"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="services-page">
                <Banner arrow={true} bg={phoneInHand}>
                    <h1 className="banner-heading-lg text-white">ANGEBOT</h1>
                    <div className="sub-heading-wrapper flex items-center">
                        <p className="sub-heading text-white">BEI</p>
                        <Image src={googleLogo} alt="google logo" className="sub-heading-image" />
                        <p className="sub-heading text-white">OOGLE AUF SEITE 1</p>
                    </div>
                </Banner>

                <ImageContentWithCTA data={businessGrowthSectionData} />
                <CardGrid data={topPerformanceSectionData} />
                <Evidence />
                <WorkWithUs />
            </main>
        </>
    )
}
