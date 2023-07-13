import dummy1 from '../assets/images/dummy1.png';
import dummy2 from '../assets/images/dummy2.png';
import dummy3 from '../assets/images/dummy3.png';
import sandro from '../assets/images/blog/sandro.png';
import analyse from '../assets/images/blog/analyse.jpg';
import wasistseo from '../assets/images/blog/was-ist-seo-optimierung.jpg';
import imageData from '../data/blogPostAlternateSectionData';
import chartPreview from '../assets/images/growth-preview.png';
import seoImage from '../assets/images/seo/was-ist-seo.jpg';
import seoAnalyseTop from '../assets/images/analyse/seo-analyse.webp';
import seoAnalyseImage from '../assets/images/analyse/seo-analyse-ratgeber.jpg';
import seoAnalyseCTAImage from '../assets/images/analyse/cta-analyse.jpg';
import seoFakten from '../assets/images/seo/seo-fakten.webp';
import imageSnippet from '../assets/images/seo/suchmaschinen-snippet_cpiqtx_c_scale,w_765.jpg'
import faqSeoSectionData from '../data/faqSeoSectionData';
import meeting from '../assets/images/meeting3.png';
import listIcon from '../assets/icons/list.svg';
import loaderIcon from '../assets/icons/loader.svg';
import cpuIcon from '../assets/icons/cpu.svg';
import processWebsiteAnalysis from '../data/processWebsiteAnalysis';
import seoDauerImage from '../assets/images/seo/suchmaschinenoptimierung-dauer.jpg';
import seoOnlineshop from '../assets/images/seo/online-shop-suchmaschinenoptimierung.jpg';
import seoKostenImage from '../assets/images/seo/kosten-seo.webp';
import seoStrategieImage from '../assets/images/seo/strategie.jpg';
import DatenschutzImage from '../assets/images/content/datenschutz.jpg';
import seoRelaunchImage from '../assets/images/seo/relaunch-seo-web.webp'
import contentMarketingImage from '../assets/images/seo/was-ist-content-marketing.webp'
import seotoolsImage from '../assets/images/seo/seo-tools.jpg'
import tiktokImage from '../assets/images/tiktok/tiktok-nutzerzahlen.svg'
import videoSEOImage from '../assets/images/seo/videos-im-seo.jpg'
import localSEOImage from '../assets/images/seo/local-tipps.jpg'
import saasMImage from '../assets/images/saas-marketing-ai.jpg'

