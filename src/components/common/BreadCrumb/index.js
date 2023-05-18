import React from 'react';
import Link from "next/link";
import chevronRight from '../../../assets/icons/chevron-right.svg';
import Image from "next/image";


const BreadCrumb = ({ category = '', categoryUrl, post = '' }) => {
    return (
        <div className="bread-crumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <div itemprop="itemListElement" itemscope
          itemtype="https://schema.org/ListItem">
            <Link itemProp="item" href={`${categoryUrl}`} title={ category } className="link">
                <p itemProp="name">{ category }</p>
                <meta itemProp="position" content="1" />
            </Link>
            </div>
            <Image src={chevronRight} alt="arrow right" className="link-right-icon" />
            
            <div itemprop="itemListElement" itemscope
          itemtype="https://schema.org/ListItem">
            <Link itemProp="item" href={`${post.slug}`} title={ post.title } className="post-title">
            <p itemProp="name" className="post-title">{ post.shortTitle }</p>
            <meta itemProp="position" content="2" />
            </Link>
            </div>
        
        </div>
    );
};

export default BreadCrumb;
