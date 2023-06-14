import React, { useEffect, useState } from "react";
import Head from 'next/head'
import {Inter} from 'next/font/google'
import { useRouter } from 'next/router';
import Banner from '../../components/common/Banner';
import EmailInputForm from '../../components/common/EmailInputForm';
import BlogCategoriesFilter from '../../components/common/BlogCategoriesFilter';
import BlogCategoryPreview from '../../components/sections/BlogCategoryPreview';
import holdingLaptop from '../../assets/images/holding-laptop-3.png';

import blogData from '../../data/blogData';
import blogCategoriesData from '../../data/blogCategoriesData';

const inter = Inter({subsets: ['latin']})

export default function BlogCategory({ category }) {
    const [activeCategory, setActiveCategory] = useState('overview');
    const [categoryExist, setCategoryExist] = useState(null);
    const [blogPosts, setBlogPosts] = useState(null);

    const { push } = useRouter();

    useEffect(() => {
        if (category) {
            setActiveCategory(category);
            setBlogPosts(blogData[category]);

            const exist = blogCategoriesData.categories.find(item => item.alias === category);
            setCategoryExist(exist);
            if (exist === undefined) push('/404')
        }
    }, []);

    return (
        <>
            <Head>
                <title>SH Digital - { blogPosts?.name } Blog</title>
                <meta name="description" content={`SH Digital - { blogPosts?.name } Blog`}/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="blog-page">
                { categoryExist && (
                    <>
                        <Banner arrow={true} bg={holdingLaptop}>
                            <h1 className="banner-heading-lg text-white">RATGEBER</h1>
                            <EmailInputForm
                                placeHolder="E-Mail Adresse eingeben"
                                btnText="Abonnieren"/>
                            <p className="sub-heading text-white">Im Newsletter teilen wir weitere hilfreiche
                                Informationen.</p>
                        </Banner>

                        <BlogCategoriesFilter category={activeCategory}/>

                        {blogPosts && <BlogCategoryPreview showPerPage={9} data={blogPosts}/>}
                    </>
                )}
            </main>
        </>
    )
}

export const getServerSideProps = ({ req, res, resolvedUrl }) => {
    const arr = resolvedUrl.split('/');
    const category = arr[arr.length - 1];
    return {
        props: {
            category: category
        }
    }
};
