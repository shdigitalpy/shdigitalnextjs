import improvementIcon from '../assets/icons/improvement.svg';
import jobDescriptionIcon from '../assets/icons/job-description.svg';
import webProgrammingIcon from '../assets/icons/web-programming.svg';
import logoutIcon from '../assets/icons/log-out.svg';
import webOptimizationIconIcon from '../assets/icons/web-optimization.svg';
import emailMarketingIcon from '../assets/icons/email-marketing.svg';
import MetaImage from '../assets/images/seo/title_tag_meta_description.jpg';
import Ladezeit from '../assets/images/seo/page-speed.jpg';
import ContentImage from '../assets/images/seo/content-marketing.webp';

export default {
    title: ['Technische Suchmaschinenoptimierung für Shops'],
    description: ['Lassen Sie sich nicht einreden, dass kleine technische Fehler die gesamten Google-Rankings auf einen Schlag ruinieren. Die technische Seite ist wichtig, man sollte sie aber nicht überbewerten. Aus Erfahrung mit Kunden wissen wir, dass vor allem grössere Brands viele kleine Fehler haben und trotzdem aufgrund der Markenstärke und umfassender SEO-Gesamtstrategie sehr gut bei Google positioniert sind. \n\nDas heisst nicht diesen Bereich zu vernachlässigen, aber treiben Sie technische SEO nicht unnötig auf die Spitze. Es gibt einige Standards, die Shops einhalten müssen und dies sollte bereits bei der Wahl des Shopsystems oder durch eine Eigenentwicklung auf hohem Niveau abgedeckt werden. Ein Shop sollte folgende Standards erfüllen:'],
    items: [
        {
            icon: improvementIcon,
            question: 'Server',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Verwenden Sie einen Server, der Ihren Anforderungen entspricht. Wählen Sie ein Hosting, welches Ihnen gute Performance bietet und welches skalierbar ist. Denn mit SEO müssen Sie davon ausgehen, dass langfristig deutlich mehr Besucher auf Ihren Onlineshop zugreifen. Die richtige Wahl des Servers kann auch andere technische Faktoren wie z.B. die Ladezeit begünstigen. \n\nVergleichen Sie Hostings verschiedener Anbieter auf Speicher, CPU Kerne, RAM und die Möglichkeiten zu Backups. Eigentlich ist jeder investierte Franken eine gute Investition.Den je besser der Server abschneidet, umso mehr Zufriedenheit beim Benutzer können Sie erreichen. Das reduziert auch die Anzahl negativer Nutzererfahrungen mit Ihrer Webseite. Moderne Server laufen mittlerweile auch für grössere Projekte sehr stabil in einer Cloud. ',
               
            },
        },
        {
            icon: jobDescriptionIcon,
            question: 'SSL und HTTPS',
            answer: {
                media: {
                    check: "image",
                    thumbnail: MetaImage, 
                },
                description: 'Um Zahlungsdaten zu verschlüsseln benötigt jeder Shop ein SSL-Zertifikat. Nach der Installation ist der gesamte Webverkehr zwischen dem Webserver und dem Webbrowser sicher. Sicherlich haben Sie schon davon gehört!',
                description2: 'Zur Verschlüsselung Ihres Shops sollte auch das HTTPS-Protokoll gehören. Google seit langem Webseiten mit HTTPS-Verschlüsselung besser ein als andere und es hat auch bekannt gegeben, dass dies einen Einfluss auf das Ranking hat. Das S von HTTPS steht für die Verschlüsslung via SSL.'
            },
        },
        {
            icon: webProgrammingIcon,
            question: 'Ladezeiten',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Die Problemfelder Ihres Onlineshops überprüfen Sie ganz einfach mit dem Pagespeed-Tool von Google.',
                description2: 'Man sollte grundsätzlich die Versionen der darauf basierenden Programmiersprachen regelmässig aktualisieren (z.B. von PHP 5 auf PHP 7). Zudem sollte der Webshop effizient programmiert sein und keinen überflüssigen Code enthalten. \n\nMit der Verwendung eines CDN kann man internationale Besucher schnell und einfach eine Version des Shops zur Verfügung stellen. Dabei wird der Webinhalt auf verschiedene Server am nächsten Standort des Benutzers gespiegelt. Dadurch kann dieser Inhalt viel schneller abrufen. Für Onlineshops auch sehr relevant ist die Bildgrösse, auf die wir gleich noch detailliert eingehen werden.'
            },
        },
        {
            icon: logoutIcon,
            question: 'Wichtige Nutzerfunktionen',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Paginierung:Bei einer grossen Anzahl von Produkten können nicht immer alle auf einer Seite angezeigt werden. Deshalb gibt es die Paginierung, die entweder mit Buttons Weiter und Zurück oder mit Seitenzahlen angibt, wo man sich aktuell im Shop befindet. Die Benutzer erhalten dann eine komprimierte Menge von Produkten auf einen Blick, sodass sich die Navigation einfacher gestaltet. Wenn man mit Zahlen arbeitet, muss man diese der Reihe nach implementieren, z.B. Seite 1, 2, 3, usw.',
                description2: 'Filter: Mit einem Produkt-Filter kann man z.B. das Sortiment eines Shops nach Belieben einschränken, um das beste Angebot für sich zu finden. In Sachen SEO muss man aufpassen, dass die Filterfunktion keine neuen URLs generiert, welche dann indexiert werden und als Duplicate Content abgestraft werden. Deshalb ist bei den Filtern immer ein Canonical-Tag zu setzten.'
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Canonical',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Das Canoncial-Tag sollte bei Onlineshops immer zum Einsatz kommen. Beispiele dafür sind z.B. Filter-Seiten, die neue URLs generieren oder Produktvarianten, die grundsätzlich um das gleiche Produkt drehen, allerdings ein leicht anderes Angebot darstellen.',
                description2: "Ein Shop hat ein Produkt XY, welches für CHF 5000.-- verkauft wird, nun erstellt man eine separate Seite für ein Aktionsangebot von CHF 3000.--. Die Beschreibung ist fast identisch, da es das gleiche Produkt ist, nun sollte man beim Original den Tag hinterlegen.",
           
            },
        },
       
        {
            icon: webOptimizationIconIcon,
            question: 'Bilder optimieren',
            answer: {
                media: {
                    check: "no",
                
                },
                description: 'Bei Bildern gibt es drei wichtige Dinge zu beachten: Das richtige Bildformat, der richtige Bildname und die richtige Bildgrösse. Das modernste Bildformat ist WEBP, damit kann eine hohe Qualität erreicht werden mit kleiner Bildgrösse. Unser Lieblingsapp um Bilder zu optimieren ist das squoosh app, es gibt jedoch noch Andere, die man auch verwenden kann.',
                description2: 'Für grössere Fotos gibt auch das Bildformat JPEG gute Resultate. Das PNG ist eigentlich nicht mehr notwendig, da transparente Bilder mit WEBP eingepflegt werden können. Es gibt Shopsysteme, die noch kein WEBP unterstützen, dann ist PNG sicherlich die richtige Variante. Für Logos kann man auch SVG benützen, dies kann in einem Programmiercode einfach verwendet und gesteuert werden. \n\nEin guter Bildname enthält genau das, was auf dem Bild zu sehen ist. Bei einem Produkt ist das der Produktname und weitere Attribute, die zu sehen sind. Aus Sicht von SEO empfiehlt sich zudem das betreffende Keyword einzubauen. Damit man auch der Suchmaschine zeigen kann, was auf dem Bild zu sehen ist. Wir könnten uns vorstellen, dass zukünftig der Bildname weniger wichtig wird, da die Bilderkennung durch Technologien wie künstlicher Intelligenz besser wird. \n\nIn Zeiten von zunehmenden Anforderungen bei den Ladezeiten wird die Bildgrösse immer wichtiger, denn ein Shop und die Produkte soll schnell geladen werden. Es macht also keinen Sinn ein 2000 Pixel Bild hochzuladen und dieses im Shop dann mit 200 x 200 Pixel anzuzeigen. Dies benötigt unnötige Ressourcen beim Laden der Seite. Aus unserer Sicht ist die manuelle Optimierung über Tools wie Squoosh App, Photoshop und Co. immer noch die effizienteste in Bezug auf Geschwindigkeit.',
               
            },
        },

        {
            icon: webOptimizationIconIcon,
            question: 'URL Länge',
            answer: {
                media: {
                    check: "no",
                
                },
                description: 'Die URL ist die Webadresse, auf der ein Produkt oder jede Seite aus Ihrem Shop abgerufen werden kann. Beachten Sie dabei folgende Tipps: Eine möglichst kurze URL verwenden, relevante Keywords einfügen, eine Struktur reinbringen und Wörter müssen mit - getrennt werden',
               
            },
        },

        {
            icon: webOptimizationIconIcon,
            question: 'Strukturierte Daten',
            answer: {
                media: {
                    check: "no",
                
                },
                description: 'Es handelt sich bei Strukturierten Daten um Fragmente im Onlineshop-Code, die Suchmaschinen dabei helfen, die Inhalte besser zu verstehen. Google gibt eine einfach zu verstehende Anleitung, wie man solche Daten implementieren kann. Für Onlineshops sind vor allem das Schema bezüglich Produkt, Angebot und Bewertungen relevant. Wichtig zu wissen ist, dass Google aus diesen Daten auch spezielle Suchergebnisse ausliest. Nur wenn man Strukturierte Daten im Onlineshop implementiert hat, wird man z.B. bei den Rich Snippets angezeigt.',
               
            },
        },
        
    ]
}
