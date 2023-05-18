import React, {useEffect, useState} from 'react';
import Head from 'next/head'
import Image from 'next/image';
import Link from 'next/link'
import logo from '../../../assets/images/logo.png';
import FramerMotionAnimation from '../FramerMotionAnimation';
import headerData from '../../../data/headerData';


const Header = () => {
    const [expanded, setExpanded] = useState(false);

    const { links } = headerData;

    useEffect(() => {
        if (expanded) {
            document.documentElement.style.overflowY = 'hidden';
        } else {
            document.documentElement.style.overflowY = 'auto';
        }
    }, [expanded]);

    return (

        <header className="container header flex items-center">
            <Link href={"/"} className="me-auto">
                <Image src={logo} alt={'logo'} className="logo-image" />
            </Link>
            <nav className={`nav-container desktop`}>
                <ul className="flex">
                    { links?.map((link, index) => (
                        <li key={index}>
                            <Link href={link.url} className={`${link.isButton ? 'nav-link-btn' : 'nav-link'}`}>
                                { link.name }
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <button className={`close-btn hamburger ${expanded ?  'is-active' : ''}`}
                    onClick={() => setExpanded(!expanded)}>
                <span className="line"/>
                <span className="line"/>
                <span className="line"/>
            </button>

            <nav className={`nav-container mobile ${expanded ? 'show' : ''}`}>
                {/*<Image src={logo} alt={'logo'} className="logo-image-nav me-auto" />*/}
                <ul className="flex flex-col lg:flex-row">
                    { links?.map((link, index) => (
                        <FramerMotionAnimation type="li"
                                               key={index}
                                               initial={{ opacity: 0, x: -50 }}
                                               whileInView={{ opacity: 1, x: 0 }}
                                               viewport={{ once: false }}
                                               transition={{ duration: 0.25, delay: 0.25 }} >
                            <Link href={link.url}
                                  onClick={() => setExpanded(false)}
                                  className={`${link.isButton ? 'nav-link-btn' : 'nav-link'}`}>
                                { link.name }
                            </Link>
                        </FramerMotionAnimation>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
