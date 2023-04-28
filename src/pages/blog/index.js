import Head from 'next/head'
import {Inter} from 'next/font/google'
import Image from 'next/image';
import Banner from '../../components/common/Banner';
import EmailInputForm from '../../components/common/EmailInputForm';
import BlogCategoriesFilter from '../../components/common/BlogCategoriesFilter';
import BlogCategoryPreview from '../../components/sections/BlogCategoryPreview';
import holdingLaptop from '../../assets/images/holding-laptop-3.png';

import blogData from '../../data/blogData';

const inter = Inter({subsets: ['latin']})

export default function Blog() {
    return (
        <>
            <Head>
                <title>SH Digital - Blog</title>
                <meta name="description" content="SH Digital - Blog"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="blog-page">
                <Banner arrow={true} bg={holdingLaptop}>
                    <h1 className="banner-heading-lg text-white">RATGEBER</h1>
                    <EmailInputForm
                        placeHolder="E-Mail Adresse eingeben"
                        btnText="Abonnieren" />
                    <p className="sub-heading text-white">Im Newsletter teilen wir weitere hilfreiche Informationen.</p>
                </Banner>

                <BlogCategoriesFilter />

                { Object.keys(blogData)?.map((category, index) => (
                    <BlogCategoryPreview showPerPage={3} data={blogData[category]} key={index} />
                )) }
            </main>
        </>
    )
}
