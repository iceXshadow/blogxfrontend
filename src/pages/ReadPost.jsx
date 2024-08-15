import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import DeleteButton from '../components/DeleteButton';
import DOMPurify from 'dompurify';
import Image from '../components/Image';
import {UserContext} from '../UserContext';
import ReactTimeAgo from 'react-time-ago';

const ReadPost = () => {
    const [postInfo, setPostInfo] = useState(null);
    const { id } = useParams();
    const {userInfo} = useContext(UserContext);

    useEffect(() => {
        fetch(`http://localhost:4000/post/${id}`)
            .then((response) => {
                response.json().then(postData => {
                    setPostInfo(postData);
                });
            });
    }, [id]);

    if (!postInfo) {
        return <div>Loading...</div>;
    }

    // Sanitize the HTML content
    const sanitizedContent = DOMPurify.sanitize(postInfo.content);
    const postCover = `http://localhost:4000/${postInfo.cover}`;

    return ( 
        <main className='w-full min-h-screen overflow-hidden px-8 flex items-center justify-center mb-10'>
            <div className='max-w-screen-lg flex flex-col items-center gap-8'>
                <div className='flex flex-col items-start gap-12'>
                    <Image src={postCover} alt={postInfo.title} />
                    <div className='w-full flex flex-col gap-2 md:flex-row md:justify-between items-center'>   
                        <div className="bio flex flex-col gap-0 items-center lg:items-start">
                            <span className='font-semibold'>{postInfo.author.username}</span>
                            <span className='text-purple-100'><ReactTimeAgo date={postInfo.updatedAt} locale="en-US" /></span>
                        </div>
                        <div>
                            {userInfo && userInfo.id === postInfo.author._id && (
                                <div className='flex gap-4'>
                                    <Link to={`/edit/${postInfo._id}`}>
                                        <div className='flex gap-2 items-center w-max py-2 px-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded-md cursor-pointer hover:bg-gradient-to-l hover:from-blue-600 hover:to-purple-600 hover:-translate-y-1 transition-all duration-300 ease-out'>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                            <p>Edit</p>
                                        </div>
                                    </Link>
                                    <DeleteButton postId={postInfo._id} />
                                </div>
                            )}
                        </div>
                    </div>
                    <div className='font-outfit w-full flex flex-col gap-6 text-center md:text-start transition-all duration-300'>
                        <h1 className='text-6xl font-semibold text-slate-800 dark:text-[#f6f6f6] transition-all duration-300'>{postInfo.title}</h1>
                        <h2 className='text-xl text-zinc-600font-normal text-slate-700 dark:text-[#e2e2e2] text-justify md:text-start transition-all duration-300'>{postInfo.summary}</h2>
                    </div>
                </div>
                <div 
                    className='prose prose-lg max-w-none place-self-start'
                    dangerouslySetInnerHTML={{ __html: sanitizedContent }} 
                />
            </div>
        </main>
    );
};

export default ReadPost;