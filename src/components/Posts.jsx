import React, { useEffect, useState } from 'react'
import Post from './Post'
import { API_BASE_URL } from '../api';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        fetch(API_BASE_URL+'/post').then(response => {
            response.json().then(posts => {
                setPosts(posts);
            }).catch(err => console.log(err))
        })
    }, [])

    if(posts.length === 0) {
        return (
            <section className='w-full h-max flex items-center font-outfit'>
                <div className='max-w-screen-xl mx-auto text-blue-50 hover:text-purple-300'>
                    No posts yet.
                </div>
            </section>
        )
    }
    return (
        <section className='w-full min-h-screen flex items-center font-outfit mb-10'>
            <div className='max-w-screen-xl mx-auto'>
                <div className='posts grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-16  transition-all duration-1000 ease-out'>
                    {posts.length > 0 && posts.map(posts => (
                        <div key={posts._id}>
                            <Post {...posts}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Posts