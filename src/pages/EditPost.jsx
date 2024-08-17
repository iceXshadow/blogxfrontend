import React, { useEffect, useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css'
import './styles/quill.css'
import { Navigate, useParams } from 'react-router-dom';
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

const EditPost = () => {
    const {id} = useParams();
    const [title, setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [files, setFiles] = useState('');
    const [redirect, setRedirect] = useState(false);


    useEffect(() => {
        fetch(`${API_BASE_URL}/post/${id}`)
            .then(response => response.json())
            .then(postInfo => {
                setTitle(postInfo.title);
                setSummary(postInfo.summary);
                setContent(postInfo.content);
            })
            .catch(error => console.error('Error fetching post:', error));
    }, [id]);


    async function updatePost(ev) {
        ev.preventDefault();
        const data = new FormData();
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('id', id);

        if(files?.[0]) {
            data.set('file', files?.[0]);
        }

        try {
            const response = await fetch(`${API_BASE_URL}/post`, {
                method: 'PUT',
                body: data,
                credentials: 'include'
            });

            if (response.ok) {
                setRedirect(true);
            } else {
                const errorData = await response.json();
                console.error('Error updating post:', errorData);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }

    if(redirect) {
        return <Navigate to={'/post/' + id} />
    }

    return (
        <main className='w-full h-max mt-24 p-10 flex items-center justify-center'>
            <div className='max-w-screen-md h-full'>
                <form action="" className="flex flex-col gap-3 w-full" onSubmit={updatePost}>
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
                    <button class="bg-gradient-to-r from-red-500 to-orange-500 via-yellow-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-red-600 hover:to-orange-600 hover:via-yellow-600 transition ease-in-out duration-150" type="submit">Update Post</button>
                </form>
            </div>
        </main>
    )
}

export default EditPost