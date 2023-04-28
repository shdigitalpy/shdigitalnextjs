import React from 'react';
import Image from "next/image";
import Link from "next/link";
import magazine from '../../../assets/images/magazine.png';
import upRightArrowIcon from '../../../assets/icons/up-right-arrow.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const PostInMagazine = () => {
    return (
        <section className="post-in-magazine container bg-gray md:flex">
            <FramerMotionAnimation className="image-wrapper flex-1">
                <Image src={magazine} alt="magazine post" className="magazine-image" />
            </FramerMotionAnimation>
            <FramerMotionAnimation className="content-wrapper flex-1">
                <h1 className="title">Beitrag im Ostschweizer Wirtschaftsmagazin</h1>
                <p className="description">
                    «Unternehmen müssen verstehen, dass bezahlte Werbung bei Google nicht zwangsläufig
                    die einzige Option ist.»
                </p>
            
                    <a 
                    className="btn-primary read-link" 
                    href="https://www.leaderdigital.ch/news/wie-sandro-huber-mit-seiner-seo-dienstleistung-unternehmen-im-digitalen-vertrieb-unterstuetzt-8538.html"
                    title="Beitrag im Ostschweizer Wirtschaftsmagazin"
                    target="__blank"
                    >
                    Zum Artikel</a>
                    <Image src={upRightArrowIcon} alt="arrow" className="read-link-icon" />
                
            </FramerMotionAnimation>
        </section>
    );
};

export default PostInMagazine;
