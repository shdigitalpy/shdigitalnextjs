import React from 'react';
import Image from "next/image";
import Link from "next/link";
import checkGreenIcon from '../../../assets/icons/check-green.svg';
import exploreIcon from '../../../assets/icons/explore.svg';
import transparencyIcon from '../../../assets/icons/transparency.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const itemsLeft = {
    icon: exploreIcon,
    title: 'Weiterlesen interessante Beiträge',
    description: 'Hier finden Sie Beiträge, die aus unserer Sicht relevant sind zum vorliegenden Thema. Wenn Sie noch nicht genug haben, dann informieren Sie sich unter folgenden Links.',
    pointsData: [
        [
            { link: false, data: 'ANALYSE BEISPIEL'},
            { link: true, url: '/seo/seo-analyse', data: 'ZUM SEO-ANALYSE-BEISPIEL'},
          
        ],
        
        [
            { link: false, data: 'ALLE SEO THEMEN'},
            { link: true, url: '/blog', data: 'Zum SEO-Ratgeber'},
        ],
    ]
}

const itemsRight = {
    icon: transparencyIcon,
    title: 'Ähnliche Beiträge zum Thema',
    pointsData: [
        [
            { link: true, url: 'https://www.semrush.com/blog/how-long-does-seo-take/', data: 'How Long Does SEO Take to Show Results? (Englisch)'},
        ],
        [
            { link: true, url: 'https://blog.hubspot.de/marketing/wie-lange-bis-man-bei-google-rankt', data: 'Wie lange dauert es eigentlich, bis man bei Google rankt?'},
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
                                            { node.link ? <Link href={node.url} title={node.data} className="text-link">{node.data}</Link>
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
