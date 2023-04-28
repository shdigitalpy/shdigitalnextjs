import dummy1 from '../assets/images/dummy1.png';
import dummy2 from '../assets/images/dummy2.png';
import dummy3 from '../assets/images/dummy3.png';
import sandro from '../assets/images/blog/sandro.png';
import analyse from '../assets/images/blog/analyse.jpg';
import wasistseo from '../assets/images/blog/was-ist-seo-optimierung.jpg';

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
                introTitle: 'Was sagt Google zur Dauer?',
                introDescription: 'Aus einem Beitrag für die Search-Console Hilfe kann man entnehmen, dass Google offiziell sagt, dass man nach einer gestellten Indexierung bis zu einer Woche warten soll, bis man überhaupt überprüft, ob die Seite im “Index” ist.' + 'Wenn die Webseite neu ist, kann dies noch viel länger dauern. Google gibt an, dass es zwischen ein bis zwei Tagen und einigen Wochen dauern kann. Dies wurde auch im Zusammenhang mit der Indexierung beantragen Funktion in der Google Search Console erwähnt.'

            }
            
        ],
        contentlist : [

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
                cta: 'Mehr'
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
