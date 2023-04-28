import logo from '../assets/images/logo.png';
import twitterIcon from '../assets/icons/twitter.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import googlePartner from '../assets/images/mainpage/google-partner.webp';
import swissMadeSoftware from '../assets/images/mainpage/swiss-made-software.webp';

export default {
    logo: logo,
    reachUs: {
        title: 'SO ERREICHEN SIE UNS',
        address: ['SH Digital GmbH\nMaurerstrasse 8, 8500 Frauenfeld\nagentur@sh-digital.ch', 'Einzugsgebiete: Ganze Schweiz \n(vor allem Thurgau, Winterthur, Zürich, St. Gallen, usw.)']

    },
    currentPosts: {
        title: 'AKTUELLE BEITRÄGE',
        items: [
            {
                name: 'Übersicht',
                url: '/'
            },
            {
                name: 'Was ist SEO',
                url: '/'
            },
            {
                name: 'Online Shop Ratgeber',
                url: '/'
            },
            {
                name: 'SEO-Check',
                url: '/'
            },
            
        ]
    },
    socialMedia: {
        title: 'SOCIAL MEDIA',
        items: [
            {
                name: 'Twitter',
                icon: twitterIcon,
                url: '/'
            },
            {
                name: 'Instagram',
                icon: instagramIcon,
                url: '/'
            },
            {
                name: 'Facebook',
                icon: facebookIcon,
                url: '/'
            },
            {
                name: 'Twitter',
                icon: twitterIcon,
                url: '/'
            },
        ],
    },
    pursue: {
        title: 'UNTERNEHMEN',
        items: [
            {
                name: 'Angebot',
                url: '/angebot'
            },
            {
                name: 'Über uns',
                url: '/agentur'
            },
            {
                name: 'Kontakt',
                url: '/contact'
            },
        ],
    },
    partnerImages: [
        
        {
            name: 'Partnered with Google',
            image: googlePartner
        },
        {
            name: 'Swiss made software',
            image: swissMadeSoftware
        },
    ],
    copyright: 'SH Digital © 2023 | Impressum | Datenschutz | AGB | Kontakt'
}
