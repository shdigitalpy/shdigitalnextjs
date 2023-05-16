import React from 'react';
import Link from "next/link";
import chevronRight from '../../../assets/icons/chevron-right.svg';
import Image from "next/image";


const BreadCrumb = ({ category = '', categoryUrl, post = '' }) => {
    return (
        <div className="bread-crumb">
            <Link href={`${categoryUrl}`} title={ category } className="link">
                <p>{ category }</p>
            </Link>
            <Image src={chevronRight} alt="arrow right" className="link-right-icon" />
            <Link href={`${post.slug}`} title={ post.title } className="post-title">
            <p className="post-title">{ post.shortTitle }</p>
            </Link>
        </div>
    );
};

export default BreadCrumb;
