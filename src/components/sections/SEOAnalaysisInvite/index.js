import React from 'react';
import Image from "next/image";
import EmailInputForm from "../../common/EmailInputForm";
import FramerMotionAnimation from "../../common/FramerMotionAnimation";
import working from '../../../assets/images/working1.png';
import curlyArtLeft from '../../../assets/images/curly-art-1.png';
import curlyArtRight from '../../../assets/images/curly-art-2.png';

const SEOAnalysisInvite = () => {
    return (
        <section className="seo-analysis-invite container relative">
            <FramerMotionAnimation className="image-wrapper">
                <Image src={working} alt="SEO Analysis" className="main-image" />
            </FramerMotionAnimation>
            <div className="content-wrapper container">
               <FramerMotionAnimation className="relative">
                   <h2 className="title font-semibold">
                       Machen Sie den ersten Schritt
                       in Richtung SEO optimierte Webseite
                   </h2>
                   <p className="description">
                       Es ist von großer Bedeutung, die Vorgaben der Suchmaschinenrichtlinien zu beachten, um den Erfolg Ihrer Website zu gewährleisten. Mit Hilfe des SEO-Checks werden sämtliche relevanten Kriterien untersucht und Ihnen Empfehlungen zur Verfügung gestellt, wie Sie Ihre Webseite nachhaltig optimieren können, um bei Suchmaschinen erfolgreich zu sein.
                   </p>
                   <FramerMotionAnimation
                       initial={{ opacity: 0, x:  50 }}
                       whileInView={{ opacity: 1, x:  0 }}
                       transition={{ duration: 0.3, delay:  0.4 }}
                       className="form-wrapper">
                       <EmailInputForm
                           placeHolder="E-Mail Adresse eingeben" inputClass="email-input"
                           btnText="Kostenlose Analyse anfordern" btnClass="submit-btn" />
                   </FramerMotionAnimation>
                   <Image src={curlyArtLeft} alt="curly art" className="curly-art art-1" />
                   <Image src={curlyArtRight} alt="curly art" className="curly-art art-2" />
               </FramerMotionAnimation>
            </div>
        </section>
    );
};

export default SEOAnalysisInvite;
