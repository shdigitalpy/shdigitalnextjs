import Link from 'next/link';
import Head from 'next/head';
import {Inter} from 'next/font/google';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../components/common/Banner';
import BreadCrumb from '../../components/common/BreadCrumb';
import WhatGoogleSays from '../../components/sections/WhatGoogleSays';
import ContentWithVideo from '../../components/sections/ContentWithVideo2';
import FramerMotionAnimation from '../../components/common/FramerMotionAnimation';
import ListItems from '../../components/common/ListItems';
import CollapsibleList from "../../components/sections/CollapsibleList";
import FAQ from "../../components/sections/FAQSEO";
import thumbnail from '../../assets/images/dummy-thumbnail.png';
import seoImportance from '../../assets/images/seo/seo-importance.png';
import seoWork from '../../assets/images/seo/how-seo-work.png';
import keywords1 from '../../assets/images/seo/keywords-1.png';
import keywords2 from '../../assets/images/seo/keywords-2.png';
import keywords3 from '../../assets/images/seo/keywords-3.png';
import holdingLaptop from '../../assets/images/holding-laptop-3.png';
import agencyImage from '../../assets/images/girl-avatar.png';
import twitterIcon from '../../assets/icons/twitter-white.svg';
import facebookIcon from '../../assets/icons/facebook-white.svg';
import checkCircleIcon from '../../assets/icons/check-circle-orange.svg';
import doubleArrowIcon from '../../assets/images/sharp-double-arrow-down.svg';
import peopleIcon from '../../assets/icons/people.svg';
import contentWritingIcon from '../../assets/icons/content-writing.svg';
import timerIcon from '../../assets/icons/timer.svg';
import linkIcon from '../../assets/icons/link.svg';
import marketAnalysisIcon from '../../assets/icons/market-analysis.svg';
import domainIcon from '../../assets/icons/domain.svg';
import declineIcon from '../../assets/icons/decline.svg';
import hourglassIcon from '../../assets/icons/hourglass.svg';
import customerReviewIcon from '../../assets/icons/customer-review.svg';
import doubleQuotesIcon from '../../assets/icons/double-quotes.svg';
import sandro from '../../assets/images/blog/sandro.png';
import wasistseo from '../../assets/images/seo/was-ist-seo.jpg';

import onpageOptimizationSectionData from '../../data/onpageOptimizationSectionData';
import offpageOptimizationSectionData from '../../data/offpageOptimizationSectionData';
import faqSeoSectionData from '../../data/faqSeoSectionData';

const inter = Inter({subsets: ['latin']})

export default function BlogPost() {
    return (
        <>
            <Head>
                <title>SEO einfach erklärt (Guide) | SH Digital</title>
                <meta name="description" content="Alles rund um Suchmaschinenoptimierung im 2022. Der Guide hilft bei allen wichtigen Themen rund um ★SEO"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="what-is-seo">
                <Banner arrow={false} bg={holdingLaptop} className="post-banner">
                    <BreadCrumb category={post.category} categoryUrl={post.categoryUrl} post={post} />
                    <h1 className="banner-heading-md text-white uppercase">{post.title}</h1>
                    <div className="author-wrapper">
                        <Image src={post.authorImage} alt={post.author} className="agency-image" />
                        <div className="details-wrapper">
                            <p className="agency-name">{post.author}</p>
                            <div className="date-time-wrapper">
                                <p className="date">{post.date}</p> ·
                                <p className="read-time">{post.readingTime}</p>
                            </div>
                            <div className="social-wrapper">
                                Teilen :
                                <div className="social-links-wrapper">
                                    <Link href={`https://twitter.com/intent/tweet?url=${post.slug}&text=${post.title}`}>
                                        <Image src={twitterIcon} alt="twitter" className="social-icon" />
                                    </Link>
                                    <Link href={`https://www.facebook.com/sharer.php?u=${post.slug}`}>
                                        <Image src={facebookIcon} alt="facebook" className="social-icon" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </Banner>

                <WhatGoogleSays post={post} />

                <ContentWithVideo id={post.videoID} title={post.videoTitle} className="bg-gray"
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}/>


                <section className="section-wrapper">
                    <div className="container">
                        <div className="grid md:grid-cols-2 title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title">
                                <div>Warum ist SEO für mein</div>
                                <div>Unternehmen wichtig</div>
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper bg-gray">
                                <Image src={seoImportance} alt="img" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }} >
                                <p className="desc-sm">Heutzutage ist es so, dass der Großteil der Menschen seine Informationen online über Suchmaschinen beschafft. Insbesondere, wenn konkrete Themen oder Produkte recherchiert werden sollen, sind die Suchmaschinen die ersten und wichtigsten Anlaufpunkte.
