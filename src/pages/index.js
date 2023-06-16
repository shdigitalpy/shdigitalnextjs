import Head from 'next/head'
import {Inter} from 'next/font/google'
import Hero from "../components/sections/Hero1";
import ContentWithVideo from "../components/sections/ContentWithVideo1";
import CardGrid from "../components/sections/CardGrid1";
import CardGridWithImage from "../components/sections/CardGridWithImage1";
import ContentStrip from "../components/sections/ContentStrip";
import AccordionGrid from "../components/sections/AccordionGrid1";
import ImageAndCollapsibleContent from "../components/sections/ImageAndCollapsibleContent";
import FAQ from "../components/sections/FAQ_wovideo";
import ContentListWithImage from "../components/sections/ContentListWithImage1";

import painsSectionData from "../data/painsSectionData";
import successStoriesSectionData from "../data/successStoriesSectionData";
import areaOfExpertiseSectionData from "../data/areaOfExpertiseSectionData";
import advantagesAndProcessSectionData from "../data/advantagesAndProcessSectionData";
import FAQSectionData from "../data/FAQSectionData";
import knowledgeOfSEOSectionData from "../data/knowledgeOfSEOSectionData";

const inter = Inter({subsets: ['latin']})


const pageTitle = 'Spezialisierte SEO Agentur in der Schweiz | SH Digital'
const metaDescription = 'Unsere SEO Agentur Schweiz verbessert die Google Rankings, damit Ihre Webseite nachhaltige ✪Top-Ergebnisse erzielt.'

export default function Home() {

    return (
        <>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content={metaDescription}/>
                
            </Head>
            <main>
                <Hero/>
                <ContentWithVideo/>
                <CardGrid data={painsSectionData} />
                <CardGridWithImage data={successStoriesSectionData} />
                <ContentStrip title="Erscheinen, wenn Personen nach Ihrem Angebot suchen?" btnTitle="Anfrage senden" btnUrl="/contact" />
                <AccordionGrid data={areaOfExpertiseSectionData} />
                <ImageAndCollapsibleContent data={advantagesAndProcessSectionData} />
                <FAQ data={FAQSectionData} />
                <ContentListWithImage data={knowledgeOfSEOSectionData} />
            </main>
        </>
    )
}
