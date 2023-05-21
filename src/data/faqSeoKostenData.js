import meeting from '../assets/images/meeting3.png';
import listIcon from '../assets/icons/list.svg';
import loaderIcon from '../assets/icons/loader.svg';
import cpuIcon from '../assets/icons/cpu.svg';

export default {
    items: [
        {
            icon: listIcon,
            question: 'Wie viel kostet SEO?',
            answer: {
                media: {
                    check: "no",
                    
                },
                description: 'Die Frage kann nicht generell beantwortet werden, es hängt davon ab, was man mit SEO erreichen möchte. Ob man einmalig investieren oder sich langfristig dafür festlegen möchte.',
                description2: 'Grundsätzlich beginnt eine monatliche Betreuung bei einer Agentur in der Regel ab CHF 1000.-- monatlich. Als Richtwert haben wir Ihnen in diesem Artikel die 3% des Umsatzes definiert.'
            }
        },
        {
            icon: loaderIcon,
            question: 'Ist SEO kostenlos?',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Nein - in keinem Szenario ist es kostenlos. Denn Sie müssen auch bei Selbstausführung die eigenen Stunden in Betracht ziehen. Wenn Sie denken, die Arbeiten als Wochenend-Hobby machen zu können, werden die Erfolge ausbleiben.'
            }
        },
            {
            icon: loaderIcon,
            question: 'Für wen lohnt sich SEO?',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Für alle Unternehmen mit Online-Kundengewinnung und einem bestehenden Umsatz. Wenn Sie ganz am Anfang sind, empfehlen wir nicht in SEO zu investieren. Optimierung für Suchmaschinen ist nicht dazu da, schnell und einfach Kunden zu gewinnen, sondern um eine langfristige Marktdominanz aufzubauen und das automatisierte SEO-Wachstum zu installieren.'
        }
    },
    ]
}
