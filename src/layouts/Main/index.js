import React from 'react';
import Head from 'next/head'
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FramerMotionAnimation from "../../components/common/FramerMotionAnimation";


const MainLayout = ({ children }) => {
    return (
        <>

        

            <FramerMotionAnimation
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}>
                <Header/>
            </FramerMotionAnimation>
            {children}
            <FramerMotionAnimation
                initial={{ opacity: 0, y: -50 }}
                whileInView={{ opacity: 1, y: 0 }}>
                <Footer />
            </FramerMotionAnimation>
        </>
    );
};

export default MainLayout;
