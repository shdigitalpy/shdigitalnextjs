import '@/styles/globals.scss'
import Head from 'next/head'
import MainLayout from "../layouts/Main";
import {AnimatePresence} from "framer-motion"
import { ReCaptchaProvider} from 'next-recaptcha-v3';
import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from 'react-icons/fi';
import { useRouter } from 'next/router';

const progress = new ProgressBar({
  size: 2,
  color: "#1B2431",
  className: "bar-of-progress",
  delay: 100,
});


Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);


const site = "https://www.sh-digital.ch";



export default function App({Component, pageProps}) {

  
    const canonicalURL1 = site + useRouter().pathname;
    const canonicalURL = canonicalURL1 ? canonicalURL1 : undefined

    return (

        <MainLayout>
            <AnimatePresence>
            <Head>
      
        <link rel="canonical" href={canonicalURL} />
             
        
        </Head>
                <ReCaptchaProvider strategy="lazyOnload" reCaptchaKey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}>
                    <Component {...pageProps} />
                </ReCaptchaProvider>
               <ScrollToTop smooth component={<p  style={{ backgroundColor:"FF7A00", display: "flex", justifyContent: "center", alignItems:"center"}}><FiArrowUp /></p>} />
            </AnimatePresence>
        </MainLayout>
    )
}
