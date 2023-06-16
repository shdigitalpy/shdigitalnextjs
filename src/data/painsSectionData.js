import layersIcon from "../assets/icons/layers.svg";
import usersIcon from "../assets/icons/users.svg";
import cpuIcon from "../assets/icons/cpu.svg";
import locazeLogo from "../assets/images/locaze-logo.png";
import workinLogo from "../assets/images/workin-logo.png";
import geboshop from '../assets/images/clients/gebo-shop.webp';
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
            description: 'Sie haben eine grosse Abhängigkeit vom persönlichen Netzwerk und wenigen grossen Bestandskunden?',
            readMoreLink: '/angebot',
        },
        {
            icon: cpuIcon,
            titleUp: 'Bisher ohne',
            titleBelow: 'Erfolg',
            description: 'Marketingkanäle wie Google oder LinkedIn bringen bei Ihnen bisher keinen Erfolg?',
            readMoreLink: '/angebot',
        },
        {
            icon: layersIcon,
            titleUp: 'Keine datenbasierte',
            titleBelow: 'Strategie',
            description: 'Die Entscheidung bei der Neukundengewinnung treffen Sie aus dem Bauch heraus?',
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
            description: 'Sie haben lange Sales-Cycles und können Neukunden nur über Monate / Jahre gewinnen?',
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
            alt: 'gebo shop logo',
            'link': 'https://www.gastrokuehlung.ch/',
            image: geboshop
        },
        {
            alt: 'crossworks logo',
            'link': 'https://cross-works.net/',
            image: crossworkslogo
        }
    ]
};
