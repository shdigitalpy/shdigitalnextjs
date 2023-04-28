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

import featuresSectionData from "../data/featuresSectionData";
import successStoriesSectionData from "../data/successStoriesSectionData";
import areaOfExpertiseSectionData from "../data/areaOfExpertiseSectionData";
import advantagesAndProcessSectionData from "../data/advantagesAndProcessSectionData";
import FAQSectionData from "../data/FAQSectionData";
import knowledgeOfSEOSectionData from "../data/knowledgeOfSEOSectionData";

const inter = Inter({subsets: ['latin']})

export default function Home() {

    return (
        <>
            <Head>
                <title>SH Digital</title>
                <meta name="description" content="SH Digital"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Hero/>
                <ContentWithVideo/>
                <CardGrid data={featuresSectionData} />
                <CardGridWithImage data={successStoriesSectionData} />
                <ContentStrip title="Erscheinen, wenn Personen nach Ihrem Angebot suchen?" btnTitle="Anfrage senden" btnUrl="/" />
                <AccordionGrid data={areaOfExpertiseSectionData} />
                <ImageAndCollapsibleContent data={advantagesAndProcessSectionData} />
                <FAQ data={FAQSectionData} />
                <ContentListWithImage data={knowledgeOfSEOSectionData} />
            </main>
        </>
    )
}
