import React from 'react';
import Image from 'next/image';
import FramerMotionAnimation from '../../common/FramerMotionAnimation';
import uprightArrowIcon from '../../../assets/icons/up-right-arrow.svg';
import user1 from '../../../assets/images/user1.png';
import user2 from '../../../assets/images/user2.png';

const commentsListData = [
    {
        image: user1,
        name: 'Rejaul karim',
        highlight: 'Hi Brian',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
    },
    {
        image: user2,
        name: 'Jonathon Doe',
        highlight: 'Hi Brian',
        comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. D',
    },
];

const Comments = ({ form = true, commentsList = true}) => {
    const commentSubmitHandler = (e) => {
        e.preventDefault();
        console.log("Comment submitted!");
    };

    return (
        <section className="comments container bg-gray">
            { form && (
                <div className="comment-form-wrapper">
                    <div className="title-wrapper">
                        <FramerMotionAnimation type="h2" className="title">Lebe einen Kommentar</FramerMotionAnimation>
                        <FramerMotionAnimation type="p" className="description">Ihre E-Mail-Adresse wird nicht veröffentlicht, Pflichtfelder sind markiert*</FramerMotionAnimation>
                    </div>
                    <form className="form-wrapper" onSubmit={commentSubmitHandler}>
                        <FramerMotionAnimation className="input-wrapper">
                            <textarea rows={6} className="input comment-field" placeholder="Write here" required />
                        </FramerMotionAnimation>
                        <div className="input-group grid md:grid-cols-2">
                            <FramerMotionAnimation className="input-wrapper">
                                <input type="text" className="input" placeholder="Name*" required />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation className="input-wrapper">
                                <input type="email" className="input" placeholder="Email*" required />
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation className="input-wrapper">
                            <input type="text" className="input" placeholder="Name*" />
                        </FramerMotionAnimation>
                        <FramerMotionAnimation>
                            <button className="btn-primary submit-btn" type="submit">
                                Submit Comment
                                <Image src={uprightArrowIcon} alt="upright arrow" className="submit-btn-icon" />
                            </button>
                        </FramerMotionAnimation>
                    </form>
                </div>
            )}

            { commentsList && (
                <div className="comments-list-wrapper">
                    { commentsListData.map((user, index) => (
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.1 }}
                            key={index} className="comment-row">
                            <div className="user-details-wrapper">
                                <Image src={user.image} alt={user.name} className="user-image" />
                                    <p className="user-name font-medium">{ user.name }</p>
                            </div>
                            <div className="comment-wrapper">
                                <p className="highlight font-medium">{ user.highlight }</p>
                                <p className="comment-para">{ user.comment }</p>
                            </div>
                        </FramerMotionAnimation>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Comments;
