import React from 'react';
import { Link } from 'react-router-dom';
import ReactTimeAgo from 'react-time-ago';
import { API_BASE_URL } from '../api';

const Post = ({ author, title, summary, cover, updatedAt, _id }) => {

    const timestamp = Date.parse(updatedAt)
    return (
        <div className="max-w-[24rem] h-[28rem] dark:bg-[#1c1f26] rounded-xl border border-[#383d47] hover:border-slate-400 hover:cursor-pointer overflow-y-scroll md:overflow-hidden">
            <div className="container p-2 flex flex-col flex-grow gap-4">
                <Link to={`/post/${_id}`}>
                    <div className="w-full h-[12rem] rounded-lg overflow-hidden">
                        <img src={`${API_BASE_URL}/cover/${cover}`} alt="" className='w-full h-full object-cover'/>
                    </div>
                </Link> 
                <div className="content w-full flex flex-col gap-3 p-4 flex-grow">
                    <div className="title font-bold text-2xl dark:text-[#f6f6f6]">
                        <h1 className="truncate">{title}</h1>
                    </div>
                    <div className="summary w-full h-[6rem] overflow-hidden dark:text-[#cacaca] text-justify">
                        <p className="line-clamp-3">{summary}</p>
                    </div>
                    <div className="author flex flex-col md:flex-row gap-3 items-center mt-auto">
                        <div className="hidden md:block pfp w-8 h-8 rounded-full overflow-hidden">
                            <img src="/pfp.jpeg" alt="" />
                        </div>
                        <div className="bio flex flex-col items-center md:items-start gap-0 flex-grow">
                            <span className='font-semibold'>{author.username}</span>
                            <span className='text-purple-500'><ReactTimeAgo date={timestamp} locale="en-US" /></span>
                        </div>
                        <Link to={`/post/${_id}`}>
                            <div className='flex gap-2 flex-grow px-4 py-2 rounded-lg bg-white hover:bg-blue-50'>
                                <span className=' text-black font-medium'>Read Post</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                                </svg>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Post;