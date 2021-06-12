import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import AppLoading from '../../components/Content/AppLoading';
import { useHistory, useParams } from 'react-router-dom';
import {getPostDetail } from '../../services'
export const PostDetails = () => {
    const [post, setPost] = useState({})
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const request = async () => {
            const json = await getPostDetail(id);
            setPost(json);
        };

        request();
    }, [])
    return (
        <>
            <Header />

            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{post.title && post.title}</h1>
                        <img
                            src={post.image}
                            alt={post.title && post.title} />
                    </div>
                </div>
            </div>
            <AppLoading />
        </>
    )
}

