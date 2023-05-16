import Head from 'next/head'
import {Inter} from 'next/font/google'
import FramerMotionAnimation from "../components/common/FramerMotionAnimation";

const inter = Inter({subsets: ['latin']})

export default function ThankYou() {

    return (
        <>
            <Head>
                <title>SH Digital - Thank you</title>
                <meta name="description" content="SH Digital - Thank you"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="thank-you-page">
                 <FramerMotionAnimation className="thank-you-msg text-center">
                    <h2 className="title">Thank you</h2>
                     <p className="msg">We will get back to you as soon as possible!</p>
                </FramerMotionAnimation>
            </main>
        </>
    )
}
