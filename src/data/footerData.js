import logo from '../assets/images/logo.png';
import twitterIcon from '../assets/icons/twitter.svg';
import facebookIcon from '../assets/icons/facebook.svg';
import instagramIcon from '../assets/icons/instagram.svg';
import googlePartner from '../assets/images/google-partners.webp';
import leadinfo from '../assets/images/mainpage/leadinfo.webp';
import semrush from '../assets/images/mainpage/partner-badge.webp';
import swissMadeSoftware from '../assets/images/mainpage/swiss-made-software.webp';
import linkedinIcon from '../assets/icons/linkedin.svg';

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
                url: '/blog'
            },
            {
                name: 'Was ist SEO',
                url: '/seo/was-ist-seo'
            },
            {
                name: 'Online Shop Ratgeber',
                url: '/seo/online-shop-seo'
            },
            {
                name: 'SEO-Check',
                url: '/seo/seo-analyse'
            },
            
        ]
    },
    socialMedia: {
        title: 'SOCIAL MEDIA',
        items: [
            
            
            {
                name: 'Facebook',
                icon: facebookIcon,
                url: 'https://www.facebook.com/shdigitalch'
            },
            
            {
                name: 'LinkedIn',
                icon: linkedinIcon,
                url: 'https://www.linkedin.com/company/sh-digital-gmbh/'
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
        {
            name: 'SEMrush Partner',
            image: semrush
        },
        {
            name: 'Leadinfo Partner',
            image: leadinfo
        },
    ],
    copyright: {
        description: 'SH Digital © 2023',
        items: [
            {
                name: 'Impressum ',
                url: '/impressum'
            },
            {
                name: 'Datenschutz ',
                url: '/datenschutz'
            },
            {
                name: 'AGB ',
                url: '/agb'
            },
            
            
        ]
    }
}
