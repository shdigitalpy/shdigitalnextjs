import Head from 'next/head'
import {Inter} from 'next/font/google'
import Banner from '../../components/common/Banner';
import SEOAnalysisInvite from "../../components/sections/SEOAnalaysisInvite";
import AnalysisFactors from "../../components/sections/AnalysisFactors";
import SocialProof from "../../components/sections/SocialProof";
import ContactForm from "../../components/sections/ContactForm";
import {useRouter} from "next/router";

const inter = Inter({subsets: ['latin']})


export default function BlogCTADetails() {

    const router = useRouter();

    return (
        <>
            <Head>
                <title>Onpage Analyse | SH Digital</title>
                <meta name="description" content={`Onpage Analyse | SH Digital`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="blog-cta-details">
                <Banner arrow={true} gradientClass="bg-gradient">
                    <h1 className="banner-heading-lg text-white">ONPAGE SEO ANALYSE</h1>
                </Banner>

                <SEOAnalysisInvite />
                <AnalysisFactors />
                <SocialProof />
                <ContactForm pathname={router.asPath} />
            </main>
        </>
    )
}
