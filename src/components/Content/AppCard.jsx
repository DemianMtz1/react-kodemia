import React from 'react';
import './AppCard.css';

export const AppCard = ({ postInfo, img, idx }) => {

    return (
        <div className='card mb-4'>
            {idx === 0 ? <img src={img} alt={postInfo.title} /> : null}
            <div className="card-body" >
                <div className='user-info' >
                    <img src={postInfo.owner.avatar} alt={postInfo.owner.name} />
                    <div className="wrapper-user">
                        <h3 className="">{postInfo.owner.name}</h3>
                        <span className="text-muted" >{`${postInfo.postDate.getMonth()}-${postInfo.postDate.getDate()}`}</span>
                    </div>
                </div>
                <div className="p-3">
                    <h4>{postInfo.title}</h4>
                    {postInfo.tags ? postInfo.tags.map(tag => <span className="text-muted p-2">{tag}</span>) : null}
                </div>

                <div className='reactions-wrapper p-3'>
                    <div className="d-flex">
                        <div className="reactions">
                            <img src='https://image.flaticon.com/icons/png/512/1077/1077035.png' alt='corazon' />
                            <a href="/" className="link">{`${postInfo.reactions} reactions`}</a>
                        </div>
                        <div className="comments">
                            <img src='https://image.flaticon.com/icons/png/512/953/953810.png' alt='corazon' />
                            <a href="/" className="link">{`${postInfo.comments} comments`}</a>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-secondary">Save</button>
                    </div>
                </div>

            </div>
        </div>
    )

}
export default AppCard;