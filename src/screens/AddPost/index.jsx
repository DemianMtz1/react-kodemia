import React, { useState } from 'react';
import Header from '../../components/Header';
import AppLoading from '../../components/Content/AppLoading';
import { useHistory } from 'react-router-dom';
import { postPost } from '../../services';

import { CustomInput } from '../../components/CustomInput';

export const AddPost = () => {

    const [post, setPost] = useState({
        title: '',
        description: '',
        author: '',
        image: ''
    })
    const history = useHistory();

    const handleChangePost = ev => {
        setPost({
            ...post,
            [ev.target.name]: ev.target.value
        })
    }

    const handleSubmit = async (ev) => {
        ev.preventDefault();
        try {
            await postPost(post);
            history.push('/exercises');
            setPost({
                title: '',
                description: '',
                author: '',
                image: ''
            })

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <form
                            className="p-4 bg-dark mt-2 text-white"
                            onSubmit={handleSubmit}
                        >
                            <h2>Add Post</h2>
                            <div className="form-group my-4">
                                <CustomInput
                                    name='title'
                                    type='text'
                                    data={post}
                                    value={post.title}
                                    handleChange={handleChangePost}
                                    setPost={setPost}
                                />
                            </div>
                            <div className="form-group my-4">
                                <CustomInput
                                    name='description'
                                    type='text'
                                    data={post}
                                    value={post.description}
                                    handleChange={handleChangePost}
                                    setPost={setPost}
                                />
                            </div>
                            <div className="form-group my-4">
                                <CustomInput
                                    name='author'
                                    type='text'
                                    data={post}
                                    handleChange={handleChangePost}
                                    value={post.author}
                                    setPost={setPost}
                                />
                            </div>
                            <div className="form-group my-4">
                                <CustomInput
                                    name='image'
                                    type='text'
                                    data={post}
                                    value={post.image}
                                    handleChange={handleChangePost}
                                    setPost={setPost}
                                />
                            </div>
                            <button type="submit" className="btn btn-secondary w-100">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
            <AppLoading />
        </>
    )
}

