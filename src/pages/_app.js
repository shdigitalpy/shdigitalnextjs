import '@/styles/globals.scss'
import MainLayout from "../layouts/Main";
import {AnimatePresence} from "framer-motion"

export default function App({Component, pageProps}) {
    return (
        <MainLayout>
            <AnimatePresence>
                <Component {...pageProps} />
            </AnimatePresence>
        </MainLayout>
    )
}
