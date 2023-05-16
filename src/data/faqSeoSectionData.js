import meeting from '../assets/images/meeting3.png';
import listIcon from '../assets/icons/list.svg';
import loaderIcon from '../assets/icons/loader.svg';
import cpuIcon from '../assets/icons/cpu.svg';

export default {
    title: ['Häufig', 'gestellte Fragen'],
    items: [
        {
            icon: listIcon,
            question: 'Wann kann man Resultate erwarten?',
            answer: {
                media: {
                    thumbnail: meeting,
                    videoUrl: '/'
                },
                description: 'Man unterscheidet zwischen Resultaten, die man als Kunde im Umsatz spürt und den ersten Resultaten in den Rankings nach Beginn einer Zusammenarbeit. Beides ist davon abhängig, mit welcher Ausgangslage ein Kunde zu uns kommt.\n' +
                    'In der Regel kann man sagen, je höher das Budget des Kunden ist, desto schneller können wir Resultate erreichen. Denn bei höherem Budget können wir mehr Arbeitsstunden in das Projekt stecken. Unsere Dienstleistung ist in verschiedene Pakete gegliedert, eine Übersicht finden Sie im folgenden Abschnitt. Zudem finden Sie dort die Statistik bzw. den Durchschnitt aller bisheriger Kunden, nachdem diese in einer Betreuung eins bis zwei Jahre Kunden waren.'
            }
        },
        {
            icon: loaderIcon,
            question: 'Welche Strategie ist die richtige?',
            answer: {
                media: {
                    thumbnail: meeting,
                    videoUrl: '/'
                },
                description: 'In der SEO-Betreuung wird zu Beginn ein Ziel festgelegt, anhand einer anfänglichen SEO-Analyse eine individuelle Strategie für Sie, Ihr Unternehmen, Ihre Produkte oder Ihre Dienstleistung zusammengestellt.\n' +
                    'Für Shops ist das Vorgehen leicht abweichend. Anhand der Strategie legen die Spezialisten von SH Digital fest, welche Massnahmen Priorität haben. Entsprechend gibt es einen Content- sowie Massnahmen-Implementierungsplan. Für weitere Informationen zum genauen Prozessablauf finden Sie in unserer SEO-Agentur.'
            }
        }
    ]
}
