import React from 'react';
import Link from "next/link";
import chevronRight from '../../../assets/icons/chevron-right.svg';
import Image from "next/image";


const BreadCrumb = ({ category = '', categoryUrl, post = '' }) => {
    return (
        <div className="bread-crumb">
            <Link href={`${categoryUrl}`} className="link">
                <p>{ category }</p>
            </Link>
            <Image src={chevronRight} alt="arrow right" className="link-right-icon" />
            <p className="post-title">{ post.shortTitle }</p>
        </div>
    );
};

export default BreadCrumb;
