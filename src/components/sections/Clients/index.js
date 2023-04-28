import React from 'react';
import Image from "next/image";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import arrigato from '../../../assets/images/clients/arrigato.png';
import autoInformatic from '../../../assets/images/clients/auto-informatik.png';
import hakaGerudor from '../../../assets/images/clients/haka-gerodur.png';
import fleischhandel from '../../../assets/images/clients/fleischhandel.png';
import schroderAdveq from '../../../assets/images/clients/schroder-adveq.png';
import ubs from '../../../assets/images/clients/ubs.png';
import elcode from '../../../assets/images/clients/elcode.png';
import bexio from '../../../assets/images/clients/bexio.png';
import i18next from '../../../assets/images/clients/i18next.png';
import swissQRreader from '../../../assets/images/clients/swissqrreader.png';
import locize from '../../../assets/images/clients/locaze.png';
import crossWorks from '../../../assets/images/clients/cross-works.png';


const data = [

    {
        name: 'Locize',
        image: locize
    },
    {
        name: 'Arrigato',
        image: arrigato
    },
    {
        name: 'Auto Informatic',
        image: autoInformatic
    },
    {
        name: 'Haka Gerudor',
        image: hakaGerudor
    },
    {
        name: 'Fleischhandel',
        image: fleischhandel
    },
    {
        name: 'Schroder Adveq',
        image: schroderAdveq
    },
    {
        name: 'UBS',
        image: ubs
    },
    {
        name: 'Elcode',
        image: elcode
    },
    {
        name: 'Bexio',
        image: bexio
    },
    {
        name: 'i18 next',
        image: i18next
    },
    {
        name: 'Swiss QR Reader',
        image: swissQRreader
    },
    {
        name: 'crossworks',
        image: crossWorks
    },
    
];

const Clients = () => {
    return (
        <section className="clients container bg-gray">
            <FramerMotionAnimation className="title-wrapper text-center">
                <h4 className="title-secondary">Kundenportfolio</h4>
                <h1 className="title">Wir waren tätig für</h1>
            </FramerMotionAnimation>
            <div className="content-wrapper flex">
                { data?.map((client, index) => (
                    <FramerMotionAnimation
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="logo-wrapper" key={index}>
                        <Image src={client.image} alt={client.name} className="client-logo" />
                    </FramerMotionAnimation>
                ))}
            </div>
        </section>
    );
};

export default Clients;
