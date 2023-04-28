import dummy1 from '../assets/images/mainpage/softwareanbieter.webp';
import dummy2 from '../assets/images/mainpage/luxusanbieter.webp';
import dummy3 from '../assets/images/mainpage/design-agentur.webp';

export default {
    title: ['Die Erfolgsgeschichten', 'unserer Kunden'],
    cards: [
        {
            image: {
                name: dummy1,
                alt: 'client success story'
            },
            title: 'Fallbeispiel 1',
            description: 'Ein Softwareunternehmen aus Zürich steigerte den Traffic der firmeneigenen Website um 5\'000% seit April 2021 und verzeichnete einen signifikanten Anstieg an Online-Anfragen.',
            details: [
                { 'Kategorie:': 'B2B' },
                { 'Branche:': 'SaaS' },
                { '250': 'Keywords auf Seite 1' },
                { '10+': 'Anfragen pro Monat' }
            ]
        },
        {
            image: {
                name: dummy2,
                alt: 'client success story'
            },
            title: 'Fallbeispiel 2',
            description: 'Ein Luxusausstatter aus der Ostschweiz erreichte die Positionierung in den Top 3 bei Google und generierte damit Kundentermine direkt über die Webseite.',
            details: [
                { 'Kategorie:': 'Händler' },
                { 'Branche:': 'Wellness' },
                { '2000': 'Keywords auf Seite 1' },
                { '50+': 'Anfragen pro Monat' }
            ]
        },{
            image: {
                name: dummy3,
                alt: 'client success story'
            },
            title: 'Fallbeispiel 3',
            description: 'Fehlende Resultate im Online Marketing einer Sicherheitstechnik Firma konnten mit Seite-1-Rankings bei relevanten konkurrenzfähigen Keywords korrigiert werden.',
            details: [
                { 'Kategorie:': 'Hersteller' },
                { 'Branche:': 'Sicherheit' },
                { '100': 'Keywords auf Seite 1' },
                { '20+': 'Anfragen pro Monat' }
            ]
        }
    ]
}
