import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import './styles/quill.css'


import { Navigate } from 'react-router-dom';
import { API_BASE_URL } from '../api';

const modules = {
    toolbar: [
        [{ 'header': [1, 2, false] }],
        ['bold', 'italic', 'underline','strike', 'blockquote'],
        [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
        ['link', 'image'],
        ['clean']
    ],
}

const formats = [
    'header',
    'bold', 'italic', 'underline', 'strike', 'blockquote',
    'list', 'bullet', 'indent',
    'link', 'image'
]

const CreatePost = () => {
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);
    
    async function createPost(ev) {
        ev.preventDefault();
    
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        if (files && files[0]) {
            data.set('file', files[0]);
        } else {
            console.error('No file selected');
            return;
        }
    
        try {
            const response = await fetch(API_BASE_URL+'/post', {
                method: 'POST',
                body: data,
                credentials: 'include',
            });
    
            if (response.ok) {
                setRedirect(true);
            } else {
                const errorData = await response.json();
                console.error('Error:', errorData);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    if(redirect) {
        return <Navigate to={"/"} />
    }

    return (
        <main className='w-full h-max mt-24 p-10 flex items-center justify-center'>
            <div className='max-w-screen-md h-full'>
                <form action="" className="flex flex-col gap-3 w-full" onSubmit={createPost}>
                    <input 
                        className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                        type="text" 
                        name="Title" 
                        placeholder="Title"
                        value={title}
                        onChange={(ev) => {setTitle(ev.target.value)}} />
                    <input 
                        className="bg-zinc-800 text-gray-200 border-0 rounded-md p-2 focus:bg-zinc-600 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150" 
                        type="text" 
                        name="Summary"  
                        placeholder="Summary"
                        value={summary}
                        onChange={(ev) => {setSummary(ev.target.value)}} />

                    <input 
                        type='file'
                        onChange={ev => setFiles(ev.target.files)}
                        className='w-full bg-zinc-800 file:bg-slate-200 hover:file:bg-white cursor-pointer file:cursor-pointer rounded-md file:rounded-md file:border-0 file:mr-4 file:py-2 file:px-4 file:text-sm file:font-semibold' 
                    />

                    <ReactQuill
                        theme='snow'
                        modules={modules}
                        formats={formats}
                        className="text-white rounded-xl" 
                        placeholder='Write your blog post...'
                        value={content}
                        onChange={newValue => setContent(newValue)} />
                    <button className="bg-gradient-to-r from-red-500 to-blue-500 via-purple-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-blue-600 hover:via-purple-600 transition ease-in-out duration-150" type="submit">Create Post</button>
                </form>
            </div>
        </main>
    )
}

export default CreatePost