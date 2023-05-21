import meeting from '../assets/images/meeting3.png';
import listIcon from '../assets/icons/list.svg';
import loaderIcon from '../assets/icons/loader.svg';
import cpuIcon from '../assets/icons/cpu.svg';

export default {
    items: [
        {
            icon: listIcon,
            question: 'Die Keywords richtig platzieren',
            answer: {
                media: {
                    check: "no",
                    
                },
                description: 'Das ist eine Aussage aus vergangenen Zeiten, heute funktionieren Suchmaschinen nicht mehr so. Es gibt keinen schnellen Erfolg, wenn nicht schon genügend Autorität für ein gewisses Thema vorhanden ist.'
            }
        },
        {
            icon: loaderIcon,
            question: 'Pro Keyword eine Seite erstellen',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Google denkt nicht mehr nur in Keywords, die Suchmaschine hat sich extrem weiterentwickelt und seinen Algorithmus verbessert. Eine richtig umgesetzte SEO-Strategie nach Themenbereich ist die Lösung, welche aber auch entsprechende Zeit benötigt. Dafür ist der langfristige Effekt umso grösser.'
            }
        },
            {
            icon: loaderIcon,
            question: 'Möglichst viele Backlinks',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Wenn man wirklich denkt, dass nur die Anzahl der Backlinks auf die eigene Webseite von Bedeutung ist, dann wird man die Dauer von Search Engine Optimization (kurz SEO) nicht verkürzen, sondern massiv verlängern. In Gesprächen mit potenziellen Neukunden haben wir immer wieder Abstrafungen aufgrund des Linkprofils gesehen. Die Reputation dieser Webseiten bei Suchmaschinen müssen dann durch unsere Agentur mühselig wiederhergestellt werde. Deshalb verzichten Sie von Anfang an am besten auf viele Backlinks ohne wirklichen Wert.'
        }
    },
    ]
}
