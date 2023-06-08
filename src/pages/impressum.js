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
import FramerMotionAnimation from '../components/common/FramerMotionAnimation';

const inter = Inter({subsets: ['latin']})

export default function Impressum() {
    return (
        <>
            <Head>
                <title>Impressum | SH Digital</title>
                <meta name="description" content={`Das Impressum von SH Digital - Sandro Huber ist Geschäftsführer von SH Digital`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="services-detail">
                <Banner arrow={true} bg={holdingLaptop}>
                    <h1 className="banner-heading-lg text-white">
                        Impressum

                    </h1>
                    
                </Banner>

                <br /><br />
                 <section id="impressum" className="section-wrapper keywords pt-50">
                    <div className="container">
                        
                        <p>
        <p>
    <strong>Kontakt-Adresse</strong></p>

    <p>SH Digital GmbH<br/>Maurerstrasse 8<br/>8500 Frauenfeld<br/>Schweiz</p><br/>

    <strong>E-Mail</strong><br/>agentur@sh-digital.ch</p><br/><p>

    <strong>Vertretungsberechtigte Person</strong></p>Sandro Huber, Gesch&auml;ftsf&uuml;hrer<br/><br/><p>

    <strong>Handelsregister-Nr.</strong><p>CH-440.4.037.456-2</p><br/><p>

    <strong>Handelsregister</strong><p><a href="https://www.moneyhouse.ch/de/company/sh-digital-gmbh-20923730911" title="SH Digital GmbH Moneyhouse">Moneyhouse</a></p><br/><p>
    
    <strong>Haftungsausschluss</strong></p>Der Autor &uuml;bernimmt keinerlei Gew&auml;hr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit, Aktualit&auml;t, Zuverl&auml;ssigkeit und Vollst&auml;ndigkeit der Informationen.</p><p>Haftungsanspr&uuml;che gegen den Autor wegen Sch&auml;den materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der ver&ouml;ffentlichten Informationen, durch Missbrauch der Verbindung oder durch technische St&ouml;rungen entstanden sind, werden ausgeschlossen.</p><p>Alle Angebote sind unverbindlich. Der Autor beh&auml;lt es sich ausdr&uuml;cklich vor, Teile der Seiten oder das gesamte Angebot ohne besondere Ank&uuml;ndigung zu ver&auml;ndern, zu erg&auml;nzen, zu l&ouml;schen oder die Ver&ouml;ffentlichung zeitweise oder endg&uuml;ltig einzustellen.</p><br/><br/><p>

    <strong>Haftungsausschluss f&uuml;r Links</strong></p><p>Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Es wird jegliche Verantwortung f&uuml;r solche Webseiten abgelehnt. Der Zugriff und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr des jeweiligen Nutzers.</p><br/><br/><p>

    <strong>Urheberrechte</strong></p><p>Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser Website, geh&ouml;ren ausschliesslich <strong>Sandro Huber</strong> oder den speziell genannten Rechteinhabern. F&uuml;r die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung des Urheberrechtstr&auml;gers im Voraus einzuholen.</p><br/>
    </p>
                    </div>
                </section>

                

                
            </main>
        </>
    )
}
