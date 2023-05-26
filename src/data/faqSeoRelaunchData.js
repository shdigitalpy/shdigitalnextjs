import meeting from '../assets/images/meeting3.png';
import listIcon from '../assets/icons/list.svg';
import loaderIcon from '../assets/icons/loader.svg';
import cpuIcon from '../assets/icons/cpu.svg';

export default {
    items: [
        {
            icon: listIcon,
            question: 'Wie lange sollte die URL sein?',
            answer: {
                media: {
                    check: "no",
                    
                },
                description: 'Eine gute Länge für die URL ist 75 Zeichen. Die Seiten mit längerer URL von 75 - 120 Zeichen werden auch indexiert, können aber zu Schwierigkeiten beim Ranking führen. In der URL sollten ein bis zwei Keywords enthalten sein. Diese sollen der Suchmaschine zeigen, um was es sich bei der Seite handelt.'
            }
        },
        {
            icon: loaderIcon,
            question: 'Ist die URL für SEO relevant?',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Ja, die ist URL ein wichtiger Rankingfaktor. Mit der URL hilft man Suchmaschinen, dein Onlineauftritt besser zu verstehen. Eine optimale URL wird sich positiv auf das Ranking der Webseite auswirken. Es lohnt sich also, sich mit dem Thema während des Relaunchs intensiv zu beschäftigen.'
            }
        },
  
    ]
}
