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
import keywords1 from '../../assets/images/seo/hose.jpg';
import keywords2 from '../../assets/images/seo/long-tail-keyword-analyse.jpg';
import keywords3 from '../../assets/images/seo/keyword-recherche-seo.jpg';
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
import listIcon from '../../assets/icons/layers.svg';
import VideoContainer from "../../components/common/VideoContainer";
import playIcon from '../../assets/icons/play.svg';
import holdingLaptop2 from '../../assets/images/holding-laptop.png';
import videoSEOThumbnail from '../../assets/images/seo/seovideothumbnail.jpg';
import seobetreuungImage from '../../assets/images/seo/seo_betreuung_preise.png'
import seoanalyseImage from '../../assets/images/seo/seo_analyse_kosten.png'

import onpageOptimizationSectionData from '../../data/onpageOptimizationSectionData';
import offpageOptimizationSectionData from '../../data/offpageOptimizationSectionData';
import faqSeoSectionDataWIS from '../../data/FAQSectionDataWIS';

const inter = Inter({subsets: ['latin']})

const structuredData = {


  "@context": "https://schema.org",
  "@type": "Article",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": "https://www.sh-digital.ch//was-ist-seo"
  },
  "headline": "Was ist SEO im 2021",
  "description": "Was ist SEO? Wir zeigen Ihnen wie professionelle Suchmaschinenoptimierung funktioniert und wie Ihr Unternehmen für Suchmaschinen sichtbarer wird.",
  "image": [
    "https://www.sh-digital.ch/static/images/seo.webp",
    "https://www.sh-digital.ch/static/images/was-ist-seo.jpg",
    "https://www.sh-digital.ch/static/images/sandro-huber1.webp",
    "https://www.sh-digital.ch/static/images/images/seo-fakten.webp",
    "https://www.sh-digital.ch/static/images/suchmaschinen-snippet_cpiqtx_c_scale,w_891.jpg",
    "https://www.sh-digital.ch/static/images/hose.jpg",
    "https://www.sh-digital.ch/static/images/long-tail-keyword-analyse.jpg",
    "https://www.sh-digital.ch/static/images/keyword-recherche-seo.jpg",
    "https://www.sh-digital.ch/static/images/title_tag_meta_description.jpg",
    "https://www.sh-digital.ch/static/images/page-speed.jpg",
    "https://www.sh-digital.ch/static/images/content-marketing.webp",
    "https://www.sh-digital.ch/static/images/google-my-business-eintrag.jpg",
    "https://www.sh-digital.ch/static/images/seo_analyse_kosten.png",
    "https://www.sh-digital.ch/static/images/seo_betreuung_preise.png",
    ""
  ],  
  "author": {
    "@type": "Person",
    "name": "Sandro Huber"
  },  
  "publisher": {
    "@type": "Organization",
    "name": "SH Digital",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.sh-digital.ch/static/images/sh_digital_final_logo_cdscas_c_scale,w_250.webp"
    }
  },
  "datePublished": "2021-02-05",
  "dateModified": "2021-12-01"

}