Prozentzahlen zu der Nutzung des Internets in der Schweiz legen diese Fakten dar:</p>

                                <ListItems items={seoImportanceListItems} />
                                <br />
                                { smallSource ? <small> {smallSource} </small> :  "" }
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-100 md:mt-0">
                            Visibility on the Internet is therefore usually the basis for successful customer contact. No
                            matter how practical, high-quality or new a product or service is - if a company is not
                            found by potential customers in the first place, no interest in buying can be aroused. The
                            intensive comparison and scouring of several pages of the search engine is definitely over.
                            Search engine marketing is therefore the most important way to win online users for your own
                            website.If a user is looking for a specific topic or product, then you know that he wants to
                            derive a lot of personal benefit from it. Typing different keyword variants and refinements
                            in the topic confirm the high level of self-interest. So there is a high probability that
                            they will later subscribe to a newsletter or make a purchase online.Finally, search engine
                            marketing has the advantage that it is quite sustainable if it has been set up
                            professionally. This means that a position in the Google ranking that has been achieved for
                            a search term usually remains stable.</FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            <h4 className="content-title font-medium">
                                Basics: An ongoing process
                            </h4>
                            <p className="desc-md">
                                Search engine optimization is not a one-off process that involves changing a few
                                things about a website. It is important to regularly update content or create new
                                content. Experience shows that the search engines evaluate new qualitative content
                                as a positive signal for their own website.In addition, the search engines are
                                constantly being modernized by its engineers, which is also shown by the latest
                            core updates of the Google index (adjustment of the search algorithm).
                                The websites must be adapted accordingly on an ongoing basis and at the latest
                                when such updates are launched. For these reasons, ongoing adjustments are required
                                for a high search engine ranking .
                            </p>
                        </FramerMotionAnimation>
                    </div>
                </section>

                <section className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Wie funktioniert SEO
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="image-wrapper p-0 bg-gray">
                                <Image src={seoWork} alt="img" className="main-image" />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-sm mb-15">Zunächst ist es für Interessierte vermutlich beruhigend zu
                                    wissen, dass es nicht in jedem Fall darum gehen muss, eine Webseite oder einen
                                    Online-Shop von Grund auf zu erneuern. Tatsächlich können bei guter Ausgangslage
                                    häufig kleinere aufeinanderfolgende funktionelle und inhaltliche Änderungen zum
                                    Erfolg führen. Es handelt sich dann um Verbesserungen, die aufeinander aufbauen
                                    und in ihrer Gesamtheit die Erfahrungen eines Nutzers, der auf einer Webseite
                                    navigiert, verbessern sollen.</p>
                                <p className="desc-sm mb-0">Neben der Verbesserung der Position in den Suchresultaten ist
                                    ein weiteres Ziel die Optimierung des Erscheinungsbildes des sogenannten
                                    Snippets. Ein Snippet (übersetzt: Schnipsel) ist die Kurzzusammenfassung
                                    einer Website. Es zeigt die Webseiten-URL, einen Title-Tag und die
                                    Meta-Beschreibung, ein sehr wichtiges und unterschätztes Tool.</p>
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                            Visibility on the Internet is therefore usually the basis for successful customer contact. No
                            matter how practical, high-quality or new a product or service is - if a company is not
                            found by potential customers in the first place, no interest in buying can be aroused. The
                            intensive comparison and scouring of several pages of the search engine is definitely over.
                            Search engine marketing is therefore the most important way to win online users for your own
                            website.If a user is looking for a specific topic or product, then you know that he wants to
                            derive a lot of personal benefit from it. Typing different keyword variants and refinements
                            in the topic confirm the high level of self-interest. So there is a high probability that
                            they will later subscribe to a newsletter or make a purchase online.Finally, search engine
                            marketing has the advantage that it is quite sustainable if it has been set up
                            professionally. This means that a position in the Google ranking that has been achieved for
                            a search term usually remains stable.</FramerMotionAnimation>
                    </div>
                </section>

                <section className="section-wrapper">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Was ist eine SEO-Analyse
                            </FramerMotionAnimation>
                            <Image src={doubleArrowIcon} alt="arrows" className="ml-auto double-arrow-art" />
                        </div>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                        >
                            <p className="desc-sm mb-15">
                                Die SEO-Analyse untersucht eine Webseite oder eines Online-Shop auf verschiedene
                                Faktoren und versucht Handlungsempfehlungen abzuleiten. Ein grosser Teilbereich
                                ist die Keyword-Analyse, bei der nach den richtigen Suchbegriffen für das eigene
                                Projekt geforscht wird.Aktuell nimmt dabei die Suchintention eine immer wichtigere
                                Rolle ein. Die Suchintention ist die Motivation des Suchenden, die hinter eines
                                Begriffs steckt.
                            </p>
                            <p className="desc-sm mb-100 md:mb-50">
                                Die Analyse kann Audit oder Check genannt werden, in diesem Zusammenhang
                                versteht man den Einsatz von SEO-Tools zur Untersuchung von technischen
                                Onpage-Problemen. Diese zwei Begriffe sind wiederum ein Teilbereich von der
                                gesamthaften SEO-Analyse. Wenn Sie sich weiter informieren möchten, lesen Sie
                                unseren Beitrag: SEO Analyse: Wie gut ist Ihre Webseite? zum Thema.
                            </p>
                        </FramerMotionAnimation>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h4 className="content-title-md mb-50 md:mb-24">Wie untersucht Google eine Webseite</h4>
                                <p className="desc-sm mb-15">
                                    Die SEO-Analyse untersucht eine Webseite oder eines Online-Shop auf verschiedene
                                    Faktoren und versucht Handlungsempfehlungen abzuleiten. Ein grosser Teilbereich
                                    ist die Keyword-Analyse, bei der nach den richtigen Suchbegriffen für das eigene
                                    Projekt geforscht wird.Aktuell nimmt dabei die Suchintention eine immer wichtigere
                                    Rolle ein. Die Suchintention ist die Motivation des Suchenden, die hinter eines
                                    Begriffs steckt.
                                </p>
                                <p className="desc-sm mb-50 md:mb-0">
                                    Die Analyse kann Audit oder &quot;Check genannt werden, in diesem Zusammenhang
                                    versteht man den Einsatz von SEO-Tools zur Untersuchung von technischen
                                    Onpage-Problemen. Diese zwei Begriffe sind wiederum ein Teilbereich von der
                                    gesamthaften SEO-Analyse. Wenn Sie sich weiter informieren möchten, lesen Sie
                                    unseren Beitrag: SEO Analyse: Wie gut ist Ihre Webseite? zum Thema.
                                </p>
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <ListItems items={seoAnalysisListItems} />
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>

                <section className="section-wrapper bg-gray">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation type="h2" className="title text-center">
                                Rankingfaktoren
                            </FramerMotionAnimation>
                        </div>

                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <p className="desc-md mb-15">
                                    Die Rankingfaktoren sind Kriterien nach denen die Auflistung der Suchergebnisse
                                    bestimmt werden. Einfach gesagt definiert es, weshalb welche Webseite weiter oben
                                    bei Google steht als andere. Die ist kein öffentlich zugängliche Liste, die man
                                    einfach einsehen kann.
                                </p>
                                <p className="desc-md mb-50">
                                    Es gibt sehr viele verschiedene Kriterien, die ein Suchmaschinen-Ranking beeinflussen
                                    können. Kein Experte kann eine abschliessende Liste zur Verfügung stellen, denn
                                    schliesslich bestimmt die Suchmaschine, wie das Ranking festgelegt wird.Experten
                                    können anhand von Erfahrungen und Tests feststellen, welche Faktoren mehr Einfluss
                                    auf die Positionierung haben als andere. Nachfolgend die aus der Sicht unserer
                                    Agentur wichtigsten 10# Rankingfaktoren im 2021 und 2022. Diese sollen mehr
                                    zum Verständnis beitragen, als dass Sie diese nutzen könnten.
                                </p>
                            </FramerMotionAnimation>
                            <ListItems items={rankingFactorsListItems} />
                        </div>
                    </div>
                </section>

                <section className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Keywords
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Die Keyword-Analyse ist die Ausgangslage für die gesamten weiteren Massnahmen. Man versucht die wichtigsten Begriffe zu finden, mit denen man die eigene Webseite oder Onlineshop optimieren kann.
                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Basierend darauf wird eine Webseitenstruktur und passende Inhalte erstellt. Das Keyword ist der Suchbegriff, welcher ein Internetnutzer bei der Suche mit Google oder anderen Suchmaschinen verwendet. Fachspezialisten unterscheiden bei den Keywords grundsätzlich zwischen Short-Tail und Long-Tail.
                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                            Die Short-Tail Keywords haben ein hohes Suchvolumen und es steckt generell eine schwammige Motivation hinter dem Begriff, die Absicht des Suchenden ist nicht auf den ersten Blick klar.
                        </FramerMotionAnimation>

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">1. Bei ersten Beispiel Hose:</h4>
                                    <Image src={keywords1} alt="img" className="main-image" />
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        2. Schauen Sie sich das zweite Beispiel an: lockere jeans hosen damen
                                    </h4>
                                    <Image src={keywords2} alt="img" className="main-image" />
                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-100 md:mb-24">
                                <h4 className="content-title ">
                                    Es gibt drei wichtige Eigenschaften, die während der Keyword-Analyse besonders
                                    wichtig sind:
                                </h4>
                                <Image src={keywords3} alt="img" className="main-image"/>
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-24">
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    <span className="key">Suchvolumen:</span> Wie oft wird das Keyword bei der
                                    Suchmaschine gesucht bzw. eingegeben
                                </p>
                                <p className="desc-md-2 mb-50 md:mb-15 primary">
                                    <span className="key">Anzahl Wörter:</span> Ein Keyword kann aus einem oder mehreren
                                    Wörtern bestehen.
                                </p>
                                <p className="desc-md-2 primary">
                                    <span className="key">Cost per Click:</span> Wie viel ein Klick kostet, wenn dieser
                                    über eine bezahlte Anzeige kommt. Wie viel der Anzeigenschalter pro Klick bezahlen
                                    muss.
                                </p>
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 type="p" className="desc-md-2 primary mb:100 md:mb-24">
                                Für die Keyword-Analyse können verschiedene Programme zur Hilfe gezogen werden.
                                Nachfolgend finden Sie die Keyword-Übersicht aus dem Keyword-Explorer von SEMrush.com,
                                einem führenden SEO-Tool auf dem Markt. Das Beispiel Keyword hat ein geschätztes
                                Suchvolumen von 18100 Suchanfragen pro Monat, ein Cost per Click von 0.92 USD.
                            </FramerMotionAnimation>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="content-flag bg-white mb-20 md:mb-0">
                                <h4 className="content-title font-medium">
                                    Von den Keywords zu Onpage
                                </h4>
                                <p className="desc-md">
                                    Nach abgeschlossener Keywordanalyse wird eine Webseitenstruktur anhand der
                                    Keyword-Kombinationen erstellt. Eine Kombination wird beispielsweise einer
                                    Unterseite zugewiesen und der Inhalt entsprechend optimiert. Anschliessend
                                    beginnt die professionelle Content-, Onpage- und Offpage Optimierung, zu denen unter
                                    anderem auch das Festlegen von Seitentitel (Titel Tag), Text und die Meta-Tags
                                    gehören.
                                </p>
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>

                <CollapsibleList data={onpageOptimizationSectionData} />

                <CollapsibleList dark={false} data={offpageOptimizationSectionData} />

                <FAQ data={faqSeoSectionData} />
            </main>
        </>
    )
}

