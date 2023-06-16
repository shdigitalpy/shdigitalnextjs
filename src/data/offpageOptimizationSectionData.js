import logoutIcon from '../assets/icons/log-out.svg';
import webOptimizationIconIcon from '../assets/icons/web-optimization.svg';
import targetIcon from '../assets/icons/target.svg';
import MyBusinessImage from '../assets/images/seo/google-my-business-eintrag.jpg';


export default {
    title: ['Offpage Optimierung'],
    items: [
        {
            icon: logoutIcon,
            question: 'Linkaufbau',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Der Linkaufbau wird im Bereich „Search Engine Optimization“ auch Linkbuilding genannt, dabei geht es um die Zunahme der Anzahl Links von externen Webseiten auf die eigene Webseite. Dabei entsteht der Backlink, jemand hat auf Ihre Seite verlinkt oder anders herum verlinken Sie auf die andere Webseite, dann geben Sie den Backlink.',
                description2: 'Eine Verlinkung von einer anderen Webseite wird von Suchmaschinen grundsätzlich als positives Signal bewertet. Jedoch ist beim Linkaufbau auch auf die Qualität der Links zu achten. Ist der Link thematisch verwandt oder handelt es sich um Spam? Die besten Backlinks sind die organischen, welche man durch gute Inhalte einer Webseite natürlich aufbaut.'
            },
        },
        {
            icon: logoutIcon,
            question: 'Linkpopularität',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Die Gesamtzahl von Links, die auf eine einzelne Seite zeigen, nennt man Linkpopularität. Es ist die Anzahl Links relevant sowie die Qualität dieser Links. Dabei wird vor allem berücksichtigt, ob der Link thematisch relevant ist und ob diese Ursprungsseite ebenfalls wiederum selbst relevante Links bekommt.'
            },
        },
        {
            icon: logoutIcon,
            question: 'Social Media Links',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Eine mögliche Quelle von Backlinks können auch die sozialen Netzwerke sein, dabei wird von Facebook-Profilen oder Twitter-Posts auf die Webseite verlinkt. Dabei spricht man von Social Media Links. Diese sind vorwiegend nofollow-Backlinks (die Suchmaschinen verfolgen diese Backlinks nicht weiter), jedoch bringen die Social Media Links viel Trust, eine algorithmische Reproduktion von Vertrauen unter Personen. Sehr verbreitete Webseiten haben einen höheren Trust bei Suchmaschinen und die sozialen Netzwerke gehören in der Regel auch dazu.'
            },
        },
        {
            icon: webOptimizationIconIcon,
            question: 'Local-SEO',
            answer: {
                media: {
                    check: "image", 
                    thumbnail: MyBusinessImage
                },
                description: 'Google My Business Profil \nDer Google My Business Eintrag ist ein kostenloser Dienst, mit dem man die firmeneigenen Angaben in einem entsprechenden Fenster rechts bei Google anzeigen lassen kann. Der Eintrag enthält Informationen wie Fotos, Öffnungszeiten, Stosszeiten bei Ladengeschäften, Branche, Einzugsgebiet sowie die Anzahl Bewertungen von Kunden. Des Weiteren bietet Google My Business eine Navigation zur Kontaktaufnahme mit dem entsprechenden Unternehmen oder einen Link zur Route über Google Maps.\n\n Google Bewertungen \n Jeder kann bei Google ein Unternehmen bewerten, sofern man über ein Google Konto verfügt. Indem Sie auf dem Google-My-Business Eintrag auf Rezension schreiben klicken, können Sie das Unternehmen von eins bis fünf Sterne bewerten und einen Kommentar zur Bewertung schreiben.'
            },
        },
        {
            icon: targetIcon,
            question: 'Andere Verzeichniseinträge',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Als Linkquellen gibt es auch die lokalen Branchenverzeichnisse, in dem man sein Unternehmen mit den Basisdaten ähnlich dem Google My Business Eintrag eingeben kann. Dadurch erhöht sich die Bekanntheit eines Unternehmens im Internet, was von den Suchmaschinen positiv bewertet wird. Ein lokaler Brancheneintrag hilft potenziellen Kunden Ihre Webseite zu finden und signalisiert den Suchmaschinen, dass es sich dabei um ein echtes Unternehmen handelt. Bei solchen Einträgen sollte man auf Qualität achten, nicht jedes Verzeichnis eignet sich',
                description2: 'Lesen Sie weiter in unserem Guide für', 
                linktext: 'Local-SEO',
                linklocation: '/local-seo'
                
            },
        },
    ]
}