export default function BlogPost() {
    return (
        <>
            <Head>
            <script
                key="structured-data"
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
              />
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
                                <p className="date">Erstellt: {post.date}</p> ·
                                 <p className="date">Aktualisiert: {post.update}</p> ·
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
                                  description={post.videoDescription} description2={post.videoDescription2}
                                  list={post.videoList}
                                  />


                <section id="unternehmen" className="section-wrapper" >
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
                            Daher stellt die Sichtbarkeit im Internet meist die Basis für einen erfolgreichen Kundenkontakt dar. Egal wie praktisch, hochwertig oder neuartig ein Produkt oder eine Dienstleistung ist – wird ein Unternehmen von potenziellen Kunden gar nicht erst gefunden, kann auch kein Kaufinteresse geweckt werden. Das intensive Vergleichen und Durchforsten von mehreren Seiten der Suchmaschine ist definitiv vorbei. Suchmaschinen Marketing ist also zum einen die wichtigste Möglichkeit, um online Nutzer für die eigene Website zu gewinnen.
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                           Ein Nutzer sucht nach einem bestimmten Thema oder Produkt, dann weiss man, dass dieser einen hohen Eigennutzen daraus ziehen möchte. Das Tippen verschiedener Keyword-Varianten und Verfeinerungen in das Thema bestätigen das hohe Eigeninteresse. So ist die Wahrscheinlichkeit groß, dass sie später einen Newsletter abonnieren oder online einen Kauf tätigen.
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                            Zuletzt hat Suchmaschinen Marketing den Vorteil, dass es, sofern es professionell aufgebaut wurde, recht nachhaltig ist. Das bedeutet, dass eine Position im Ranking bei Google, die einmal für einen Suchbegriff erreicht wurde, in der Regel stabil bleibt.
                            </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="content-flag bg-gray">
                            <h4 className="content-title font-medium">
                                Grundlagen: Ein laufenden Prozess
                            </h4>
                            <p className="desc-md">
                                Die Optimierung für Suchmaschinen ist kein einmaliger Vorgang, bei dem einige Dinge an einer Webseite verändert werden können. Es ist wichtig, regelmässig Inhalte zu aktualisieren oder neue Inhalte zu erstellen. Die Erfahrung zeigt, dass die Suchmaschinen neuen qualitative Inhalte als positives Signal für die eigene Webseite bewerten.
                            </p>
                            <p className="desc-md">
                                Zudem werden die Suchmaschinen durch dessen Ingenieure stets modernisiert, dies zeigen auch jüngste "Core-Updates" des Google Index (Anpassung des Suchalgorithmus). Die Webseiten müssen laufend und spätestens bei Lancierung von solchen Updates entsprechend angepasst sein. Aus diesen Gründen sind laufende Anpassungen für ein hohes Ranking bei Suchmaschinen erforderlich.
                            </p>
                        </FramerMotionAnimation>
                    </div>
                </section>

                <section id="wiefunktioniertes" className="section-wrapper bg-gray">
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
                            Ein Snippet erscheint online in Suchmaschinen als Suchergebnisseite (siehe Bild oben). Es handelt sich dabei um kurze Texte mit Verlinkung, die dem Nutzer einen Überblick über den Inhalt der Seite geben sollen. Durch diese Angaben überprüft der User, ob der Inhalt für ihn relevant ist. Sobald er auf den Snippet klickt, gerät er schließlich auf die zugehörige Landingpage.
                            </FramerMotionAnimation>
                            <br />
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-0">
                            Ein Snippet, der den Inhalt präzise zusammenfasst und Interesse weckt, sorgt automatisch für mehr User, die darauf klicken sowie allgemein mehr Besucher. Weitere Maßnahmen, die getroffen werden, unterteilt man außerdem in OnPage und OffPage. Grundsätzlich gibt es dabei zu verstehen, dass etwas direkt auf der Webseite oder ausserhalb sein kann. Diese Unterscheidung ist sinnvoll, da völlig andere Aktivitäten dahinter stecken.
                            </FramerMotionAnimation>
                    </div>
                </section>

                <section id="analyse" className="section-wrapper">
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
                                unseren Beitrag <a href="/seo/seo-analyse" title="SEO Analyse: Wie gut ist Ihre Webseite">SEO Analyse: Wie gut ist Ihre Webseite</a>.
                            </p>
                        </FramerMotionAnimation>
                        <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                            >
                                <h4 className="content-title-md mb-50 md:mb-24">Wie untersucht Google eine Webseite</h4>
                                <p className="desc-sm mb-15">
                                    Der <a target="__blank" href="https://developers.google.com/search/docs/fundamentals/seo-starter-guide?hl=de" title="Guide für den Einstieg in SEO von Google">Guide für den Einstieg in SEO von Google</a> ist ein Startleitfaden für Anfänger zum Thema. 
                                    In dieser Anleitung steht die Google Search Console im Mittelpunkt, die Webmaster helfen soll, 
                                    die verschiedenen Bereiche optimal zu verbessern. Mit Meldungen zu der eigenen Webseite 
                                    stellt Google Hinweise zur Verfügung, anhand derer Massnahmen zu treffen sind.

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

                <section id="rankingfaktoren" className="section-wrapper bg-gray">
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
                                <p className="desc-md mb-15">
                                    Es gibt sehr viele verschiedene Kriterien, die ein Suchmaschinen-Ranking beeinflussen
                                    können. Kein Experte kann eine abschliessende Liste zur Verfügung stellen, denn
                                    schliesslich bestimmt die Suchmaschine, wie das Ranking festgelegt wird.
                                    </p>
                                    <p className="desc-md mb-50">
                                    Experten
                                    können anhand von Erfahrungen und Tests feststellen, welche Faktoren mehr Einfluss
                                    auf die Positionierung haben als andere. Nachfolgend die aus der Sicht unserer
                                    Agentur <b>wichtigsten 10# Rankingfaktoren im 2021 und 2022</b>. Diese sollen mehr
                                    zum Verständnis beitragen, als dass Sie diese nutzen könnten.
                                </p>
                            </FramerMotionAnimation>
                            <ListItems items={rankingFactorsListItems} />
                        </div>
                    </div>
                </section>

                <section id="keywords" className="section-wrapper keywords">
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
                                    <h4 className="content-title">1. Beispiel</h4>
                                    <Image src={keywords1} alt="img" className="main-image" />
                                    <p className="desc-md mt-15">Der Suchende kann nach "einer Hose zum kaufen" suchen oder er möchte wissen, was "eine Hose überhaupt ist". Die genaue Intention ist unbekannt und wird sich im Verlauf der Recherche ergeben.</p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        2. Beispiel
                                    </h4>
                                    <Image src={keywords2} alt="img" className="main-image" />
                                    <p className="desc-md mt-15">Bei diesem Suchbegriff ist klar, wonach die Userin gesucht hat. Man kann davon ausgehen, dass man effektiv nach einem solchen Produkt sucht, allerdings noch nicht unbedingt bereit für einen Kauf ist.</p>

                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-20 md:mb-12">
                                <p className="desc-md mt-15">
                                    Es gibt drei wichtige Eigenschaften, die während der Keyword-Analyse besonders
                                    wichtig sind:
                                </p>
                                
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
                                <Image style={{ maxWidth: "60%"}} src={keywords3} alt="img" className="main-image"/>
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

                <CollapsibleList link={'onpage'} data={onpageOptimizationSectionData} />

                <CollapsibleList link={'offpage'} dark={false} data={offpageOptimizationSectionData} />

                 <section id="tools" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Welche sind die wichtigsten SEO-Tools
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Optimierungs-Tools können dabei helfen, den Erfolg von unternommenen Suchmaschinen-Marketingmassnahmen im Internet zu analysieren, auszuwerten und zu steigern. Auf Basis der Auswertungen wird der aktuelle Zustand verstanden und langfristig verbessert. Dabei gibt es eine Vielzahl an SEO-Tools, die verschiedene Schwerpunkte besitzen und an unterschiedlichen Prozessschritten eingesetzt werden können.

                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Einige Tools helfen bei der Verbesserung der Suchmaschinen-Rankings, andere beim Backlink-Profil einer Website und wieder andere konzentrieren sich auf die Keywords. Da die Suchmaschinen-Marketing-Tools sehr unterschiedlich im Angebot und in der Spezialisierung sind, muss man genau analysieren, welches Tool die eigenen Anforderungen am besten erfüllt.

                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                          Zur Basisausstattung gehören die Online-Marketingtools, die besonders beliebt sind, sind die Google Search Console, Google Analytics und Screaming Frog. Wer sich tiefer mit der Materie befasst, wird jedoch bald feststellen, dass es eine Vielzahl weiterer nützlicher Tools gibt, die weit verbreitet sind.


                        </FramerMotionAnimation>

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Google Search Console</h4>
                                    <p className="desc-md mt-15">Die Google Search Console ist ein kostenfreies Tool, mit dem die Performance der Website in den Google Suchergebnissen beobachtet werden kann. Das Tool hilft dabei, die Sichtbarkeit der Website im Internet zu überwachen und Optimierungspotenziale zu identifizieren.</p>
                                </FramerMotionAnimation>
                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Google Analytics</h4>
                                    <p className="desc-md mt-15">Auch Google Analytics hat eine kostenlose Version, die bereits viele hilfreiche Funktionen bietet. Das Tool stellt Statistiken über die Performance der Website und über das Besucherverhalten bereit. Insbesondere in Verbindung mit der Google Search Console ermöglicht es, zielgerichtet Optimierungspotenziale zu entdecken und umzusetzen. Google Analytics gibt Aufschluss über den Online Traffic einer Website und hilft dabei, Nutzerdemografie und –Vorlieben zu erkennen.</p>
                                </FramerMotionAnimation>
                                 <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Screaming Frog</h4>
                                    <p className="desc-md mt-15">Screaming Frog ist ein Crawler-Tool. Es liefert einen Überblick über die Architektur einer Website und zeigt auf, wo Elemente fehlen oder Inhalte sich doppeln. Speziell für die OnPage-Analyse ist es nützlich.</p>
                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="mb-20 md:mb-12">
                                <p className="desc-md mt-15">
                                    Neben diesen drei Tools gibt es eine Vielzahl weiterer, die zur Keyword-Analyse, 
                                    zum Monitoring und für die technische Optimierung verwendet werden können. 
                                    Sind Sie auf der Suche nach einem geeigneten Tool, dann lesen 
                                    Sie unseren Artikel zum Thema <a href="/seo/tools" title="SEO-Tools">SEO-Tools </a> 
                                    im Vergleich. Unsere Agentur verwendet weitere interne Tools, 
                                    die Keyword-Daten verfeinern können, diese sind jedoch unseren 
                                    Kunden vorbehalten. Bei Interesse dürfen Sie gerne auf uns zukommen.

                                </p>
                                
                            </FramerMotionAnimation>

                            
                        </div>
                    </div>
                </section>

                 <section id="agentur" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Was genau macht eine SEO-Agentur
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Die Tätigkeiten sind sehr vielfältig und können meist nur von spezialisierten Fachkräften übernommen werden. Eine SEO-Strategie und Umsetzung selbst in die Hand zu nehmen kann auf die Dauer viel Zeit in Anspruch nehmen, ohne dass ein Erfolg garantiert ist.

                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Eine SEO-Agentur nimmt Webmastern diese Arbeit ab, wodurch man Zeit spart und den Kopf für andere Inhalte der Webseite oder gar andere Arbeiten im Unternehmen freihat. Grundsätzlich gilt: Je früher professionelle Optimierung in Auftrag gegeben wird, umso besser. Am sinnvollsten ist es bereits beim Aufbau einer neuen Website darauf zu achten, dass man von Grund auf suchmaschinenfreundlich gestaltet.

                        </FramerMotionAnimation>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                            Natürlich kann auch eine bereits bestehende Website durch eine Agentur verbessert werden. Dabei empfiehlt sich einen einmaligen grösseren Umbau zu Beginn einer Betreuung vorzunehmen und dann kleinere Aktivitäten auf monatlicher Basis fortzuführen.

                        </FramerMotionAnimation>

                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                            Grundsätzlich haben Agenturen damit eine Vielzahl an Aufgaben, die mit der Suchmaschinenoptimierung einhergehen: Sie stellen die Erreichbarkeit der Website sicher, optimieren Snippets, Ladezeiten und Content. Sie achten darauf, dass die mobile Darstellung funktioniert, interne und externe Links einwandfrei eingebettet sind. Sie verhindern die Verwendung von "Duplicate Content" und sorgen für ein angenehmes Nutzungsverhalten.


                        </FramerMotionAnimation>

                    
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="content-flag bg-white mb-20 md:mb-0">
                                <h4 className="content-title font-medium">
                                    Warum eine Agentur

                                </h4>
                                <p className="desc-md">
                                   Die Experten von Agenturen besitzen ein fachliches Know-How und können dieses gezielt anwenden. Ausserdem hat ein Experte einen Erfahrungsvorsprung, welcher unmöglich von einem Laien über die Jahre angeeignet werden kann.
                                <br /> <br />
                                Die Praxis zeigt, dass sich ein "Know-How-Einkauf" bei einer Agentur über die Zeit obendrein lohnt. Überspitzt gesagt profitieren Sie von den Fehlern, die bei anderen Kunden der Agentur in der Vergangenheit gemacht wurden und haben dadurch eine deutlich höhere Erfolgschance.


                                </p>
                            </FramerMotionAnimation>

                            <section className="content-with-video-2 container flex md:grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="video-wrapper">
                                    <VideoContainer url="https://www.youtube.com/embed/NWsyr-D06Ck"
                                                    className="thumbnail-wrapper relative">
                                        <Image src={holdingLaptop2} alt={'thumbnail'} className="thumbnail" />
                                        <Image src={playIcon} alt={"play icon"} className="play-icon" />
                                    </VideoContainer>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="content-wrapper">
                                    <h3 className="section-title">Video von Google</h3>
                                    <p className="description">Wie man einen SEO-Spezialisten aussuchen sollte (auf Englisch).
                                    </p>
                                    
                                </FramerMotionAnimation>
                            </section>
                        </div>


                   
                </section>

                 <section id="erfolgsfaktoren" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Erfolgsfaktoren
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Eine Herausforderung des Online Marketing ist es, dass die Suchmaschinen-Ranking-Faktoren ständig im Wandel sind. Experten müssen aus diesem Grund stets informiert bleiben und sich über die neuesten Entwicklungen in Kenntnis setzen. Die folgenden Faktoren spielen heutzutage eine große Rolle bei Ranking-Ergebnissen:
                        </FramerMotionAnimation>
                        

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Die Gegebenheiten des Marktes</h4>
                                    <p className="desc-md mt-15">Möglicherweise ist das Themenfeld, in dem man sich mit seiner Marke befindet, stark umkämpft und der Wettbewerb sehr hart. Unter diesen Umständen werden es neue Unternehmen schwerer haben, sich zu etablieren. Ein weniger umworbener Markt ist einfacher zu bearbeiten.</p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Content-Relevanz</h4>
                                    <p className="desc-md mt-15">Es geht nicht nur darum, Nutzer auf eine Website zu „locken“. Auf der Landingpage angekommen, gilt es auch, das Interesse dort zu halten. Stimmt der Webseiten-Inhalt mit dem suggerierten Inhalt des Snippets nicht überein, wir der Internetnutzer enttäuscht sein und die Seite wieder verlassen.</p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">User-Experience</h4>
                                    <p className="desc-md mt-15">Dass Internetnutzer durch ein gutes Ranking auf eine Website aufmerksam gemacht werden, ist die eine Sache. Dass sie letztendlich bleiben, eine andere. Um Nutzer auf einer Webseite zu binden, sollte man diese nicht für Bots ausrichten, sondern auf das effektive menschliche Verhalten.</p>
                                    <p className="desc-md mt-15">Der User ist auf der Suche nach Informationen oder Produkten, eine angenehme Erfahrung wird den User eher zum Kauf ermuntern. Hierbei spielt der Content eine Rolle, genau wie die ästhetische Aufmachung und thematische Strukturiertheit der Inhalte.</p>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Einfachheit</h4>
                                    <p className="desc-md mt-15">Websites, auf denen Suchfenster kaum zu finden, Inhalte unübersichtlich und die Navigation kompliziert ist, werden dazu führen, dass Internetnutzer schnell wieder verschwinden. Es gilt also, die Inhalte so aufzubereiten, dass das Relevante auf den ersten Blick ins Auge fällt. Je komplexer eine Website aufgebaut ist, umso weniger attraktiv wird sie von Internetnutzern oft wahrgenommen.</p>

                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title">Regelmäßiges Testen</h4>
                                    <p className="desc-md mt-15">Ob eine Website gut ankommt und die Marketing Maßnahmen im Internet funktionieren, das kann anhand von Klickzahlen, Conversionsraten und Seitenaufrufen gut nachvollzogen werden. Neue Webmaster sollten zunächst testen, welche Marketingmaßnahmen erfolgreich sind und die Wirkung auswerten.</p>
                                </FramerMotionAnimation>
                               
                            </div>

                           
                       
                        <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="content-flag bg-white mb-20 md:mb-0">
                                <h4 className="content-title font-medium">
                                    Lässt sich Erfolg garantieren?

                                </h4>
                                <p className="desc-md">
                                   Der Erfolg bei SEO lässt sich nicht garantieren, zumal die Suchmaschinen keine detaillierten Informationen zu den Rankingfaktoren (nur Hinweise) veröffentlichen. Es ist in der Hand der entsprechenden Suchmaschine, eine Webseite weiter oben in den Suchergebnissen anzuzeigen oder eben nicht.

                                <br /> <br />
                                Die Chancen einen Erfolg zu erzielen sind jedoch mit einer professionellen Betreuung deutlich höher als wenn man als "Laie" versucht seine Webseite mit Keywords zu versehen. Solche vermeintlich einfachen Eingriffe in die Webseite können kurz- bis mittelfristige Abstrafungen durch die Suchmaschinen hervorrufen. Ein professioneller Anbieter kann solche Szenarien mit vermeintlich kleinen Schaden rückgängig machen, diese sind jedoch nicht zu empfehlen und können den Weg zum Erfolg deutlich verlängern.
                                < br /> <br />
                                Auf dem Markt gibt es einige Anbieter, welche die Geld-zurück-Garantie bewerben. Theoretisch wird der Erfolg mit diesem Marketing-Trick tatsächlich garantiert. Als Anbieter mit genügend Kunden überhaupt eine solche Klausel aufzunehmen, ist für uns rätselhaft. Aus neutraler Sicht muss sich gefragt werden, ob solche Anbieter nachhaltigen wirtschaftlichen Erfolg haben können, wenn der Grossteil der Kunden dazu aufgefordert wird, das Geld zurückzuverlangen.

                                </p>
                            </FramerMotionAnimation>
                    </div>
                    </div>
                </section>

                <section id="kosten" className="section-wrapper keywords">
                    <div className="container">
                        <div className="title-wrapper">
                            <FramerMotionAnimation
                                type="h2" className="title text-center">
                                Was kostet professionelle organische Optimierung?

                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-50 md:mb-20">
                            Es ist schwer möglich, eine pauschale Angabe zu den Kosten zu machen. Wie groß der Arbeitsaufwand bei der Suchmaschinenoptimierung ist, hängt vom aktuellen Zustand der Website und den Zielen des Kunden ab. Somit sind auch die Kosten von Faktoren wie Themengebiet und dem Markt abhängig.

                        </FramerMotionAnimation>
                        
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mb-90 md:mb-32">
                           Grundsätzlich muss zwischen folgenden zwei Teilbereichen unterschieden werden:
                        </FramerMotionAnimation>

                        <div className="inner-content-wrapper bg-gray">
                            <div className="content-wrapper content-grid-wrapper grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                >
                                    <h4 className="content-title"><a href="/seo/seo-analyse" title="SEO-Analyse">SEO-Analyse </a>mit Handlungsempfehlungen</h4>
                                     <p className="desc-md mt-15">Die Kosten für Keywordanalyse inkl. Handlungsempfehlung liegen im Schnitt bei 1'350 CHF.</p>
                                     <br />
                                     <Image src={seoanalyseImage} alt="SEO-Analyse" className="main-image" />
                                    <small className="text-xs mt-15">Quelle: https://www.gryps.ch/produkte/seo-39/seo-kosten/</small>

                                   
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    className="mb-80 md:mb-0"
                                >
                                    <h4 className="content-title">
                                        Content Marketing (Blogkonzept, verfassen von Content)
                                    </h4>
                              <p className="desc-md mt-15">Die Kosten für das Content-optimierte Konzept inkl. Erstellen der Blogbeiträge liegen im Schnitt bei 2'750 CHF.</p>
                                <Image src={seobetreuungImage} alt="Content Marketing" className="main-image" />
                                <br />
                                <small className="text-xs">Quelle: https://www.gryps.ch/produkte/seo-39/seo-kosten/</small>

                                </FramerMotionAnimation>
                            </div>

                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: -50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                 className="content-flag bg-white mb-20 md:mb-0">
                                <h4 className="content-title font-medium">
                                    Fazit
                                </h4>
                                <p className="desc-md">
                                    Für eine laufende professionelle Betreuung inklusive Content-Erstellung, mit einer Laufzeit von mindestens 6 Monaten, können Sie mit Kosten um die CHF 2'750 pro Monat rechnen. Daraus ergeben sich für das gesamte Jahr Gesamtkosten von CHF 33'000.
                                    <br /><br />
                                    Sichtbarkeit: Die Erfahrung der SH Digital Kunden mit professioneller Betreuung zeigt, dass die SEO-Kosten sich bereits nach 12 bis 18 Monaten durch die grössere Sichtbarkeit refinanziert haben. 

                                </p>
                            </FramerMotionAnimation>
                        </div>
                    </div>
                </section>

                <section className="content-with-video-2 container flex md:grid md:grid-cols-2">
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: -50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="video-wrapper">
                                    <VideoContainer url="https://www.youtube.com/embed/lvWuXcvtEm8"
                                                    className="thumbnail-wrapper relative">
                                        <Image src={videoSEOThumbnail} alt={'videoSEOThumbnail'} className="thumbnail" />
                                        <Image src={playIcon} alt={"play icon"} className="play-icon" />
                                    </VideoContainer>
                                </FramerMotionAnimation>
                                <FramerMotionAnimation
                                    initial={{ opacity: 0, x: 50 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: 0.25 }}
                                    className="content-wrapper">
                                    <h3 className="section-title">Zusammenfassung in Schweizerdeutsch</h3>
                                    <p className="description">Was ist SEO genau und wie sollte man es einsetzen.
                                    </p>
                                    
                                </FramerMotionAnimation>
                            </section>

                <FAQ link={'faq'} data={faqSeoSectionDataWIS} />
            </main>


        </>
    )
}

