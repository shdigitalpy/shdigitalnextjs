import Head from 'next/head'
import {Inter} from 'next/font/google'
import Image from 'next/image';
import ImageContentPot from '../components/sections/ImageContentPot';
import potentialAnalyseSectionData from '../data/potentialAnalyseSectionData';
import Banner from '../components/common/Banner';
import phoneInHand from '../assets/images/phone-in-hand.png';
import PotForm from "../components/sections/PotForm";

import topPerformanceSectionData from '../data/topPerformanceSectionData';

const inter = Inter({subsets: ['latin']})

export default function Contact() {
    return (
        <>
            <Head>
                <title>Kontakt | SH Digital</title>
                <meta name="description" content="SH Digital - Services"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                
            </Head>
            <main className="services-page">
                <Banner arrow={true} bg={phoneInHand}>
                    <h1 className="banner-heading-lg text-white">Jetzt loslegen</h1>
                    <div className="sub-heading-wrapper flex items-center">
                        
                       
                        
                    </div>
                </Banner>

                <ImageContentPot data={potentialAnalyseSectionData} />

                <PotForm />
               
            </main>
        </>
    )
}
