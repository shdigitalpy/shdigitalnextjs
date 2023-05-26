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
    description: 'Hier finden Sie Beiträge, die aus unserer Sicht relevant sind zum vorliegenden Thema. Wenn Sie noch nicht genug haben, dann informieren Sie sich unter folgenden Links.',
    pointsData: [
        [
            { link: false, data: 'NEUES DSG'},
            { link: true, url: 'https://www.axa.ch/de/unternehmenskunden/blog/sicherheit-und-recht/recht-und-justiz/neues-datenschutzgesetz.html', data: 'Beitrag von AXA'},
          
        ],
        
        [
            { link: false, data: '5 SCHRITTE MÜSSEN WEBSITE-BETREIBER UMSETZEN'},
            { link: true, url: 'https://www.cyon.ch/blog/neues-datenschutzgesetz-schweiz', data: 'Beitrag von Cyon'},
        ],

        [
            { link: false, data: 'NEUES SCHWEIZER DATENSCHUTZGESETZ 2022'},
            { link: true, url: 'https://www.webkinder.ch/insights/neues-schweizer-datenschutzgesetz-2022-was-muessen-webseitenbetreiber-und-firmeninhaber-wissen/', data: 'Beitrag von Webkinder'},
        ],
    ]
}



const MoreInterestingPosts = ({sectionid}) => {
    return (
        <section id={sectionid} className="more-interesting-posts container">
            <div className="title-wrapper md:flex items-center justify-between">
                <FramerMotionAnimation type="h2" className="title">Weiterlesen interessante Beiträge</FramerMotionAnimation>
                <FramerMotionAnimation type="p" className="description">Hier finden Sie Beiträge, die aus unserer Sicht relevant sind zum vorliegenden Thema. Wenn Sie noch nicht genug haben, dann informieren Sie sich unter folgenden Links.</FramerMotionAnimation>
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