const googleContentList = [
    {
        item: 'Was ist SEO',
        link: '#was-ist-seo'
    },
    {
        item: 'Warum ist es für mein Unternehmen wichtig?',
        link: '#unternehmen'
    },
    {
        item: 'Wie funktioniert Suchmaschinenoptimierung?',
        link: '#wiefunktioniertes'
    },
    {
        item: 'Was ist eine SEO-Analyse',
        link: '#analyse'
    },
    {
        item: 'Was sind Rankingfaktoren',
        link: '#rankingfaktoren'
    },
    {
        item: 'Was sind Keywords',
        link: '#keywords'
    },
    {
        item: 'Onpage Optimierung',
        link: '#onpage'
    },
    {
        item: 'Offpage Optimierung',
        link: '#offpage'
    },
    {
        item: 'Welche sind die wichtigsten SEO-Tools',
        link: '#tools'
    },
    {
        item: 'Was genau macht eine SEO-Agentur',
        link: '#agentur'
    },
    
    {
        item: 'Erfolgsfaktoren',
        link: '#erfolgsfaktoren'
    },
    {
        item: 'Was kostet professionelle organische Optimierung?',
        link: '#kosten'
    },

    {
        item: 'Wie lange dauert es bis zu den ersten Resultaten?',
        link: '#faq'
    },
    
    {
        item: 'Häufige Fragen zu Suchmaschinenmarketing',
        link: '#faq'
    }
];

