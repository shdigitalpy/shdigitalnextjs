import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import doubleDownArrow from '../../../assets/images/double-arrow-right-gray.png';
import arrowRight from '../../../assets/icons/arrow-right.svg';
import arrowRightOrange from '../../../assets/icons/arrow-right-orange.svg';

const contentList = [
    {
        item: 'Fazit zum Thema',
    },
    {
        item: 'Was sagt Google zur Dauer?',
    },
    {
        item: '3 Phasen eines SEO-Projekts',
    },
    {
        item: 'Häufige Fehler bei der Dauer',
    },
    {
        item: 'Wie lange dauert es im Detail?',
    },
    {
        item: 'Weiterlesen interessante Beiträge',
    },
    {
        item: 'Wie funktioniert Indexierung & Ranking?',
    },
    {
        item: 'Wie erscheint man ganz vorne bei Google?',
    },
    {
        item: 'Was beeinflusst die Dauer von SEO massgeblich?',
    },
];

const WhatGoogleSays = (post) => {
    return (
        
        <section className="what-google-says container bg-gray">
            <div className="title-description-wrapper">
                <FramerMotionAnimation className="title-wrapper">
                    <h2 className="title">{post.author}</h2>
                    <Image src={doubleDownArrow} alt="arrows" className="title-arrow-art" />
                </FramerMotionAnimation>
                <div className="description-wrapper">
                    <FramerMotionAnimation type="p">Aus einem Beitrag für die Search-Console Hilfe kann man entnehmen, dass Google offiziell sagt, dass man nach einer gestellten Indexierung bis zu einer Woche warten soll, bis man überhaupt überprüft, ob die Seite im “Index” ist.</FramerMotionAnimation>
                    <FramerMotionAnimation type="p">Wenn die Webseite neu ist, kann dies noch viel länger dauern. Google gibt an, dass es zwischen ein bis zwei Tagen und einigen Wochen dauern kann. Dies wurde auch im Zusammenhang mit der Indexierung beantragen Funktion in der Google Search Console erwähnt.</FramerMotionAnimation>
                </div>
            </div>
            <div className="table-content-wrapper bg-white">
                <div className="table-title-wrapper">
                    <h6 className="table-title">Inhaltsverzeichnis</h6>
                </div>
                <div className="content-list-wrapper">
                    { post.contentlist?.map((data, index) => (
                        <FramerMotionAnimation
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.1 }}
                            className="list-item"
                            key={index}>
                            <Image src={arrowRight} alt="arrow" className="arrow-icon arrow-black" />
                            <Image src={arrowRightOrange} alt="arrow" className="arrow-icon arrow-orange" />
                            { data.item }
                        </FramerMotionAnimation>
                    ))}


                </div>
            </div>
        </section>
      
    );
};

export default WhatGoogleSays;
