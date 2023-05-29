import React from 'react';
import Image from "next/image";
import Link from "next/link";
import checkGreenIcon from '../../../assets/icons/check-green.svg';
import exploreIcon from '../../../assets/icons/explore.svg';
import transparencyIcon from '../../../assets/icons/transparency.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const itemsLeft = {
    icon: exploreIcon,
    title: '',
    description: 'Auch die Google-Webmaster-Tools bieten einige Funktionen an, welche im Context mit den Funktionen der obigen Tools nützlich sind:',
    pointsData: [
        [
            { link: false, data: 'Google Search Console'},
            { link: true, url: 'https://search.google.com/search-console/about?hl=de', data: 'Zum Tool'},
          
        ],
        
        [
            { link: false, data: 'Google Keyword-Planer'},
            { link: true, url: 'https://ads.google.com/nav/selectaccount?euid=417683484&__u=4083897916&authuser=0&dst=/aw/keywordplanner/&sourceid=emp&subid=ch-de-et-g-aw-c-home-awhp_xin1_signin!o2', data: 'Zum Tool'},
        ],

        [
            { link: false, data: 'Google Natural Language'},
            { link: true, url: 'https://cloud.google.com/natural-language', data: 'Zum Tool'},
        ],
        [
            { link: false, data: 'Weitere SEO-Tools von uns'},
            { link: true, url: 'https://shdigital.herokuapp.com/seo-tools', data: 'Zur Webseite'},
        ],
    ]
}



const MoreInterestingPosts = ({sectionid}) => {
    return (
        <section id={sectionid} className="more-interesting-posts container">
            <div className="title-wrapper md:flex items-center justify-between">
                <FramerMotionAnimation type="h2" className="title">Weitere interessante Tools</FramerMotionAnimation>
             
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
                                            { node.link ? <a href={node.url} title={node.data} className="text-link" target="__blank">{node.data}</a>
                                                : <span>{node.data}</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </FramerMotionAnimation>


            </div>
        </section>
    );
};

export default MoreInterestingPosts;