const smallSource = '(Quelle: seybold.de)'

const post = {
    slug: 'was-ist-seo',
    introId: 'was-ist-seo',
    title: 'Was ist SEO',
    shortTitle: 'Was ist SEO',
    introDescription: 'Bei SEO werden relevante Inhalte auf Webseiten platziert und mit benutzerfreundlichem Design sowie schneller Webtechnologie optimal für Besucher zugänglich gemacht. Mit den richtigen SEO-Massnahmen können Webseiten besser von Suchmaschinen gelesen werden, was die Platzierung in den Ergebnissen verbessert. Unternehmen nutzen Suchmaschinenoptimierung als Marketing, um weiter oben als die Konkurrenz in den Suchergebnissen platziert zu sein.',
    introDescription2: 'Vielen Dank, dass Sie auf meinen Artikel gestossen sind. Suchmaschinenoptimierung ist und bleibt brandaktuell. Neben einem Guide für Einsteiger ins Thema möchte ich Ihnen die neusten Entwicklungen näherbringen.',
    introDescription3: 'Zudem findet sich zu jedem Themenbereich die Möglichkeit, sich noch detaillierter über ein Subthema zu informieren.',
    category: 'Ratgeber',
    categoryUrl: '/blog',
    author: 'Sandro Huber',
    authorImage: sandro,
    date: '5. Februar 2021',
    update: '30. November 2021',
    readingTime: '25min Lesezeit',
    contentList: googleContentList,
    videoID: 'wasistseo',
    videoTitle: 'Was ist aktuell in SEO los?',
    videoURL: 'https://www.youtube.com/embed/1YXnseEjaKs',
    videoDescription: 'Wenn man die Branche betrachtet gibt es aus unserer Sicht drei wichtige Themen, die im 2022 auf uns zukommen:',
    videoDescription2: 'Abkürzung SEO steht für „Search Engine Optimization“ – also zu Deutsch Suchmaschinenoptimierung. Umgangssprachlich wird es auch als die Optimierung der Google-Auffindbarkeit einer Webseite genannt. SEO ist ein Teilbereich aus dem Online Marketing, das im 2021 wieder an Relevanz gewonnen hat. Das Thema beschäftigt sich eigentlich ausschliesslich mit der Sichtbarkeit bei der größten Suchmaschine "Google", theoretisch können Optimierungsprozesse jedoch auch für alle anderen gängigen Suchmaschinen durchgeführt werden. Ein Fakt ist jedoch, dass SEO für Google in Bezug auf den Geschäftserfolg im Internet den größten Nutzen verspricht, deshalb steht die Suchmaschine meist im Vordergrund. Gemäss aktuellen Studien hat Google einen Marktanteil von über 90% im deutschsprachigen Raum.',
    videoThumbnail: wasistseo,
    videoList : [
        {
        icon: listIcon,
        text: 'Video Inhalte nehmen drastisch zu. Zum Thema Video haben wir einen ausführlichen Ratgeber unter Video-SEO.',
    },
    {
        icon: listIcon,
        text: 'Kundenfokus: Die Customer Journey wird noch wichtiger',
    },
    {
        icon: listIcon,
        text: 'Weg von Redaktionen: Content Creation wird dank AI viel effizienter und jedem zugänglich',
    },

        ]
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