const googleContentList = [
    {
        item: 'Was ist SEO',
        link: '#wasistseo'
    },
    {
        item: 'Was sagt Google zur Dauer?',
        link: '#wasistseo'
    },
    {
        item: '3 Phasen eines SEO-Projekts',
        link: '#wasistseo'
    },
    {
        item: 'Häufige Fehler bei der Dauer',
        link: '#wasistseo'
    },
    {
        item: 'Wie lange dauert es im Detail?',
        link: '#wasistseo'
    },
    {
        item: 'Weiterlesen interessante Beiträge',
        link: '#wasistseo'
    },
    {
        item: 'Wie funktioniert Indexierung & Ranking?',
        link: '#wasistseo'
    },
    {
        item: 'Wie erscheint man ganz vorne bei Google?',
        link: '#wasistseo'
    },
    {
        item: 'Was beeinflusst die Dauer von SEO massgeblich?',
        link: '#wasistseo'
    }
];

const smallSource = '(Quelle: seybold.de)'

const post = {
    slug: 'was-ist-seo',
    introId: 'was-ist-seo',
    title: 'Was ist SEO',
    shortTitle: 'Was ist SEO',
    introDescription: 'Bei SEO werden relevante Inhalte auf Webseiten platziert und mit benutzerfreundlichem Design sowie schneller Webtechnologie optimal für Besucher zugänglich gemacht. Mit den richtigen SEO-Massnahmen können Webseiten besser von Suchmaschinen gelesen werden, was die Platzierung in den Ergebnissen verbessert. Unternehmen nutzen Suchmaschinenoptimierung als Marketing, um weiter oben als die Konkurrenz in den Suchergebnissen platziert zu sein.',
    category: 'Ratgeber',
    categoryUrl: '/blog',
    author: 'Sandro Huber',
    authorImage: sandro,
    date: '5. Februar 2021',
    readingTime: '25min Lesezeit',
    contentList: googleContentList,
    videoID: 'wasistseo',
    videoTitle: 'Was wird aktuell sein im 2022?',
    videoURL: 'https://www.youtube.com/embed/1YXnseEjaKs',
    videoDescription: 'Wenn man die Branche betrachtet gibt es aus unserer Sicht drei wichtige Themen, die im 2022 auf uns zukommen: Die Abkürzung SEO steht für „Search Engine Optimization“ – also zu Deutsch Suchmaschinenoptimierung. Umgangssprachlich wird es auch als die Optimierung der Google-Auffindbarkeit einer Webseite genannt. SEO ist ein Teilbereich aus dem Online Marketing, das im 2021 wieder an Relevanz gewonnen hat. Das Thema beschäftigt sich eigentlich ausschliesslich mit der Sichtbarkeit bei der größten Suchmaschine "Google", theoretisch können Optimierungsprozesse jedoch auch für alle anderen gängigen Suchmaschinen durchgeführt werden. Ein Fakt ist jedoch, dass SEO für Google in Bezug auf den Geschäftserfolg im Internet den größten Nutzen verspricht, deshalb steht die Suchmaschine meist im Vordergrund. Gemäss aktuellen Studien hat Google einen Marktanteil von über 90% im deutschsprachigen Raum.',
    videoThumbnail: wasistseo,
}

