import meeting from '../assets/images/meeting3.png';
import listIcon from '../assets/icons/list.svg';
import loaderIcon from '../assets/icons/loader.svg';
import cpuIcon from '../assets/icons/cpu.svg';

export default {
    title: ['Häufig', 'gestellte Fragen'],
    items: [
        {
            icon: listIcon,
            question: 'Wie optimiere ich meinen Onlineshop?',
            answer: {
                media: {
                    check: "no",
                    
                },
                description: 'Analysieren Sie Ihren Onlineshop mit Bezug auf SEO und identifizieren Sie Schwachstellen. Beauftragen Sie dann einen Experten oder führen Sie selbst Massnahmen durch, um den gewählten Bereich z.B. Onpage zu bearbeiten. Eine Strategie dient als übergeordnetes Instrument zur koordinierten Planung und Umsetzung.',

            }
        },
        {
            icon: loaderIcon,
            question: 'Wie viele Keywords sollte pro Seite verwenden?',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Den Aufbau einer Seite anhand von Keywords empfehlen wir weder bei Webseiten noch bei Shops. Die Keywords sollten sich natürlich in den Inhalt einfügen. Mithilfe der Keyword-Map, bei der Keywords einer Seite zugewiesen werden, finden Sie das passende Keyword pro Unterseite. Die Keyword-Map erstellt man nach der Analyse der Suchbegriffe bzw. Keyword-Recherche. Die Anzahl Keywords pro Seite kann man nicht generell beantworten.'
            }
        },
            {
            icon: loaderIcon,
            question: 'Wie wird mein Online-Shop gefunden?',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Es gibt drei Möglichkeiten: Mithilfe von Google Ads und Google Shopping für die Platzierung bei Google bezahlen. Oder mithilfe von SEO bei den organischen Suchergebnissen nach vorne gelangen. Die beste Möglichkeit sind alle drei Varianten in Kombination, da sich diese optimal ergänzen und die Platzierung begünstigen.'
        }
    },
    {
            icon: loaderIcon,
            question: 'Was gibt es für Shop-SEO Tools?',
            answer: {
                media: {
                    check: 'no',
                },
                description: 'Die Tools unterscheiden sich nicht massgeblich von den normalen SEO-Tools. Für Onlineshops sind Tools interessant, die Suchmaschinenoptimierung im E-Commerce Bereich vereinfachen. Ein bekanntes Tool dabei ist Yoast, es hilft im Zusammenhang mit dem Shopsystem WooCommerce über WordPress dabei, SEO zu vereinfachen. Man kann dort Einstellungen vornehmen und Standard-Prozesse lancieren, die die Arbeit vereinfachen (nicht ersetzten!).'
        }
    },
    ]
}
