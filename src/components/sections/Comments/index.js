import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import {getComments, postComment} from '../../../api/comment';
import { useReCaptcha } from "next-recaptcha-v3";
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

const Comments = ({ slug = '', form = true, commentsList = true}) => {
    const [comments, setComments] = useState([]);
    const [success, setSuccess] = useState(false);

    const { executeRecaptcha } = useReCaptcha();

    const commentSubmitHandler = useCallback(
        async (e, slug) => {
            e.preventDefault();

            if (slug) {
                const token = await executeRecaptcha("form_submit");

                const data = {
                    text: e.target.text.value || '',
                    name: e.target.name.value || '',
                    email: e.target.email.value || '',
                    website: e.target.website.value || '',
                    slug: slug,
                    recaptcha: token,
                };

                const res = await postComment(data);
                console.log("comment submitted", res);
                setSuccess(true);
            }

        },[executeRecaptcha],
    );

    const getCommentsHandler = async () => {
        const res = await getComments();
        const data = res?.filter(item => (item.slug === slug && item.reviewed));
        setComments(data);
    }

    useEffect(() => {
        if (success) {
            setTimeout(() => setSuccess(false), 5000)
        }
    }, [success]);

    useEffect(() => {
        if (slug) getCommentsHandler();
    }, [slug])

    return (
        <section className="comments container bg-gray">
            { form && (
                <div className="comment-form-wrapper">
                    <div className="title-wrapper">
                        <FramerMotionAnimation type="h2" className="title">Einen Kommentar hinterlassen</FramerMotionAnimation>
                        <FramerMotionAnimation type="p" className="description">Die E-Mail-Adresse wird nicht veröffentlicht, Pflichtfelder sind markiert*</FramerMotionAnimation>
                    </div>
                    <form className="form-wrapper" onSubmit={(e) => {commentSubmitHandler(e, slug)}}>
                        <FramerMotionAnimation className="input-wrapper">
                            <textarea rows={6} name="text" className="input comment-field" placeholder="Nachricht"  />
                        </FramerMotionAnimation>
                        <div className="input-group grid md:grid-cols-2">
                            <FramerMotionAnimation className="input-wrapper">
                                <input type="text" name="name" className="input" placeholder="Name*"  />
                            </FramerMotionAnimation>
                            <FramerMotionAnimation className="input-wrapper">
                                <input type="email" name="email" className="input" placeholder="E-Mail*"  />
                            </FramerMotionAnimation>
                        </div>
                        <FramerMotionAnimation className="input-wrapper">
                            <input type="text" name="website" className="input" placeholder="Webseite*" />
                        </FramerMotionAnimation>
                        {/*<ReCaptcha onValidate={setToken} action="page_view" />*/}
                        <FramerMotionAnimation>
                            <button className="btn-primary submit-btn" type="submit">
                                Kommentar hinterlassen
                                <Image src={uprightArrowIcon} alt="upright arrow" className="submit-btn-icon" />
                            </button>

                            { success && <p className="success-msg text-lg mt-5">Erfolgreich! Der Kommentar wird von uns geprüft</p> }
                        </FramerMotionAnimation>
                    </form>
                </div>
            )}

            { commentsList && (
                <div className="comments-list-wrapper">
                    { comments?.map((user, index) => (
                        <FramerMotionAnimation
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.25, delay: index * 0.1 }}
                            key={index} className="comment-row">
                            <div className="user-details-wrapper">
                                {/*<Image src={user.image} alt={user.name} className="user-image" />*/}
                                <p className="user-name font-medium">{ user.name }</p>
                            </div>
                            <div className="comment-wrapper">
                                <p className="highlight font-medium">{ user.highlight }</p>
                                <p className="comment-para">{ user.text }</p>
                            </div>
                        </FramerMotionAnimation>
                    ))}
                </div>
            )}
        </section>
    );
};

export default Comments;
