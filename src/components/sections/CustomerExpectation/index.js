import React from 'react';
import Image from 'next/image';
import visibilityIcon from '../../../assets/icons/visibility.svg';
import handshakeIcon from '../../../assets/icons/handshake.svg';
import doubleDownArrow from '../../../assets/images/sharp-double-arrow-down.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const CustomerExpectation = () => {
    return (
        <section className="customer-expectation container">
            <div className="content-wrapper grid md:grid-cols-3">
                <div className="title-wrapper">
                    <FramerMotionAnimation type="h2" className="title">
                        Was können Sie erwarten?
                    </FramerMotionAnimation>
                    <FramerMotionAnimation type="p" className="description">
                        Die Komplett-Dienstleistung zur Steigerung der Google Rankings sowie eine Online-Vermarktung Ihres Brands.

                        Wir kümmern uns um die Entwicklung von Strategien und deren Umsetzung.

                        Suchen Sie nach mehr Neukunden oder wollen Sie die Wettbewerbsfähigkeit steigern? Lassen Sie sich von uns beraten.
                    </FramerMotionAnimation>
                    <FramerMotionAnimation>
                        <Image src={doubleDownArrow} alt="down arrows" className="down-arrows" />
                    </FramerMotionAnimation>
                </div>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="point-wrapper bg-gray">
                    <Image src={visibilityIcon} alt="point icon" className="point-icon" />
                    <h6 className="point-title font-semibold">Sichtbarkeit</h6>
                    <p className="description">
                       Akquise am Telefon oder die Hoffnung auf Empfehlungen wird für Unternehmen immer zur grösseren Herausforderung. Unsere Dienstleistung platziert Sie als Antwortgeber für Ihre Zielgruppe bei Suchmaschinen und Sie werden allgegenwärtig in Ihrem Markt. Dadurch gewinnen Sie zusätzlich neue Anfragen über die Webseite.
                    </p>
                </FramerMotionAnimation>

                <FramerMotionAnimation
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.25 }}
                    className="point-wrapper bg-gray">
                    <Image src={handshakeIcon} alt="point icon" className="point-icon" />
                    <h6 className="point-title font-semibold">Wettbewerbsfähigkeit</h6>
                    <p className="description">
                        Wenn man sich als Unternehmen auf existierende Geschäftsbeziehungen und Bestandskunden verlässt, ist die langfristige Wettbewerbsfähigkeit in Gefahr.
                    </p>
                </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default CustomerExpectation;
