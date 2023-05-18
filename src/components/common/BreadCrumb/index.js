import React from 'react';
import Link from "next/link";
import chevronRight from '../../../assets/icons/chevron-right.svg';
import Image from "next/image";


const BreadCrumb = ({ category = '', categoryUrl, post = '' }) => {
    return (
        <div className="bread-crumb" itemScope itemType="https://schema.org/BreadcrumbList">
            <ul style={{ display: 'flex', listStyle: 'none' }}>
            <li style={{ display: 'inline-block', whiteSpace: 'nowrap'}} itemprop="itemListElement" itemtype="https://schema.org/ListItem">
            <Link itemscope itemProp="item" href={`${categoryUrl}`} title={ category } className="link">
                
            <p itemProp="name">{ category }</p>
            <meta itemProp="position" content="1" />
            </Link>
            </li>
         
            <Image src={chevronRight} alt="arrow right" className="link-right-icon" />
                
            <li style={{ display: 'inline-block',whiteSpace: 'nowrap'}} itemprop="itemListElement" itemtype="https://schema.org/ListItem">
            <Link itemscope itemProp="item" href={`${post.slug}`} title={ post.title } className="post-title">
            <p itemProp="name" className="post-title">{ post.shortTitle }</p>
           
            <meta itemProp="position" content="2" />
            </Link>
             </li>

             </ul> 
        
        </div>
    );
};

export default BreadCrumb;
