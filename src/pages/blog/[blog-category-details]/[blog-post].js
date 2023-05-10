import {useEffect, useState} from 'react';
import Link from 'next/link';
import Head from 'next/head';
import {Inter} from 'next/font/google';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Banner from '../../../components/common/Banner';
import WhatGoogleSays from '../../../components/sections/WhatGoogleSays';
import ImageAndContentAlternateRows from '../../../components/sections/ImageAndContentAlternateRows';
import KnowList from '../../../components/sections/KnowList';
import BreadCrumb from '../../../components/common/BreadCrumb';
import ContentStrip2 from '../../../components/sections/ContentStrip2';
import SiteAnalysis from '../../../components/sections/SiteAnalysis';
import ContentWithVideo from '../../../components/sections/ContentWithVideo2';
import CardGrid from '../../../components/sections/CardGrid3';
import FAQSEO from '../../../components/sections/FAQSEO';
import holdingLaptop from '../../../assets/images/holding-laptop-3.png';
import agencyImage from '../../../assets/images/girl-avatar.png';
import twitterIcon from '../../../assets/icons/twitter-white.svg';
import facebookIcon from '../../../assets/icons/facebook-white.svg';
import peopleSittingChair from '../../../assets/images/people-sitting-chair.png';
import alternateData from '../../../data/blogPostAlternateSectionData';
import blogData from '../../../data/blogData';
import phasesOfSeoProjectSectionData from '../../../data/phasesOfSeoProjectSectionData';
import MoreInterestingPosts from "../../../components/sections/MoreInterestingPosts";
import WorkWithUs from "../../../components/sections/WorkWithUs";
import TextBlock from "../../../components/sections/TextBlock";
import TextBlockMehr from "../../../components/sections/TextBlockMehr";
import Comments from "../../../components/sections/Comments";

const inter = Inter({subsets: ['latin']})

export default function BlogPost() {
    const [post, setPost] = useState('');
    const [categoryUrl, setCategoryUrl] = useState('');
    const [category, setCategory] = useState('');
    const { isReady, asPath } = useRouter();

    useEffect(() => {
       if (isReady) {
           const [, categoryAlias, postSlug] = asPath.split('/').filter(item => item !== '');
           const postInData = blogData[categoryAlias].posts.filter(item => item.slug === postSlug)[0];
           setCategory(blogData[categoryAlias].name);
           setCategoryUrl(`/blog/${categoryAlias}`);
           setPost(postInData);
       }
    }, [isReady]);

    return (
        <>
            <Head>
                <title>SH Digital {post.title}</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className="blog-post">
                <Banner arrow={false} bg={holdingLaptop} className="post-banner">
                    { post && (
                        <>
                            <BreadCrumb category={category} categoryUrl={categoryUrl} post={post} />
                            <h1 className="banner-heading-md text-white uppercase">{ post.shortTitle }</h1>
                            <div className="author-wrapper">
                                <Image src={post.authorImage} alt={post.author} className="agency-image" />
                                <div className="details-wrapper">
                                    <p className="agency-name">{post.author}</p>
                                    <div className="date-time-wrapper">
                                        <p className="date">{post.date}</p> ·
                                        <p className="read-time">{post.readingTime}</p>
                                    </div>
                                    <div className="social-wrapper">
                                        Teilen :
                                        <div className="social-links-wrapper">
                                            <Link href={`https://twitter.com/intent/tweet?url=${post.slug}&text=${post.title}`}>
                                                <Image src={twitterIcon} alt="twitter" className="social-icon" />
                                            </Link>
                                            <Link href={`https://www.facebook.com/sharer.php?u=${post.slug}`}>
                                                <Image src={facebookIcon} alt="facebook" className="social-icon" />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </Banner>
                <WhatGoogleSays post={post}  />
                <ContentWithVideo id={post.videoID} title={post.videoTitle} className="bg-gray"
                                  videoUrl={post.videoURL} thumbnail={post.videoThumbnail}
                                  description={post.videoDescription} description2={post.videoDescription2}/>
                
                { post.imageData ?
                <ImageAndContentAlternateRows id={post.videoID} data={post} imageData={post.imageData} />
                : undefined }
                
                { post.bannerImage  ?
                <a href={post.bannerLink}><Image src={post.bannerImage} layout="responsive"
                    loading="lazy"
                    alt={post.bannerImageDesc} /></a>
                : undefined }
                
                <KnowList id={post.knowListID} data={post} />
                { post.imageData2 ?
                
                <ImageAndContentAlternateRows data={post} imageData={post.imageData2} />
                : undefined }

                { post.imageData3 ?
                <ImageAndContentAlternateRows data={post} imageData={post.imageData3} />
                : undefined }
                
                { post.textBlock ? <TextBlock data={post} /> : undefined }
                
                { post.blockQuote ? <TextBlockMehr data={post} /> : undefined }
                
                { post.imageData4 ?
                <ImageAndContentAlternateRows data={post} imageData={post.imageData4} /> : undefined }
                
                <SiteAnalysis data={post} />
                <ContentStrip2 title="Kann man “ SEO - Optimierung”sagen?"
                               description="Nein, ,, SEO - Optimierung “ ist als Begriff falsch. Denn SEO ist die Abkurzung fur Suchmachineoptimierung - und du willst ja nicht die Optimierung Optimieren."
                               className="bg-gray" />
                <CardGrid data={phasesOfSeoProjectSectionData} />
                
                <MoreInterestingPosts />
                <WorkWithUs />
                <Comments />
            </main>
        </>
    )
}
