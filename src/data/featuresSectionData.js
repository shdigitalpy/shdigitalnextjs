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
            titleUp: 'Steigern Sie Ihre',
            titleBelow: 'Sichtbarkeit',
            description: 'Das Problem ist, dass alte Akquise-Methoden wie Außendienst oder Messebesuche heute nicht mehr so gut funktionieren wie früher. Dadurch fehlt Ihnen eine zuverlässige Neukundenquelle.',
            readMoreLink: '/',
        },
        {
            icon: usersIcon,
            titleUp: 'Hole Sie auf bei der ',
            titleBelow: 'Digitalisierung',
            description: 'Seit Längerem schauen Sie dabei zu, wie Ihre Konkurrenz zur immer größer werdenden Gefahr wird, während Sie das Gefühl haben, Ihr Unternehmen könnte „den Anschluss verpassen”.',
            readMoreLink: '/',
        },
        {
            icon: cpuIcon,
            titleUp: 'Füllen Sie Ihre eigene',
            titleBelow: 'Verkaufspipeline',
            description: 'Das Problem ist, dass alte Akquise-Methoden wie Außendienst oder Messebesuche heute nicht mehr so gut funktionieren wie früher. Dadurch fehlt Ihnen eine zuverlässige Neukundenquelle.',
            readMoreLink: '/',
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
