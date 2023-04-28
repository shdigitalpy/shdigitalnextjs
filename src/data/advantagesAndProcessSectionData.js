import meeting from '../assets/images/meeting2.png';
import clipboardIcon from '../assets/icons/clipboard.svg';
import timeIcon from '../assets/icons/time.svg';
import shieldIcon from '../assets/icons/shield.svg';
import forecastIcon from '../assets/icons/forecast.svg';
import strategyIcon from '../assets/icons/strategy.svg';
import tapeMeasureIcon from '../assets/icons/tape-measure.svg';
import successIcon from '../assets/icons/success.svg';

export default {
    title: ['Weshalb SH Digital'],
    mainImage: meeting,
    collapsibleBlocks: [
        {
            title: 'Ihre Vorteile mit SH Digital',
            collapsible: [
                {
                    id: 1,
                    icon: clipboardIcon,
                    title: 'Bewährte Kriterien',
                    content: 'Mit unserer Methode untersuchen wir Ihr Unternehmen anhand bewährter Kriterien. Dies erlaubt uns, Ihr Angebot gezielt zu platzieren und gleichzeitig für Ihre Kunden authentisch zu bleiben.',
                },
                {
                    id: 2,
                    icon: shieldIcon,
                    title: 'Die Geheimwaffe',
                    content: 'Anhand Ihrer Konkurrenz erfahren wir, was in Ihrer Branche funktioniert. Mit unserer Methode werden Sie in den Suchergebnissen besser auffindbar sein und Kunden kaufen schneller bei Ihnen.',
                },
                {
                    id: 3,
                    icon: timeIcon,
                    title: 'Schnelle Umsetzung',
                    content: 'Für Google Marketing haben wir die Prozesse, die bei anderen Unternehmen bereits erfolgreich im Einsatz sind und wir nur bei Ihnen einsetzen müssen.',
                }
            ]
        },
        {
            title: 'Wie funktioniert unsere Methode?',
            collapsible: [
                {
                    id: 4,
                    step: 'Schritt 1',
                    icon: forecastIcon,
                    title: 'Nachfrage erkennen',
                    content: 'Unsere SEO-Experten führen eine gründliche Keyword-Analyse durch, um Ihr Ranking in den Suchergebnissen zu verbessern.',
                },
                {
                    id: 5,
                    step: 'Schritt 2',
                    icon: strategyIcon,
                    title: 'Google Strategie',
                    content: 'Basierend auf dem Suchverhalten Ihrer Zielgruppe entwickeln wir ein Konzept, um Ihr Unternehmen schnell auf Seite 1 bei Google zu bringen.',
                },
                {
                    id: 6,
                    step: 'Schritt 3',
                    divider: true,
                    icon: tapeMeasureIcon,
                    title: 'Massnahmen umsetzen',
                    content: 'Sie können sich sicher fühlen, da wir bereits viele ähnliche Projekte erfolgreich umgesetzt haben und das notwendige Know-how und die Erfahrung haben, um Ihr Projekt erfolgreich abzuschließen.',
                },
                {
                    id: 7,
                    step: 'Schritt 4',
                    icon: successIcon,
                    title: 'Erfolgskontrolle',
                    content: 'Wir garantieren volle Transparenz, indem wir Ihnen übersichtliche Auswertungen mit allen Zahlen, Daten und Fakten zum Erfolg zur Verfügung stellen.',
                }
            ]
        }
    ]
};
