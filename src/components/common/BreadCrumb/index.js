import React from 'react';
import Link from "next/link";
import chevronRight from '../../../assets/icons/chevron-right.svg';
import Image from "next/image";


const BreadCrumb = ({ category = '', categoryUrl, post = '' }) => {
    return (
        <div className="bread-crumb" itemScope itemType="https://schema.org/BreadcrumbList">
            
            <Link itemprop="itemListElement" itemtype="https://schema.org/ListItem" href={`${categoryUrl}`} title={ category } className="link">
                <p itemscope itemProp="item" itemProp="name">{ category }</p>
                <meta itemProp="position" content="1" />
            </Link>
         
            <Image src={chevronRight} alt="arrow right" className="link-right-icon" />
            
            <Link itemprop="itemListElement" itemscope
          itemtype="https://schema.org/ListItem" href={`${post.slug}`} title={ post.title } className="post-title">
            <p itemProp="item" itemProp="name" className="post-title">{ post.shortTitle }</p>
            <meta itemProp="position" content="2" />
            </Link>
        
        </div>
    );
};

export default BreadCrumb;
