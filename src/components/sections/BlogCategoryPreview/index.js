import React, { useState, useEffect, useRef } from 'react';
import Image from "next/image";
import Link from "next/link";
import calenderIcon from '../../../assets/icons/calendar.svg';
import clockIcon from '../../../assets/icons/clock.svg';
import arrowRightIcon from '../../../assets/icons/arrow-right-short.svg';
import arrowRightIcon2 from '../../../assets/icons/arrow-right.svg';
import FramerMotionAnimation from "../../common/FramerMotionAnimation";

const BlogCategoryPreview = ({ data, showPerPage }) => {
    const [from, setFrom] = useState(0);
    const [to, setTo] = useState(showPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [paginationStart, setPaginationStart] = useState(0);
    const [paginationEnd, setPaginationEnd] = useState(3);

    const { name, alias, posts } = data;
    const descriptionLimit = 160;

    const rootRef = useRef(null);

    const totalPages = Math.ceil(posts.length / showPerPage);
    const pages = new Array(totalPages).fill(0);
    pages.forEach((item, index) => pages[index] = index);

    const changePaginationHandler = (page) => {
        rootRef.current.scrollIntoView();
        setCurrentPage(page);
    };

    useEffect(() => {
        setFrom(currentPage * showPerPage - showPerPage);
        setTo(currentPage * showPerPage);

        const pageStart = currentPage - 3;
        const pageEnd = currentPage + 2;
        setPaginationStart(pageStart < 0 ? 0 : pageStart);
        setPaginationEnd(pageEnd > totalPages ? totalPages : pageEnd);
    }, [currentPage]);

    useEffect(() => {
        setCurrentPage(1);
    }, [data]);

    return (
        <section className="blog-category-preview container" ref={rootRef}>
            <FramerMotionAnimation>
                <h1 className="title">{ name }</h1>
            </FramerMotionAnimation>
            <div className="posts-wrapper grid md:grid-cols-3">
                { posts.slice(from, to)?.map((post, index) => {
                    const description = `${post.description.substring(0, descriptionLimit)}${post.description.length > 200 ? '...' : ''}`;
                    return (
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="post-preview-wrapper bg-gray" key={index}>
                            <div className="image-date-wrapper">
                                <Image src={post.image} alt={post.imageAlt} className="post-preview-image" />
                                <div className="data-time-wrapper flex justify-between">

                                { post.date ?
                                    <p className="timing-wrapper flex items-center">
                                        <Image src={calenderIcon} alt="calender" className="icon" />
                                        { post.date }
                                    </p>
                                    : ""
                                        }
                                        
                                    

                                    { post.readingTime ?
                                    <p className="timing-wrapper flex items-center">
                                        <Image src={clockIcon} alt="clock" className="icon" />
                                        { post.readingTime }
                                    </p>
                                    : ""
                                        }
                                </div>
                            </div>

                            <div className="content-wrapper">
                                <h4 className="post-title font-medium">{ post.title }</h4>
                                <p className="post-description">{ description }</p>
                                <Link href={`/blog/${alias}/${post.slug}`} className="read-more-link flex items-center">
                                    {post.cta}
                                    <Image src={arrowRightIcon} alt="arrow right" className="read-more-icon" />
                                </Link>
                            </div>
                        </FramerMotionAnimation>
                    );
                })}
            </div>

            <FramerMotionAnimation className="pagination-wrapper flex">
                { currentPage > 1 && (
                    <button className="pagination-btn" onClick={() => changePaginationHandler(currentPage - 1)}>
                        <Image src={arrowRightIcon2} alt="arrow-right" className="arrow-icon left" />
                    </button>
                )}

                { pages.slice(paginationStart, paginationEnd).map(item => {
                    const page = item + 1;
                    return (
                        <button onClick={() => changePaginationHandler(page)} key={page}
                                className={`pagination-btn ${page === currentPage ? 'active' : ''}`}>
                            { page }
                        </button>
                    );
                })}

                { currentPage < totalPages && (
                    <button className="pagination-btn" onClick={() => changePaginationHandler(currentPage + 1)}>
                        <Image src={arrowRightIcon2} alt="arrow-right" className="arrow-icon" />
                    </button>
                )}
            </FramerMotionAnimation>
        </section>
    );
};

export default BlogCategoryPreview;
