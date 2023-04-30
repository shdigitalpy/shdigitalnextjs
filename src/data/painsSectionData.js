import layersIcon from "../assets/icons/layers.svg";
import usersIcon from "../assets/icons/users.svg";
import cpuIcon from "../assets/icons/cpu.svg";
import locazeLogo from "../assets/images/locaze-logo.png";
import workinLogo from "../assets/images/workin-logo.png";
import hakagerodurLogo from "../assets/images/hakagerodur-logo.png";
import crossworkslogo from "../assets/images/cross-works.png";

export default {
    title: 'Sichtbarkeit ist eine allgemeine Herausforderung für Hersteller, Dienstleister und Händler',
    cards: [
        {
            icon: layersIcon,
            titleUp: 'Keine',
            titleBelow: 'Online Anfragen',
            description: 'Sie bekommen online keine neuen Anfragen und sind auf den Zufall angewiesen?',
            readMoreLink: '/angebot',
        },
        {
            icon: usersIcon,
            titleUp: 'Grosse',
            titleBelow: 'Abhängigkeit',
            description: 'Sie haben eine grosse Abhängigkeit vom persönlichen Netzwerk und wenigen großen Bestandskunden?',
            readMoreLink: '/angebot',
        },
        {
            icon: cpuIcon,
            titleUp: 'Bisher ohne',
            titleBelow: 'Erfolg',
            description: 'Sie nutzen bereits MarketingKanäle wie Google oder LinkedIn bis jetzt ohne Erfolg?',
            readMoreLink: '/angebot',
        },
        {
            icon: layersIcon,
            titleUp: 'Keine datenbasierte',
            titleBelow: 'Strategie',
            description: 'Sie treffen die Entscheidung bei Ihrer Neukundengewinnung aus dem Bauch heraus?',
            readMoreLink: '/angebot',
        },
        {
            icon: usersIcon,
            titleUp: 'Starke',
            titleBelow: 'Unsicherheit',
            description: 'Sie wissen nicht, mit welcher Marketing-Strategie Sie Ihre Zielgruppe erreichen?',
            readMoreLink: '/angebot',
        },
        {
            icon: cpuIcon,
            titleUp: 'Zu lange',
            titleBelow: 'Sales-Cycles',
            description: 'Sie haben lange Sales-Cycles und können Neukunden nur über Monate/Jahre gewinnen?',
            readMoreLink: '/angebot',
        }
    ],
    logoWrapperTitle: 'Aktuelle Projekte',
    logos: [
        {
            alt: 'locaze logo',
            'link': 'https://locize.com/',
            image: locazeLogo
        },
        {
            alt: 'workin logo',
            'link': 'https://www.workin.ch/',
            image: workinLogo
        },
        {
            alt: 'hakagerodur logo',
            'link': 'https://www.hakagerodur.ch/',
            image: hakagerodurLogo
        },
        {
            alt: 'crossworks logo',
            'link': 'https://cross-works.net/',
            image: crossworkslogo
        }
    ]
};
