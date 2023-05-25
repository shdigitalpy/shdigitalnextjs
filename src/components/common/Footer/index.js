import React from 'react';
import Image from "next/image";
import footerData from "../../../data/footerData";
import Link from "next/link";
import Script from "next/script";

const Footer = () => {
    const {
        logo,
        reachUs,
        currentPosts,
        socialMedia,
        pursue,
        partnerImages,
        copyright,
    } = footerData;

    return (
        <footer className="footer container">
            <div className="main-wrapper md:flex">
                <div className="logo-wrapper">
                    <Image src={logo} alt="logo" width={140} height={97} />
                </div>
                <div className="address-wrapper">
                    <div className="footer-title">{reachUs.title}</div>
                    <div className="content">
                        { reachUs.address?.map((item, index) => <p key={index}>{item}</p>)}
                    </div>
                </div>
                <div className="posts-wrapper">
                    <div className="footer-title">{currentPosts.title}</div>
                    <div className="content">
                        { currentPosts.items?.map((item, index) => (
                            <div className="link" key={index}>
                                <Link href={item.url}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="social-links-wrapper">
                    <div className="footer-title">{socialMedia.title}</div>
                    <div className="content flex">

                        { socialMedia.items?.map((item, index) => (
                        <a target="__blank" href={item.url} title={item.name}><Image src={item.icon} alt={item.name} className="social-icon" key={index} /></a>
                        ))}
                    </div>
                </div>
                <div className="pursue-wrapper">
                    <div className="footer-title">{pursue.title}</div>
                    <div className="content">
                        { pursue.items?.map((item, index) => (
                            <div className="link" key={index}>
                                <Link href={item.url}>{item.name}</Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="images-wrapper flex justify-between">
                { partnerImages?.map((item, index) => (
                    <div className="image-container" key={index}>
                        <Image src={item.image} alt={item.name} width={200} height={116} />
                    </div>

                ))}
                <div className="rating-image" data-romw-token="3DBzI9TeO33a7z3RriVaPGNnpjbSEjYlAeQLpuudkx9zN4cW9b"/>





            </div>


            <div className="copyright-wrapper text-center">
                <p>{ copyright}</p>
            </div>

            <Script async
            src="https://reviewsonmywebsite.com/js/v2/embed.js?id=8e7313fc946fd3d8c15c886f791a7ab8"
            type="text/javascript"

        />
        </footer>
    );
};

export default Footer;
