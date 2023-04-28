import React from 'react';
import Image from "next/image";
import Link from "next/link";
import checkGreenIcon from '../../../assets/icons/check-green.svg';
import exploreIcon from '../../../assets/icons/explore.svg';
import transparencyIcon from '../../../assets/icons/transparency.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const itemsLeft = {
    icon: exploreIcon,
    title: 'Weitere Bereiche im Thema erkunde',
    pointsData: [
        [
            { link: false, data: 'Wie geht man bei einer'},
            { link: true, url: 'https://google.com', data: 'SEO-Analyse'},
            { link: false, data: 'in der Planungsphase vor.'}
        ],
        [
            { link: false, data: 'Einige Begriffe nicht verstanden, das'},
            { link: true, url: 'https://google.com', data: 'SEO-Glossar'},
            { link: false, data: 'hilft weiter.'}
        ],
        [
            { link: false, data: 'Welche'},
            { link: true, url: 'https://google.com', data: 'SEO-Tools'},
            { link: false, data: 'sind die besten zum Thema?.'}
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
                                            { node.link ? <Link href={node.url} className="text-link">{node.data}</Link>
                                                : <span>{node.data}</span>}
                                        </React.Fragment>
                                    ))}
                                </div>
                            </FramerMotionAnimation>
                        ))}
                    </div>
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="block-wrapper">
                    <Image src={itemsRight.icon} alt="item icon" className="item-icon" />
                    <h4 className="item-title font-semibold">{ itemsRight.title }</h4>
                    <div className="items-wrapper">
                        { itemsRight?.pointsData.map((item, index) => (
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
                                            { node.link ? <Link href={node.url} className="text-link">{node.data}</Link>
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
