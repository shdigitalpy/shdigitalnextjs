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
     items: [
        {
            icon: improvementIcon,
            question: 'Linkable Assets für E-Commerce',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Ein Linkable Asset kann eine Infografik, ein Blogbeitrag oder ähnliches sein. Es wird zum Zwecke erstellt, möglichst viele andere Blogger, Webmaster, usw. dazu zu bringen, auf dieses "Asset" zu verlinken. Durch diesen Vorgang generiert man neue Backlinks für den eigenen Shop.',
               
            },
        },
        {
            icon: jobDescriptionIcon,
            question: 'Backlinkanalyse der Konkurrenz',
            answer: {
                media: {
                    check: "image",
                    thumbnail: MetaImage, 
                },
                description: 'Man analysiert die Konkurrenz, von welchen Quellen kriegen diese Backlinks. Dann versucht man einen Teil dieser Links nachzubauen. Um eine solche Analyse zu erstellen, benötigt es ein SEO-Tool wie z.B. ahrefs.com. Mit einem solchen Tool kann man sehr leicht die Konkurrenz auf Links durchleuchten.',
            },
        },
        {
            icon: webProgrammingIcon,
            question: 'Outreach Linkaufbau',
            answer: {
                media: {
                    check: "no"
                },
                description: 'Outreach bedeutet soviel wie, dass man E-Mails and Webseiten-Betreiber schreibt, ob man auf der entsprechenden Webseite einen Link bekommen kann. Dabei unterscheidet man zwischen Gastbeiträgen, Sponsored Content und Listings in Vergleichsseiten. Diese Art von Linkaufbau ist effektiv, weil die Links aus dem sogenannten "Body" der Webseite kommen.',
            },
        },
       
        
    ]
}