export default {

    'resources': {
        name: 'Ressourcen',
        alias: 'resources',
        posts: [

            {
               slug: 'saas-marketing',
                shortTitle: 'Effektives Marketing in der Software-Branche',
                title: 'Effektives Marketing in der Software-Branche',
                description: 'Die herkömmlichen Marketing Kanäle erzielen nicht mehr die gleichen Erfolge wie noch vor einigen Jahren. ',
                image: saasMImage,
                imageAlt: 'Effektives Marketing in der Software-Branche',
                date: '13.07.2023',
                update: '13.07.2023',
                readingTime: '1min Lesedauer',
                cta: 'Zum Beitrag',
                author: 'Sandro Huber',
                authorImage: sandro,
            },
            {
                slug: 'onpage-analyse',
                shortTitle: 'Wie Lange e Dauert SEO',
                title: 'Kostenlose Website-Analyse – individuell und ausführlich',
                description: 'Wie stehen Sie Onpage technisch da? Welche ungenutzten Potenziale und Schwachstellen hat Ihre Website? Unsere Website-Analyse zeigt es Ihnen!',
                image: analyse,
                imageAlt: 'Blog post',
                readMoreUrl: '/blog/resources/post1',

                cta: 'Zur Onpage Analyse'
            },
            {
               slug: 'neues-datenschutzgesetz-schweiz-webseite',
                shortTitle: 'Neues Datenschutzgesetz in der Schweiz',
                title: 'Neues Datenschutzgesetz: Fakten für Webseitenbetreiber',
                description: 'Wir haben für Sie die wichtigsten Aspekte des neuen Datenschutzgesetzes (nDSG) für Webseitenbetreiber zusammengestellt.',
                image: DatenschutzImage,
                imageAlt: 'Neues Datenschutzgesetz: Fakten',
                date: '08.02.2023',
                update: '10.02.2023',
                readingTime: '3min Lesedauer',
                cta: 'Neues Datenschutzgesetz in der Schweiz',
                author: 'Sandro Huber',
                authorImage: sandro,
            },

            
        ]
    },

    

    'seo': {
        name: 'SEO',
        alias: 'seo',
        posts: [

              {
                slug: 'was-ist-seo',
                shortTitle: 'Was ist SEO',
                title: 'Was ist SEO',
                description: 'Bei SEO werden relevante Inhalte auf Webseiten platziert und mit benutzerfreundlichem Design sowie schneller Webtechnologie optimal für Besucher aufbereitet.',
                image: wasistseo,
                imageAlt: 'Was ist SEO',
                readMoreUrl: '/seo/post1',
                date: '30.11.2021',
                readingTime: '25min Lesedauer',
                cta: 'Was ist SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
            },

            {
                slug: 'seo-dauer',
                shortTitle: 'Wie lange dauert SEO',
                title: 'Wie lange dauert SEO',
                description: 'Sie fragen sich sicherlich, bis wann Resultate erzielt werden können bzw. wie lange es dauert. ',
                image: seoDauerImage,
                imageAlt: 'SEO Dauer',
                readMoreUrl: '/seo/seo-dauer',
                date: '9.12.2022',
                readingTime: '10min Lesedauer',
                cta: 'SEO Dauer',
                author: 'Sandro Huber',
                authorImage: sandro,
                
                
            
            },
            
            {
            slug: 'video-seo',
                shortTitle: 'Video-SEO für eine bessere Reichweite',
                title: 'Video-SEO für eine bessere Reichweite',
                description: 'Wie nutzt man SEO, um erfolgreicher bei Suchmaschinen und YouTube platziert zu werden.',
                image: videoSEOImage,
                imageAlt: 'Video SEO',
                readMoreUrl: '/seo/video-seo',
                date: '25.03.2022',
                update: '25.03.2022',
                readingTime: '12min Lesedauer',
                cta: 'Video SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                },
                {
                 slug: 'relaunch-seo',
                
                shortTitle: 'Relaunch-SEO',
                title: 'Relaunch-SEO: Checkliste für den perfekten Neustart Ihrer Webseite',
                description: 'Es gibt gute Gründe für einen CMS-Wechsel, Redesign oder Rebranding. Bei einem Relaunch sollte SEO berücksichtigt werden, denn eine Website kann schnell Sichtbarkeit und Traffic verlieren.',
                image: seoRelaunchImage,
                imageAlt: 'Relaunch-SEO',
                readMoreUrl: '/seo/relaunch-seo',
                date: '15.03.2022',
                update: '15.03.2022',
                readingTime: '6min Lesedauer',
                cta: 'Relaunch SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                },
            {
                slug: 'seo-analyse',
                shortTitle: 'SEO Analyse',
                title: 'SEO Analyse',
                pagetitle: 'SEO Analyse: Wie vorgehen inklusive Checklisten',
                metadescription: 'Unser SEO Analyse Tool testet Ihre Webseite kostenlos. Anhand von Checklisten ✅ erfahren, wie Sie vorgehen sollten',
                description: 'Möchtest du, dass deine Webseite von potenziellen Kunden gefunden wird? Dann ist SEO das A und O!',
                image: seoAnalyseImage,
                imageAlt: 'SEO Analyse',
                readMoreUrl: '/seo/post1',
                date: '08.11.2022',
                update: '08.11.2022',
                readingTime: '5min Lesedauer',
                cta: 'SEO Analyse',
                author: 'Sandro Huber',
                authorImage: sandro,
                introTitle: 'Wie gut ist Ihre Webseite?',
                introDescription: 'Die Optimierung der Webseite für Suchmaschinen ist ein wichtiger Faktor um in der umkämpften Onlinewelt einen Platz am Tisch zu kriegen. Es gibt verschiedene Suchmaschinen Richtlinien, welche von einer guten Webseite eingehalten werden sollten. Die SEO Strategie ist massgeblich von korrekten Analysedaten abhängig. In diesem Ratgeber helfen wir Ihnen zu prüfen, wo bei Ihnen Chance und Potentiale für Optimierung sind. Korrekt umgesetzte Optimierungsmassnahmen können zur Steigerung des Rankings beitragen.',
                introDescription2: 'Die Überprüfung der Webseite und die anschliessende Onpage-Verbesserung ist ein erster wichtiger Schritt, allerdings führen nur optimal aufeinander abgestimmte Massnahmen aus verschiedenen Bereichen z.B. Linkaufbau, Content-Design, etc. zu einem langfristigen Erfolg.', 
                introId: 'wasistseo',
                contentList: [

                    {
                        item: 'Gratis SEO Analyse mit dem Online Tool',
                        link: '#onlinetool'
                    },
                    {
                        item: 'Individuellen Bericht innert kürzester Zeit - nachfolgend ausfüllen',
                        link: '#bericht'
                    },
                    {
                        item: 'Checkliste zur Onpage Optimierung',
                        link: '#checkliste'
                    },
                    {
                        item: 'Vorgehen bei einer Website Analyse für ein besseres Ranking',
                        link: '#vorgehen'
                    },
                    {
                        item: 'Mit Sandro Huber und Team eine professionelle Analyse starten!',
                        link: '#professionelleanalyse'
                    },
                    {
                        item: 'Weitere Tools',
                        link: '#weitere'
                    },
                    {
                        item: 'Umfassende Überprüfung',
                        link: '#umfassend'
                    },
                ],
                videoID: 'onlinetool',
                videoTitle: 'Gratis SEO Analyse mit dem Online Tool (2023 Update)',
                videoURL: 'https://www.youtube.com/embed/lvWuXcvtEm8',
                videoDescription: 'Finden Sie mit unserer SEO Analyse heraus, wie es um Ihr Marketing steht! Füllen Sie die untenstehenden Informationen aus und Sie werden innerhalb einer Stunde eine detaillierte Analyse zu den wichtigsten Onpage-Faktoren Ihrer Website erhalten.',
                videoDescription2: 'Wie die meisten Online Tools verwenden wir auch den SEO Score, eine Prozentzahl von 0% bis 100%, welche als Referenzwert für den Fortschritt der Optimierung einer Website verwendet werden kann.',
                videoThumbnail: seoAnalyseTop,
                bannerImage: seoAnalyseCTAImage,
                bannerImageDesc: 'CTA Banner',
                bannerLink: '/resources/onpage-analyse',

                listId: 'bericht',
                listTitle: 'Individuellen Bericht innert kürzester Zeit - nachfolgend ausfüllen',
                listDescription: 'Was beinhaltet diese Gratis Analyse?',
                listItems: [
                    {
                        data: 'Den Gesamtscore der Seite in % - eine Bewertung von 0% bis 100%'
                    },
                    {
                        data: ' Die Anzahl überprüften Unterseiten Ihrer Webseite und wieviele Fehler dort vorhanden sind'
                    },
                    {
                        data: 'Anzahl Fehler, Warnungen und Anmerkungen'
                    },
                    {data: ' Die drei wichtigsten Fehler / Top 3 Fehlerbeschreibungen'}

                ],
                listDescription2: 'Mit der Eingabe Ihrer Daten durchsucht unser Tool Ihre Webseite und prüft 120 technische Onpage Kritieren um darin Fehler zu identifizieren. Aus dem Gesamtergebnis wird ein Score errechnet, der in einer Prozentzahl ausgedrückt wird.',
                listDescription3: 'Mit unserem kostenlos Tool finden Sie Baustellen in Ihrer Website, an denen Sie arbeiten sollten. Wenn Sie erfahren wollen, wie man eine manuelle detaillierte Überprüfung selber machen kann, dann lesen Sie hier weiter.',

                textblockTitle: 'Checkliste zur Onpage Optimierung',
                textBlock: 'Eine automatisierte Analyse mit einem Online Tool kann keine umfassende SEO-Analyse durch einen Menschen ersetzen.',
                textBlock2: 'Wenn Sie sich weiter in das Thema einarbeiten möchten, haben wir hier die passende Checkliste zusammengestellt. Es handelt sich um Onpage Optimierungskriterien, die aktuell relevant sind.',
                textBlock3: '',

                itemsCheckId: 'checkliste',
                itemstitleH2: 'Checkliste zur Onpage Optimierung',
                itemsDesc1: 'Eine automatisierte Analyse mit einem Online Tool kann keine umfassende SEO-Analyse durch einen Menschen ersetzen.',
                itemsDesc2: 'Wenn Sie sich weiter in das Thema einarbeiten möchten, haben wir hier die passende Checkliste zusammengestellt. Es handelt sich um Onpage Optimierungskriterien, die aktuell relevant sind.',
                itemsTitleH3: 'Checkliste gründliche \n SEO - Website - Analyse',
                itemsLeftSubtitle1: 'Meta Angaben und URL',
                itemsLeft: [

                    {
                        data: 'Hat der Title Tag Die richtige Lange',
                    },
                    {
                        data: 'Hat die Meta Description die richtige Lange',
                    },
                    {
                        data: 'Crawkbarkeit: Gibt es Problem mit dem Zugiff auf die Webseite',
                    },
                    {
                        data: 'Wurden die Cononical Angaben ruchtig gemacht',
                    },
                    {
                        data: 'Ist die Sprache richting eingestellt',
                    },
                    {
                        data: 'Ist die URL SEO freundlich',
                    },
                    {
                        data: 'Sind weitere Angaben Wie viewport, robots, favicon, etc korrekt',
                    },],
                itemsrightSubtitle: 'Content',
                itemsRight: [
                    {
                        data: 'Wie viele Worter befinden sich auf der Seite',
                    },
                    {
                        data: 'Keyword -Analyse: Wurden die richtigen Themen verwndet',
                    },
                    {
                        data: 'Sind die Textinhalte leicht lesbar',
                    },
                    {
                        data: 'Werden die richtigen Medien Fur das Thema verwendet',
                    },
                    {
                        data: 'Sind die inhaltlich relevanten Markups gesetzt',
                    },
                    {
                        data: 'Ist det Content unsperched und Mobile friendly ',
                    },


                ],
                itemsrightSubtitle2: 'Webseiten Struktur',
                itemsRight2: [
                    {
                        data: 'Sind die Überschriften richtig gewählt worden',
                    },
                    {
                        data: 'Ist die Interne Verlinkung korrekt',
                    },
                    {
                        data: 'Haben alle Links einen Linktext',
                    }


                ],
                itemsrightSubtitle3: 'Serverkonfiguration',
                itemsRight3: [
                    {
                        data: 'Ist die HTTP Weiterleitung korrekt umgesetzt',
                    },
                    {
                        data: 'Wird der Code mit gängigen Methoden komprimiert',
                    },
                    {
                        data: 'Wie ist die Antwortzeit des Servers',
                    }


                ],
                itemsrightSubtitle4: 'Performance',
                itemsRight4: [
                    {
                        data: 'Ist die PageSpeed der Webseite wettbewerbsfähig',
                    },
                    {
                        data: 'Hat es Ressourcen, die die Ladezeit negativ beeinträchtigen',
                    },
                    {
                        data: 'Werden moderne Bildformate verwendet',
                    },
                    {
                        data: 'Wie sieht es mit den Web Core Vitals aus'

                    }


                ],
                // itemsRightBottomText: 'Bei Unklarheiten bezüglich den Begrifflichkeiten, lesen Sie zuerst unseren Beitrag zum Thema',
                
                faqSection: '',
                contentStripT: 'Mit Sandro Huber und Team eine professionelle Analyse starten!',
                contentStripD: '                    Melden Sie sich jetzt für eine Potentialanlyse und erfahren Sie, was die nächsten Schritte in "Seite 1 bei Google" sind.',
                contentStripBT: 'Jetzt anfragen',
                boxesData: processWebsiteAnalysis,
                
                textanalyseTitle: 'Die Basis für Online Erfolg',
                textanalyseText: 'Wir gratulieren Ihnen zur Erkenntnis, dass Sie eine Analyse für die organische Suche bei Google benötigen. Sie haben einen essentiellen Punkt in der Planung überwunden - sprich die Notwendigkeit und die Effektivität von SEO zu erkennen.',
                textanalyseText2: 'Vielerorts ist das Verständnis für professionelle Optimierung von Webseiteninhalten nicht vorhanden. Um wettbewerbsfähig im eigenen Markt zu bleiben, sollte man sich mit solchen Themen auseinandersetzen. \n\nDer SEO Check ist nur ein Grundstein, der neue Ideen aufdecken kann, mit welchen man die Konkurrenz im Internet und damit generell im Markt hinter sich lassen kann. Dieser Beitrag gibt Ihnen eine Übersicht über den ersten Teilschritt in einem SEO-Projekt.',
                textanalyseQuote: 'Um schnelle Ergebnisse im Google Ranking zu erreichen, braucht es eine fundiertere Überprüfung der und die Einstufung der Prioritäten bezüglich',
                textanalyseLink: 'was-ist-seo',
                textanalyseLinktext: 'Suchmaschinenoptimierung'
            },

          
            
            {
            slug: 'seo-kosten',
                shortTitle: 'SEO-Kosten: Mit welchen Preisen sollte man rechnen',
                title: 'SEO-Kosten: Mit welchen Preisen sollte man rechnen',
                description: 'In Gesprächen mit potentiellen Kunden werden wir immer wieder mit der Frage konfrontiert, wie viel denn SEO kostet.\n\nZu Beginn einmal, SEO ist nicht kostenlos! Auch wenn Sie es selbst machen, kostet die Zeit, die Sie dafür aufwenden. Es gibt keine Tricks, mit denen man SEO automatisieren kann.',
                image: seoKostenImage,
                imageAlt: 'Wie viel kostet SEO',
                readMoreUrl: '/seo/seo-kosten',
                date: '9.03.2022',
                readingTime: '10min Lesedauer',
                cta: 'Was kostet SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                
               
            
            },

            

            {
                slug: 'seo-strategie',
                shortTitle: 'SEO-Strategie entwickeln',
                title: 'Eine SEO-Strategie entwickeln',
                description: 'Die 10 Bausteine einer SEO-Strategie. Wie Sie Ihre Webseite anhand eines ✅Projektplans strategisch optimieren können.',
                image: seoStrategieImage,
                imageAlt: 'Eine SEO-Strategie entwickeln',
                readMoreUrl: '/seo/seo-strategie',
                date: '15.09.2021',
                update: '15.09.2021',
                readingTime: '7min Lesedauer',
                cta: 'SEO-Strategie',
                author: 'Sandro Huber',
                authorImage: sandro,
            },

            {
            slug: 'local-seo',
                shortTitle: 'Local SEO für lokale Unternehmen',
                title: 'Local SEO für lokale Unternehmen (Tipps & Checkliste)',
                description: 'Innert weniger Sekunden können Sie in der heutigen Zeit über die Suchmaschine Google einen lokalen Service finden. Gemäss der Mobile Search Trends Studie von Google beziehen sich ein Drittel der Suchanfragen auf eine Suche bezüglich einer lokalen Dienstleistung.',
                image: localSEOImage,
                imageAlt: 'Local SEO',
                readMoreUrl: '/seo/local-seo',
                date: '26.04.2021',
                update: '26.04.2021',
                readingTime: '11min Lesedauer',
                cta: 'Local SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                },

            {
                slug: 'seo-tools-blog',
                shortTitle: '5 SEO Tools, die man kennen sollte',
                title: '5 SEO Tools, die man kennen sollte',
                description: 'Haben Sie schon davon geträumt, mit einem SEO-Tool über Nacht ganz an die Spitze der Suchergebnisse zu kommen? In diesem Artikel erfahren Sie wie das geht. Natürlich nicht! Bei SEO geht es um Keywords, um Rankings und um Optimierungspotentiale, bei deren Themen-Umfang viele Marketingverantwortliche und Selbstumsetzer an Ihre Grenzen stossen.',
                image: seotoolsImage,
                imageAlt: '5 SEO Tools',
                readMoreUrl: '/seo/seo-tools-blog',
                date: '15.03.2022',
                update: '15.03.2022',
                readingTime: '2min Lesedauer',
                cta: 'SEO-Tools',
                author: 'Sandro Huber',
                authorImage: sandro,
                category: 'Ratgeber',
                categoryUrl: '/blog',
            }
            

                
        ],
                

    },
    'content': {
        name: 'Content',
        alias: 'content',
        posts: [

            {
            slug: 'content-marketing',
                shortTitle: 'Ein Content Marketing Ratgeber',
                title: 'Ein Content Marketing Ratgeber',
                description: 'In diesem umfassenden Guide erklären wir die Grundlagen von Content Marketing und ob es wichtig ist. Und wie es anhand einiger Tipps im Marketing eingesetzt werden sollte.',
                image: contentMarketingImage,
                imageAlt: 'Content Marketing',
                readMoreUrl: '/content-marketing/content-marketing',
                date: '08.07.2022',
                update: '08.07.2022',
                readingTime: '15min Lesedauer',
                cta: 'Was ist Content Marketing',
                author: 'Sandro Huber',
                authorImage: sandro,
            },
            {
               slug: 'tiktok-nutzer',
                shortTitle: 'TikTok Zahlen 2022',
                title: 'TikTok Zahlen 2022',
                description: '',
                image: tiktokImage,
                imageAlt: 'TikTok Zahlen 2022',
                readMoreUrl: '/seo/seo-kosten',
                date: '11.04.2022',
                update: '11.04.2022',
                readingTime: '7min Lesedauer',
                cta: 'TikTok Nutzerzahlen',
                category: 'Ratgeber',
                categoryUrl: '/blog',
                author: 'Sandro Huber',
                authorImage: sandro,
            },
            

        ]
    },

    
    'ecommerce': {
        name: 'E-Commerce',
        alias: 'ecommerce',
        posts: [
            {
                slug: 'online-shop-seo',
                shortTitle: 'Mit Online-Shop SEO das Ranking bei Google verbessern',
                title: 'Online-Shop SEO perfektionieren (inkl. Checklisten)',
                description: 'Diese SEO-Massnahmen machen deinen Online-Shop bei Google erfolgreich! ✪Tipps zu Keywords & Shopsystem.',
                image: seoOnlineshop,
                imageAlt: 'Online Shop SEO',
                readMoreUrl: '/ecommerce/online-shop-seo',
                date: '03.03.2022',
                readingTime: '21min Lesedauer',
                cta: 'Online Shop SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                
                
            
            },
        ]
    }
};
