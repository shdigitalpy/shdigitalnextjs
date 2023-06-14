import Head from 'next/head'
import {Inter} from 'next/font/google'
import React from "react";
import FramerMotionAnimation from '../components/common/FramerMotionAnimation';


const inter = Inter({subsets: ['latin']})

export default function Custom404() {
    return (
        <>
            <Head>
                <title>404 Fehlerseite | SH Digital</title>
                <meta name="description" content="404 Fehlerseite | SH Digital"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

            </Head>
            <main className="custom-404-page" style={{ flexDirection: "column"}}>
                <h1 className="title">Diese Seite konnte nicht gefunden werden?</h1>
               
                 <h3 >Es tut uns Leid, die Webseite nach der Sie gesucht haben exisiert nicht.
                                </h3>
                            <p>Wir sind eine <a href="https://www.sh-digital.ch/" alt="SEO Agentur">SEO Agentur</a>.</p> 
           
            </main>

           
                               

        </>
    )
}
