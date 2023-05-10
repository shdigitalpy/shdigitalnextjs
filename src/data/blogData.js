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

export default {

     'resources': {
        name: 'Ressourcen',
        alias: 'resources',
        posts: [
        
            {
                slug: 'onpage-analyse',
                shortTitle: 'Wie Lange Dauert SEO',
                title: 'Kostenlose Website-Analyse – individuell und ausführlich',
                description: 'Wie stehen Sie Onpage technisch da? Welche ungenutzten Potenziale und Schwachstellen hat Ihre Website? Unsere Website-Analyse zeigt es Ihnen!',
                image: analyse,
                imageAlt: 'Blog post',
                readMoreUrl: '/blog/resources/post1',

                cta: 'Zur Onpage Analyse'
            },
        ]
    },

    'seo': {
        name: 'SEO',
        alias: 'seo',
        posts: [
            {
                slug: 'was-ist-suchmaschinenoptimierung',
                shortTitle: 'Was ist SEO',
                title: 'Was ist SEO',
                description: 'Möchtest du, dass deine Webseite von potenziellen Kunden gefunden wird? Dann ist SEO das A und O!',
                image: wasistseo,
                imageAlt: 'Was ist SEO',
                readMoreUrl: '/blog/seo/post1',
                date: '30.11.2021',
                readingTime: '25min Lesedauer',
                cta: 'Was ist SEO',
                author: 'Sandro Huber',
                authorImage: sandro,
                introTitle: 'Definition',
                introDescription: 'Bei SEO werden relevante Inhalte auf Webseiten platziert und mit benutzerfreundlichem Design sowie schneller Webtechnologie optimal für Besucher zugänglich gemacht. Mit den richtigen SEO-Massnahmen können Webseiten besser von Suchmaschinen gelesen werden, was die Platzierung in den Ergebnissen verbessert. Unternehmen nutzen Suchmaschinenoptimierung als Marketing, um weiter oben als die Konkurrenz in den Suchergebnissen platziert zu sein.',
                introId: 'wasistseo',
                contentList : [

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
                }, ],
                videoTitle : 'Kommentar vom Autor',
                videoURL: 'https://www.youtube.com/embed/1YXnseEjaKs',
                videoDescription: 'Vielen Dank, dass Sie auf meinen Artikel gestossen sind. Suchmaschinenoptimierung ist und bleibt im 2022 brandaktuell. Neben einem Guide für Einsteiger ins Thema möchte ich Ihnen die neusten Entwicklungen näherbringen.',
                videoDescription2 : 'Zudem findet sich zu jedem Themenbereich die Möglichkeit, sich noch detaillierter über ein Subthema zu informieren. Entsprechende Links sind pro Thema jeweils vorhanden, die auf die weiterführenden Seiten verweisen.',
                videoThumbnail: seoImage,
               

                listTitle: 'Aktuell', 
                listDescription: 'Was wird aktuell sein im 2022? Wenn man die Branche betrachtet gibt es aus unserer Sicht drei wichtige Themen, die im 2022 auf uns zukommen:',               
                listDescription2: 'Die Abkürzung SEO steht für „Search Engine Optimization“ – also zu Deutsch Suchmaschinenoptimierung. Umgangssprachlich wird es auch als die Optimierung der Google-Auffindbarkeit einer Webseite genannt. SEO ist ein Teilbereich aus dem Online Marketing, das im 2021 wieder an Relevanz gewonnen hat.',               
                listDescription3: 'Das Thema beschäftigt sich eigentlich ausschliesslich mit der Sichtbarkeit bei der größten Suchmaschine "Google", theoretisch können Optimierungsprozesse jedoch auch für alle anderen gängigen Suchmaschinen durchgeführt werden. Ein Fakt ist jedoch, dass SEO für Google in Bezug auf den Geschäftserfolg im Internet den größten Nutzen verspricht, deshalb steht die Suchmaschine meist im Vordergrund. Gemäss aktuellen Studien hat Google einen Marktanteil von über 90% im deutschsprachigen Raum.',
                listItems: [
                    {
                     data: ' Video Inhalte nehmen drastisch zu. Zum Thema Video haben wir einen ausführlichen Ratgeber unter Video-SEO.'
                            },
                    {
                        data: ' Kundenfokus: Die Customer Journey wird noch wichtiger'
                    },
                    {
                        data: 'Weg von Redaktionen: Content Creation wird dank AI viel effizienter und jedem zugänglich'
                    },
                    
                    ],

                imageData2 : {
                        
                        title: '',
                        subTitle: '',

                        dataRows: [
                        {
                        image: seoFakten,
                        imageAlt: 'Warum ist SEO für mein Unternehmen wichtig',
                        title: 'Warum ist SEO für mein Unternehmen wichtig',
                        description: 'Heutzutage ist es so, dass der Großteil der Menschen seine Informationen online über Suchmaschinen beschafft. Insbesondere, wenn konkrete Themen oder Produkte recherchiert werden sollen, sind die Suchmaschinen die ersten und wichtigsten Anlaufpunkte. Prozentzahlen zu der Nutzung des Internets in der Schweiz legen diese Fakten dar:'
                        },],

                    
                        smallSource: '(Quelle: seybold.de)',
                        justList : [

                        {
                        data: '85% aller Nutzer im Internet benutzen eine Suchmaschine',
                        
                        },

                        {
                        data: '90% der Internetnutzer betrachten nur die Suchresultate der ersten Seite',
                        
                        },


                        {
                        data: '75% aller Internetnutzer haben eine deutliche Kaufabsicht',
                        
                        },

                        {
                        data: '3.5 Milliarden Google-Suchanfragen weltweit pro Tag',
                        
                        },

                        {
                        data: '2 Billionen Google-Suchanfragen weltweit pro Jahr',
                        
                        },

                        {
                        data: '64 000 Google-Suchanfragen weltweit pro Sekunde',
                        
                        },

                        ]
                        },


               
                textblockTitle: 'Checkliste zur Onpage Optimierung',
                textBlock: 'Eine automatisierte Analyse mit einem Online Tool kann keine umfassende SEO-Analyse durch einen Menschen ersetzen.',
                textBlock2: 'Wenn Sie sich weiter in das Thema einarbeiten möchten, haben wir hier die passende Checkliste zusammengestellt. Es handelt sich um Onpage Optimierungskriterien, die aktuell relevant sind.',
                textBlock3: '',
                
                imageData4 : {
                        
                        title: 'Wie funktioniert SEO',
                        subTitle: 'Zunächst ist es für Interessierte vermutlich beruhigend zu wissen, dass es nicht in jedem Fall darum gehen muss, eine Webseite oder einen Online-Shop von Grund auf zu erneuern. Tatsächlich können bei guter Ausgangslage häufig kleinere aufeinanderfolgende funktionelle und inhaltliche Änderungen zum Erfolg führen. Es handelt sich dann um Verbesserungen, die aufeinander aufbauen und in ihrer Gesamtheit die Erfahrungen eines Nutzers, der auf einer Webseite navigiert, verbessern sollen.',

                        dataRows: [
                        {
                        image: imageSnippet,
                        imageAlt: 'Snippet',
                        title: '',
                        description: 'Neben der Verbesserung der Position in den Suchresultaten ist ein weiteres Ziel die Optimierung des Erscheinungsbildes des sogenannten Snippets. Ein Snippet (übersetzt: „Schnipsel“) ist die Kurzzusammenfassung einer Website. Es zeigt die Webseiten-URL, einen Title-Tag und die Meta-Beschreibung, ein sehr wichtiges und unterschätztes Tool.'
                        },],

                    
                        smallSource: '',
                        justList : [

                        

                        ]
                        },

                blockquoteTitle: 'Grundlagen: Ein laufenden Prozess',
                blockQuote: 'Die Optimierung für Suchmaschinen ist kein einmaliger Vorgang, bei dem einige Dinge an einer Webseite verändert werden können. Es ist wichtig, regelmässig Inhalte zu aktualisieren oder neue Inhalte zu erstellen. Die Erfahrung zeigt, dass die Suchmaschinen neuen qualitative Inhalte als positives Signal für die eigene Webseite bewerten.',
                blockQuote1: 'Zudem werden die Suchmaschinen durch dessen Ingenieure stets modernisiert, dies zeigen auch jüngste "Core-Updates" des Google Index (Anpassung des Suchalgorithmus). Die Webseiten müssen laufend und spätestens bei Lancierung von solchen Updates entsprechend angepasst sein. Aus diesen Gründen sind laufende Anpassungen für ein hohes Ranking bei Suchmaschinen erforderlich.',
                
                faqSection : '',



                    },
            {
                slug: 'seo-analyse',
                shortTitle: 'SEO Analyse',
                title: 'SEO Analyse',
                description: 'Möchtest du, dass deine Webseite von potenziellen Kunden gefunden wird? Dann ist SEO das A und O!',
                image: seoAnalyseImage,
                imageAlt: 'SEO Analyse',
                readMoreUrl: '/blog/seo/post1',
                date: '08.11.2022',
                readingTime: '5min Lesedauer',
                cta: 'SEO Analyse',
                author: 'Sandro Huber',
                authorImage: sandro,
                introTitle: 'Wie gut ist Ihre Webseite?',
                introDescription: 'Die Optimierung der Webseite für Suchmaschinen ist ein wichtiger Faktor um in der umkämpften Onlinewelt einen Platz am Tisch zu kriegen. Es gibt verschiedene Suchmaschinen Richtlinien, welche von einer guten Webseite eingehalten werden sollten. \n Die SEO Strategie ist massgeblich von korrekten Analysedaten abhängig. In diesem Ratgeber helfen wir Ihnen zu prüfen, wo bei Ihnen Chance und Potentiale für Optimierung sind. Korrekt umgesetzte Optimierungsmassnahmen können zur Steigerung des Rankings beitragen. \n Die Überprüfung der Webseite und die anschliessende Onpage-Verbesserung ist ein erster wichtiger Schritt, allerdings führen nur optimal aufeinander abgestimmte Massnahmen aus verschiedenen Bereichen z.B. Linkaufbau, Content-Design, etc. zu einem langfristigen Erfolg.',
                introId: 'wasistseo',
                contentList : [

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
                videoID : 'onlinetool',
                videoTitle : 'Gratis SEO Analyse mit dem Online Tool (2023 Update)',
                videoURL: 'https://www.youtube.com/embed/lvWuXcvtEm8',
                videoDescription: 'Finden Sie mit unserer SEO Analyse heraus, wie es um Ihr Marketing steht! Füllen Sie die untenstehenden Informationen aus und Sie werden innerhalb einer Stunde eine detaillierte Analyse zu den wichtigsten Onpage-Faktoren Ihrer Website erhalten.',
                videoDescription2 : 'Wie die meisten Online Tools verwenden wir auch den SEO Score, eine Prozentzahl von 0% bis 100%, welche als Referenzwert für den Fortschritt der Optimierung einer Website verwendet werden kann.',
                videoThumbnail: seoAnalyseTop,
                bannerImage: seoAnalyseCTAImage,
                bannerImageDesc: 'CTA Banner',
                bannerLink: '/blog/resources/onpage-analyse',
                
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
                    { data: ' Die drei wichtigsten Fehler / Top 3 Fehlerbeschreibungen'}
                    
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
                itemsTitleH3: 'Checkliste grundliche SEO - Website - Analyse',
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
                        {   data: 'Wie sieht es mit den Web Core Vitals aus'

                        }
                    

                    ],
                itemsRightBottomText: 'Bei Unklarheiten bezüglich den Begrifflichkeiten, lesen Sie zuerst unseren Beitrag zum Thema',
                itemsRightBottomText: 'Was ist SEO.',
                itemsRightBottomLink: '/blog/seo/was-ist-suchmaschinenoptimierung',
                faqSection : '',



                    }


            
        ],
       
    },
    'content-marketing': {
        name: 'Content Marketing',
        alias: 'content-marketing',
        posts: [
            {
                slug: 'post-13',
                shortTitle: 'Wie Lange Dauert SEO',
                title: 'Email localization: the key to unlocking global engagement',
                description: 'Ein Softwareunternehmen aus Zürich steigerte mit unserer Hilfe den Traffic der firmeneigenen Website um 5\'000% seit April 2021 und verzeichnete einen signifikanten Anstieg an Online-Anfragen.',
                image: dummy1,
                imageAlt: 'Blog post',
                readMoreUrl: '/blog/content-marking/post1',
                date: 'Mar 27, 2022',
                readingTime: '5 min read',
                cta: 'Mehr',

                contentList : [

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
            },



            ],
            },
            
        ]
    },
    'saas-marketing': {
        name: 'Saas Marketing',
        alias: 'saas-marketing',
        posts: [
            {
                slug: 'post-25',
                shortTitle: 'Wie Lange Dauert SEO',
                title: 'Best translation software tools for business growth',
                description: 'If you’re a business owner or manager looking to expand internationally the thought of managing the complexity of translation workflows, maintaining consistency, and. If you’re looking to expand your business for an international audience, you probably already know there are two ways to grow: paid channels and organic channels. One of the most.',
                image: dummy2,
                imageAlt: 'Blog post',
                readMoreUrl: '/blog/saas-marketing/post1',
                date: 'Jan 30, 2022',
                readingTime: '12 min read',
                cta: 'Mehr'
            },
            
        ]
    },
    'ecommerce-marketing': {
        name: 'E-Commerce Marketing',
        alias: 'ecommerce-marketing',
        posts: [
            {
                slug: 'post-37',
                shortTitle: 'Wie Lange Dauert SEO',
                title: 'Email localization: the key to unlocking global engagement',
                description: 'Ein Softwareunternehmen aus Zürich steigerte mit unserer Hilfe den Traffic der firmeneigenen Website um 5\'000% seit April 2021 und verzeichnete einen signifikanten Anstieg an Online-Anfragen.',
                image: dummy1,
                imageAlt: 'Blog post',
                readMoreUrl: '/blog/ecommerce-marketing/post1',
                date: 'Mar 27, 2022',
                readingTime: '5 min read',
                cta: 'Mehr'
            },
            
            {
                slug: 'post-48',
                shortTitle: 'Wie Lange Dauert SEO',
                title: 'Email localization: the key to unlocking global engagement',
                description: 'Ein Softwareunternehmen aus Zürich steigerte mit unserer Hilfe den Traffic der firmeneigenen Website um 5\'000% seit April 2021 und verzeichnete einen signifikanten Anstieg an Online-Anfragen.',
                image: dummy1,
                imageAlt: 'Blog post',
                readMoreUrl: '/blog/ecommerce-marketing/post1',
                date: 'Mar 27, 2022',
                readingTime: '5 min read',
                cta: 'Mehr'
            },
        ]
    }
};
