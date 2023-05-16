import Head from 'next/head'
import {Inter} from 'next/font/google'
import FramerMotionAnimation from "../components/common/FramerMotionAnimation";

const inter = Inter({subsets: ['latin']})

export default function ThankYou() {

    return (
        <>
            <Head>
                <title>SH Digital - Vielen Dank</title>
                <meta name="description" content="SH Digital - Vielen Dank"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="thank-you-page">
                 <FramerMotionAnimation className="thank-you-msg text-center">
                    <h2 className="title">Vielen Dank für die Anfrage.</h2>
                     <p className="msg">Wir werden uns schnellstmöglich bei Ihnen melden.</p>
                </FramerMotionAnimation>
            </main>
        </>
    )
}
