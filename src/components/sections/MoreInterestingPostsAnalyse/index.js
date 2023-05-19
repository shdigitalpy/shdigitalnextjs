import React from 'react';
import Image from "next/image";
import Link from "next/link";
import checkGreenIcon from '../../../assets/icons/check-green.svg';
import exploreIcon from '../../../assets/icons/explore.svg';
import transparencyIcon from '../../../assets/icons/transparency.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import weitereTools from '../../../assets/images/seo/weitere-tools.jpg';



const itemsLeft = {
    icon: exploreIcon,
    title: '',
    pointsData: [
        [
            { link: true, url: 'https://www.sh-digital.ch/seo-analyse#seoanalyse-jetzt', data: 'Tool von SH Digital'},
            { link: false, data: '- es handelt sich um einen Onpage-Seitenaudit mit Handlungsempfehlung.'}
        ],
        [
            
            { link: true, url: 'https://seorch.de/', data:'Tool von SEORCH'},
            { link: false, data: '- es handelt sich um einen kompletten Seitenaudit'}
        ],
        [

            { link: true, url: 'https://www.seobility.net/de/seocheck/', data:'Tool von Seobility'},
            { link: false, data: '- es handelt sich um einen sehr ausführlichen Seitenaudit'}
        ],
        [

            { link: true, url: 'https://sitechecker.pro/de/', data:'Tool von Sitechecker Pro'},
            { link: false, data: '- es handelt sich um einen visuell gut dargestellten Seitenaudit'}
        ],
        [
            { link: true, url: 'https://pagespeed.web.dev/?utm_source=psi&utm_medium=redirect&hl=DE', data:'Google Pagespeed Tool'},
            { link: false, data: 'auch hilfreich für die Ladezeit der Webseite'}
        ],
    ]
}

const itemsRight = {
    icon: transparencyIcon,
    title: 'Ähnliche Beiträge zum Thema',
    pointsData: [
        [
            { link: false, data: 'How Long Does SEO Take to Show Results? (Englisch)'},
        ],
        [
            { link: false, data: 'Wie lange dauert es eigentlich, bis man bei Google rankt?'},
        ],
    ]
}

const MoreInterestingPosts = () => {
    return (
        <section className="more-interesting-posts container">
            <div className="title-wrapper md:flex items-center justify-between">
                <FramerMotionAnimation type="h2" className="title">Neben unserem Check könnten Sie noch diese SEO Analyse Online Tools verwenden</FramerMotionAnimation>
                <FramerMotionAnimation type="p" className="description">Für welches Tool Sie sich auch entscheiden mögen, es gibt viele interessante kostenlose Tools. Nachfolgend finden Sie eine Auswahl von uns.</FramerMotionAnimation>
            </div>

            <div className="content-wrapper bg-gray grid md:grid-cols-2">
                <FramerMotionAnimation
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="block-wrapper">
                    <Image src={itemsLeft.icon} alt="item icon" className="item-icon" />
                    <h4 className="item-title font-semibold">{ itemsLeft.title }</h4>
                    <div className="items-wrapper">
                        { itemsLeft?.pointsData.map((item, index) => (
                            <FramerMotionAnimation
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.25, delay: (index * 0.1) + 0.5 }}
                                key={index}
                                className="item-wrapper">
                                <Image src={checkGreenIcon} alt="green check" className="check-icon" />
                                <div className="item-description">
                                    { item.map((node, i) => (
                                        <React.Fragment key={i}>
                                            { node.link ? 
                                            <a href={node.url} 
                                            title={node.data} 
                                            className="text-link">
                                            {node.data}</a>
                                                : <span>{node.data}</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </FramerMotionAnimation>

               
            </div>
             <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-100 md:mt-0">
                            Oder lesen Sie unseren Beitrag für <Link href="/seo-tools" title="SEO-Tools" className="text-link">SEO-Tools</Link>, welche Werkzeuge generell für Strategien zur Optimierung verwendet werden können (nicht nur Onpage).

                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                           Das von Google verfügbare kostenlose Webseiten-Analyse Tool <b><a href="https://support.google.com/analytics/answer/9304153?hl=de&visit_id=638200961506877633-1607200046&rd=2" title="Google Analytics: Erste Schritte" className="text-link">Google Analytics: Erste Schritte</a></b> ist wohl dem einen oder anderen geläufig. Dort können die Daten von den Webseitenbesucher analysiert werden. Wie oft eine gewisse Seite angeklickt wurden oder die Gesamtanzahl von Besuchern auf der Webseite.
                            </FramerMotionAnimation>
                            <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            type="p" className="desc-md mt-50 md:mt-0">
                            Zuletzt hat Suchmaschinen Marketing den Vorteil, dass es, sofern es professionell aufgebaut wurde, recht nachhaltig ist. Das bedeutet, dass eine Position im Ranking bei Google, die einmal für einen Suchbegriff erreicht wurde, in der Regel stabil bleibt.
                            </FramerMotionAnimation>
                                <br /><br />

                     <FramerMotionAnimation
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 0.25 }}
                        className="block-wrapper">
                        
                            <h3 className="title"> Weitere Bereiche einer umfassenden SEO Überprüfung</h3>
                       
                            </FramerMotionAnimation>

                               


                                <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}

                            type="p" className="desc-md mt-50 md:mt-0">
                            In der professionellen Optimierung für Suchmaschinen unterscheiden wir zwischen einer Website-Onpage Analyse und weiteren Bereichen wie beispielsweise Analyse der Backlinks, Rankings oder Keywords, welche in der Regel nicht per Klick überprüft werden können.

                            Es gibt umfassendere Tools für Online Marketing, welche den gesamten Prozess abdecken. Wenn man in der Branche jedoch von einem Audit oder Analyse spricht, dann ist meistens die Onpage Optimierung gemeint.


                            </FramerMotionAnimation>
                                <br /><br />

                             <FramerMotionAnimation
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.25 }}
                            className="image-wrapper">
                            <Image src={weitereTools} alt="weitere Tools" className="main-image" />
                         </FramerMotionAnimation>
        </section>
    );
};

export default MoreInterestingPosts;
