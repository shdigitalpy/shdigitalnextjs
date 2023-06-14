import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { useRouter } from 'next/router';
import blogCategoriesData from '../../../data/blogCategoriesData';

const BlogCategoriesFilter = ({ category }) => {
    const [activeCategory, setActiveCategory] = useState('');
    const { categories } = blogCategoriesData;

    const { push, reload } = useRouter();

    const categoryChangeHandler = async (categoryAlias) => {
        if (categoryAlias === 'overview') return push('/blog');

        await push({
            pathname: `/${categoryAlias}`,
        });
        reload();
    };

    useEffect(() => {
        if (category) setActiveCategory(category);
        else setActiveCategory('overview');
    }, [category]);

    return (
        <div className="blog-categories-filter container flex">
            { categories?.map((category, index) => (
                <button className={`category-btn ${category.alias === activeCategory ? 'active' : ''}`}
                        key={index} onClick={() => categoryChangeHandler(category.alias)}>
                    <div className="category-icon-wrapper">
                        <Image src={category.icon} alt="icon" className="category-icon" />
                    </div>
                    { category.name }
                </button>
            ))}
        </div>
    );
};

export default BlogCategoriesFilter;
