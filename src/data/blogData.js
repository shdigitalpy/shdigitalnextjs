import dummy1 from '../assets/images/dummy1.png';
import dummy2 from '../assets/images/dummy2.png';
import dummy3 from '../assets/images/dummy3.png';
import sandro from '../assets/images/blog/sandro.png';
import analyse from '../assets/images/blog/analyse.jpg';
import wasistseo from '../assets/images/blog/was-ist-seo-optimierung.jpg';
import alternateData from '../data/blogPostAlternateSectionData';
import chartPreview from '../assets/images/growth-preview.png';

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
                videoTitle : 'Erklärvideo',
                videoURL: 'https://www.youtube.com/embed/1YXnseEjaKs',
                videoDescription: 'Der “Index” oder “Google Index” ist die Gesamtzahl aller mit dem Googlebot gecrawlten Webseiten. Bei diesem Vorgang speichert Google Seiten ab, die dann in den Suchergebnissen als “SERP’s” angezeigt werden. Der Quellcode wird ausgelesen und an den “Index” gesendet. Täglich werden viele neue Seiten erfasst aber auch aus dem “Index” gelöscht. Die Google web crawlers springen von Link zu Link auf weitere Webseiten, welche damit ebenfalls erfasst werden. Verstösst eine Webseite massiv gegen die Webmaster-Richtlinien von Google, dann wird Sie aus dem “Index” entfernt."',
                alternateData : [
                {
                title: 'Heading Goes Here',
                 subTitle: 'Aus einem Beitrag für die Search-Console Hilfe kann man entnehmen, dass Google offiziell sagt, dass man nach einer gestellten Indexierung bis zu einer Woche warten soll, bis man überhaupt überprüft, ob die Seite im “Index” ist.',
                    dataRows: [
                {
                    image: chartPreview,
                    imageAlt: 'preview',
                    title: 'Situation',
                    description: 'Es ist beispielsweise der Ausgangspunkt für ein neues Projekt für ein Start-up oder ein neues Unternehmen. Man möchte bei der Gründung des Unternehmens oder während der Lancierung eines neues Produkts in SEO investieren. Oder die Ausgangslage ist eine bestehende aber selten aktualisierte Webseite, bei der bisher kaum Suchmaschinenoptimierung betrieben wurde.'
                },
                {
                    image: chartPreview,
                    imageAlt: 'preview',
                    title: 'Situation',
                    description: 'Es ist beispielsweise der Ausgangspunkt für ein neues Projekt für ein Start-up oder ein neues Unternehmen. Man möchte bei der Gründung des Unternehmens oder während der Lancierung eines neues Produkts in SEO investieren. Oder die Ausgangslage ist eine bestehende aber selten aktualisierte Webseite, bei der bisher kaum Suchmaschinenoptimierung betrieben wurde.'
                },
                {
                    image: chartPreview,
                    imageAlt: 'preview',
                    title: 'Situation',
                    description: 'Es ist beispielsweise der Ausgangspunkt für ein neues Projekt für ein Start-up oder ein neues Unternehmen. Man möchte bei der Gründung des Unternehmens oder während der Lancierung eines neues Produkts in SEO investieren. Oder die Ausgangslage ist eine bestehende aber selten aktualisierte Webseite, bei der bisher kaum Suchmaschinenoptimierung betrieben wurde.'
                },
            ]
                },
                ],
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



            ]
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
