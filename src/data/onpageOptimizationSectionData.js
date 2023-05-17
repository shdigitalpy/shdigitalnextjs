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
    title: ['Onpage Optimierung'],
    description: ['Ein wesentlicher Bestandteil von technischen-SEO ist Onpage-Optimierung. Daher wird die Onpage-Optimierung gerne auch mit allen Belangen der technischen Optimierung von Webseiten gleichgesetzt. Die Onpage Optimierung befasst sich mit allen Massnahmen, die direkt auf der Webseite vorgenommen werden. Das Ziel ist die höhere Sichtbarkeit und ein besseres Ranking durch Onpage-Massnahmen. Schliesslich den User dazu zu bringen, die Suchanfrage in einer Transaktion abzuschliessen. Die Onpage Optimierung besteht grundsätzlich aus folgenden Teilbereichen:'],
    items: [
        {
            icon: improvementIcon,
            question: 'Webseitenstruktur',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Der Aufbau einer Webseite und die Struktur der URLs. Es gibt zwei Aspekte oder Zielgruppen in dieser Hinsicht, die beachtet werden müssen: Der Internetnutzer, Die Suchmaschine. Es soll für beide Anspruchsgruppen eine logische und optimale Webseitenstruktur gewählt werden. Eine kompetente Agentur wird eine Keyword-Map erstellen und daraus die Webseitenstruktur ableiten. Bei einer "Keyword-Map" werden Suchbegriffe aus der Keyword-Recherche einzelnen URLs auf der Webseite zugeordnet.',
                blockquote: 'Was wir immer wieder in Gesprächen mit unseren potenziellen Kunden erfahren ist, dass "traditionelle" Webdesigner immer noch weder Internetnutzer noch Suchmaschinen im Designprozess berücksichtigen. Vielmehr wird auf ein schönes und ästhetisches Webdesign geachtet, was natürlich miteinfliessen sollte, Ihnen jedoch finanziell nicht viel bringen wird. Aus diesem Grund bleibt meist eine Webseite dieser Webdesigner nach der Veröffentlichung auch ohne Benutzer.'
            },
        },
        {
            icon: jobDescriptionIcon,
            question: 'Page Title und Meta Description',
            answer: {
                media: {
                    check: "image",
                    thumbnail: MetaImage, 
                },
                description: 'Der Title Tag und der Seitenname sowie die Meta Description sind unsichtbare Bestandteile des Quellcodes einer Webseite. Diese Meta-Elemente werden im HTML Code als Metadaten ausgegeben. Das Google Suchergebnis, das "Google Snippet" besteht aus dem Title Tag und der Meta Description. Das Google Snippet muss relevant zur Suchanfrage sein und entsprechend gestaltet werden.',
                description2: 'Es gibt noch weitere Meta-Elemente, auf die wir in diesem Kontext nicht detaillierter eingehen können. Beispiele dafür sind z.B. Angaben zum Autor, Anweisungen an den Webcrawler, etc.'
            },
        },
        {
            icon: webProgrammingIcon,
            question: 'HTML Body und Text',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Die Webseite sollte die richtige Textlänge haben. Aus dem klassischen SEO-Kontext kennt man verschiedene Regeln, bei denen ein Text eine Länge x oder y haben sollte, diese Grundsätze sind veraltet.',
                description2: 'Die Textlänge ist abhängig von Thema und Suchintention der zu optimierenden Seite. Ein Vergleich mit der Konkurrenz kann helfen. Die Angebote unserer SEO-Texte-Agentur können helfen richtige Texte für Ihre Webseite zu verfassen. Es gibt neben der Textlänge noch weitere Faktoren, die man berücksichtigen muss.'
            },
        },
        {
            icon: logoutIcon,
            question: 'Interne Verlinkung',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Die interne Linkstruktur befasst sich mit den Links, die innerhalb der gleichen Webseite gesetzt werden. Man kann durch eine gute interne Verlinkung wichtige Seiten hervorheben. Generell sollten Links und Verweise gut lesbar sein.'
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Technische Optimierung: Crawling und Indexierung',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Verhindern von unnötigem Crawlen von Inhalten, welche nicht von externen gesehen werden sollen. Mit der robots.txt Datei kann gesteuert werden, welche Bereiche der Webseite für die Indexierung freigegeben werden sollen.',
                description2: "Die sitemap.xml hilft den Websuchmaschinen neuen Inhalt zu finden und zu indexieren. Vor allem bei umfangreichen Internetpräsenzen ist eine Sitemap unverzichtbar.",
                "blockquote" : "Crawling: Die Crawler “krabbeln” über Ihre Website und erfassen die Struktur und Inhalte, sofern durch die robots.txt nicht anders bestimmt. Dabei können sie erkennen, ob seit dem letzten Crawl neue Inhalte hinzugekommen sind oder bestehende Inhalte aktualisiert wurden.\n\nIndexierung: Die Suchmaschinen erhalten die gesammelten Informationen und werten sie aus. Dabei überprüfen sie, welche durch die Crawler gefundenen Inhalte in den Suchmaschinenindex aufgenommen werden (dürfen). Aussortiert werden z.B. mit dem noindex-Tag gekennzeichnete Inhalte oder solche, die die Suchmaschine für irrelevant hält.\n\nQuelle: https://www.xovi.de/seokompass/onpage/crawling/"
           
            },
        },
       
        {
            icon: webOptimizationIconIcon,
            question: 'Technische Optimierung: Ladezeiten Page Speed',
            answer: {
                media: {
                    check: "image",
                    thumbnail: Ladezeit,
                },
                description: 'Die Ladezeit ist die Zeit, die eine Webseite benötigt, um den Inhalt dem Betrachter auf dem Bildschirm zu zeigen. Dazu gehören alle Komponenten und der Quelltext. Von Google gibt es ein Tool, das sich Google PageSpeed Insights nennt. Es analysiert den Inhalt einer Webseite und erstellt dann Vorschläge zur Verbesserung der Geschwindigkeit dieser Seite.',
               
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Technische Optimierung: Mobile Optimierung / Mobile First',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Ab März 2021 wird der Google Bot nur noch die Mobile Version einer Webseite als Grundlage für das Suchmaschinenranking von Google crawlen. Somit kriegt die Mobile Optimierung noch einen grösseren Stellenwert, als dass es schon die letzten Jahre hatte. Alle Webseiten sollten auf Mobile umgestellt, Crawling Fehler behoben und mobile Ladezeiten optimiert werden.',
                description2: 'Mobile Responsive Design: Die Zeit für Responsive Webdesign ist definitiv gekommen, da die meisten Suchenden über das Mobile Endgerät kommen, müssen Webseiten auch auf Smartphones und Tabletcomputern korrekt angezeigt werden. Der grafische Aufbau für die Bildschirmgrösse der entsprechenden Geräte nennt man Mobile Responsive Design bei Smartphones. Jetzt zur Webagentur und Mobile-Optimierung umsetzen.'
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Technische Optimierung: Server-Erreichbarkeit',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Die Server-Erreichbarkeit des Webservers ist ein Onpage-Kriterium. Schlechte Erreichbarkeit des Servers kann dazu führen, dass es Probleme beim Abrufen der Inhalte durch die Suchmaschine gibt.',
                description2: "Bei den Core Web Vitals geht es generell um drei verschiedene Kennzahlen zur Nutzerfreundlichkeit:",
                "blockquote" : "Largest Contenful Paint (LCP): Wann ist das größte Element der Seite geladen. Idealer Zielwert < 2.5 Sekunden\n\nCumulative Layout Shift (CLS): Visuelle Stabilität beim Laden der Seite. Idealer Zielwert < 0.1\n\nFirst Input Delay (FID): Wie schnell reagiert die Website auf Nutzereingaben Idealer Zielwert < 100 Millisekunden"
           
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Technische Optimierung: SSL Secure Sockets Layer',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Die SSL Zertifikate sind Verschlüsselungsprotokolle bei der online Datenübertragung. Mithilfe des HTTPS Protokolls werden die Daten geschützt und verschlüsselt. Es garantiert den Websitebesuchern, dass die Daten nicht in falsche Hände geraten. Man erkennt die SSL-Verschlüsselung daran, dass die Adresszeile im Browser mit "https" beginnt.',           
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Technische Optimierung: Strukturierte Daten',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Strukturierte Daten werden in den Quelltext eingefügt und helfen den Suchmaschinen Webseiten zu lesen. Es handelt sich um Codeschnipsel, die sich um Themen wie z.B. "Events", "Personen", etc. drehen. Mit strukturierten Daten gibt ein Webmaster der Suchmaschine den Hinweis, was die Bedeutung der entsprechenden Seite ist.',
           
            },
        },
        {
            icon: emailMarketingIcon,
            question: 'Content Marketing',
            answer: {
                media: {
                    check: "image",
                    thumbnail: ContentImage
                },
                description: 'Das klassische Content Marketing ist dazu da, die Zielgruppe mithilfe von nützlichen Informationen zu den unternehmenseigenen Produkten oder Dienstleistungen anzusprechen. SEO-fokussiertes Content Marketing befasst sich mit dem Erstellen von Inhalten zur Optimierung von Rankings bei Websuchmaschinen. Dazu gehört der Content Plan und der Redaktionsplan der Inhalte einer Webseite, diese werden nachfolgend genauer beschrieben:',
                blockquote : 'Content Plan\n\nDer Content Plan ist das übergeordnete Planungsinstrument, indem die Ziele bezüglich der Inhalte festgelegt werden. Der Content Plan soll die einzelnen Phasen festhalten, die Kunden durchlaufen, bevor man sich für ein Produkt oder eine Dienstleistung entscheidet.\n\n Redaktionsplan: \n\n Der Redaktionsplan ist dann weitaus konkreter, da wird in einem Team festgelegt, wer welchen Text zu welchem Thema schreiben wird und bis wann (Deadline).\n\nBeispiel: Bei einer Long-Tail Keyword-Strategie werden pro Keyword monatlich Blogartikel verfasst. Ein SEO-Team teilt die entsprechenden Artikel unter den Mitarbeitern auf.'
            },
        },
    ]
}
