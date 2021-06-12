import React from 'react'
import { useHistory } from 'react-router-dom'
export default function Post({ post, id }) {

    const history = useHistory();

    return (

        <div className="card mb-3" key={id}>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.description}</p>

                <button
                    onClick={()=>{history.push(`/post/${id}`)}}
                    className="btn btn-dark"
                >View Details</button>
            </div>
        </div>
    )
}
