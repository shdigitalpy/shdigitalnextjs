import taskActionIcon from '../assets/icons/task-actions.svg';
import implementationIcon from '../assets/icons/implementation.svg';
import readingBookIcon from '../assets/icons/reading-book.svg';

export default {
    title: 'Auf einen Blick',
    description: 'Starten Sie heute noch an mit der Überarbeitung Ihres Webauftritts:',
    cardsData: [
        {
            icon: taskActionIcon,
            title: 'Wann',
            description: 'Sie sollten die',
            linktext: 'bestehenden Richtlinien und Datenschutzerklärungen',
            link: 'https://www.kmu.admin.ch/kmu/de/home/fakten-trends/digitalisierung/datenschutz/neues-datenschutzgesetz-rev-dsg.html',
            description2: 'bis zum Inkrafttreten am 1. September 2023, anpassen.'
        },
        {
            icon: implementationIcon,
            title: 'Cookie Banner / Datenschutzerklärung',
            description: 'Genaue Angabe darüber, wer welche Daten für was und wie lange mit wem bearbeitet.',
           
            
        },
        {
            icon: readingBookIcon,
            title: 'Kantonale Abweichung',
            description: 'Jeder Kanton könnte noch weitere Gesetze erlassen, dazu ist noch nicht mehr bekannt.',

            
        },
        {
            icon: taskActionIcon,
            title: 'Unterschied zur EU / DSGVO',
            description: 'In der Schweiz muss nicht generell recht gefertigt werden, weshalb die Daten bearbeitet werden. Nur, wenn die Bearbeitungsgrundsätze nicht eingehalten werden.',

            
        },
        {
            icon: implementationIcon,
            title: 'Strafen für Private, Unternehmen',
            description: 'Es ist die Rede von Bussen zwischen CHF 50000.-- bis CHF 250000.--.',

            
        },

        {
            icon: implementationIcon,
            title: 'Google Analytics 4',
            description: 'Die aktuelle Datensammlung von Google Analytics 4 ist problematisch. Es erfolgt eine Anonymisierung, aber erst nach Weitergabe der Daten an das nächstgelegene Rechenzentrum also zu spät.',

            
        },
       
    ]
}
