import React, { useEffect, useState } from 'react';
import Posts from '../../components/Posts';
import { getPosts } from '../../services'

export function Exercises() {

    const [post, setPost] = useState();

    useEffect(() => {

        const request = async () => {
            const json = await getPosts();
            setPost(Object.entries(json));
        }
        request();


    }, []);

    return (
        <div className="container container-fluid mt-4">
            <div className="row">
                <div className="col-6">
                    <h5 className="mb-3">Posts</h5>
                    <Posts allPosts={!post ? [] : post} />
                </div>
            </div>
        </div>
    )
}