const seoImportanceListItems = [
    {
        icon: checkCircleIcon,
        text: '85% aller Nutzer im Internet benutzen eine Suchmaschine',
    },
    {
        icon: checkCircleIcon,
        text: '90% der Internetnutzer betrachten nur die Suchresultate der ersten Seite',
    },
    {
        icon: checkCircleIcon,
        text: '75% aller Internetnutzer haben eine deutliche Kaufabsicht',
    },
    {
        icon: checkCircleIcon,
        text: '3.5 Milliarden Google-Suchanfragen weltweit pro Tag',
    },
    {
        icon: checkCircleIcon,
        text: '2 Billionen Google-Suchanfragen weltweit pro Jahr',
    },
    {
        icon: checkCircleIcon,
        text: '64000 Google-Suchanfragen weltweit pro Sekunde',
    },
];

const seoAnalysisListItems = [
    {
        icon: checkCircleIcon,
        text: 'Der Webcrawler von Google (auch Googlebot genannt) lädt Webinhalte eigenständig herunter',
    },
    {
        icon: checkCircleIcon,
        text: 'Der Googlebot folgt den auf den Seiten enthaltenen Links und übermittelt diese Informationen der Google Suchmaschine',
    },
    {
        icon: checkCircleIcon,
        text: 'Diese Informationen bilden einen riesigen Daten-Pool, mit dem die Suchmaschine dann arbeitet',
    },
    {
        icon: checkCircleIcon,
        text: 'Aus diesem Daten-Pool errechnet Google die Suchergebnisse und zeigt bei einer Suche das am besten passende Ergebnis zu der Suchabsicht / Suchintention an',
    },
];

const rankingFactorsListItems = [
    {
        icon: peopleIcon,
        text: 'Suchintention / User Intent: Entspricht der Inhalt der Suchanfrage',
    },
    {
        icon: contentWritingIcon,
        text: 'Content Comprehensiveness: Ist der Inhalt vollständig',
    },
    {
        icon: timerIcon,
        text: 'Aktualität: Ist der Content auf dem aktuellen Stand',
    },
    {
        icon: linkIcon,
        text: 'Relevante Backlinks auf Domainebene',
    },
    {
        icon: marketAnalysisIcon,
        text: 'Anzahl der Backlinks auf Domainebene',
    },
    {
        icon: domainIcon,
        text: 'Wie ist die Ladezeit der Webseite, insbesondere bei Mobilgeräten',
    },
    {
        icon: declineIcon,
        text: 'Direkte Seitenzugriffe',
    },
    {
        icon: hourglassIcon,
        text: 'Zeit auf der Webseite',
    },
    {
        icon: customerReviewIcon,
        text: 'Wie ist die Nutzererfahrung / User Experience',
    },
    {
        icon: doubleQuotesIcon,
        text: 'Ist das Keyword an den wichtigen Stellen platziert',
    },
];

