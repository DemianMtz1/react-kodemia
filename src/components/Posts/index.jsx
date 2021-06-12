import React from 'react'
import Post from './Post.jsx'

export default function Posts ({ allPosts }) {
    return (
        <div>
            {
                allPosts.map(([key, post]) => <Post post={post} id={key} key={key}/>)
            }
        </div>
    )
}
