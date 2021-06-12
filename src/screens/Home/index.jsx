import React from 'react';
import Header from '../../components/Header';
import MenuList from '../../components/Content/MenuList';
import Listings from '../../components/Content/Listings';
import AppCard from '../../components/Content/Listings';
import AppLoading from '../../components/Content/AppLoading';
import Counter from '../../components/Counter';
export default function Home() {
    
    const posts = {
        "key-1": {
            img: 'https://res.cloudinary.com/practicaldev/image/fetch/s--Sx4OkDGF--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/gvt6yxo6zue9h34um408.png',
            title: 'The 10 Most Important Web Developer Resources You Need to Know',
            tags: ['#beginners', '#webdev', '#javascript'],
            reactions: '2',
            comments: '3',
            postDate: new Date(),
            owner: {
                name: 'Rohit Singh Rana',
                avatar: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pSZzG2K4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/613035/64f5af39-0987-4722-ab68-470e370a1cae.png'
            }
        },
        "key-2": {
            img: 'https://dev.to/rohitrana/the-10-most-important-web-developer-resources-you-need-to-know-7n9',
            title: 'The 10 Most Important Web Developer Resources You Need to Know',
            tags: ['#beginners', '#webdev', '#javascript'],
            reactions: '2',
            comments: '3',
            postDate: new Date(),
            owner: {
                name: 'Rohit Singh Rana',
                avatar: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pSZzG2K4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/613035/64f5af39-0987-4722-ab68-470e370a1cae.png'
            }
        },
        "key-3": {
            img: 'https://dev.to/rohitrana/the-10-most-important-web-developer-resources-you-need-to-know-7n9',
            title: 'The 10 Most Important Web Developer Resources You Need to Know',
            tags: ['#beginners', '#webdev', '#javascript'],
            reactions: '2',
            comments: '3',
            postDate: new Date(),
            owner: {
                name: 'Rohit Singh Rana',
                avatar: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pSZzG2K4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/613035/64f5af39-0987-4722-ab68-470e370a1cae.png'
            }
        },
        "key-4": {
            img: 'https://dev.to/rohitrana/the-10-most-important-web-developer-resources-you-need-to-know-7n9',
            title: 'The 10 Most Important Web Developer Resources You Need to Know',
            tags: ['#beginners', '#webdev', '#javascript'],
            reactions: '2',
            comments: '3',
            postDate: new Date(),
            owner: {
                name: 'Rohit Singh Rana',
                avatar: 'https://res.cloudinary.com/practicaldev/image/fetch/s--pSZzG2K4--/c_fill,f_auto,fl_progressive,h_90,q_auto,w_90/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/613035/64f5af39-0987-4722-ab68-470e370a1cae.png'
            }
        }
    }

    return (
        <>
            <Header />

            <div className="container container-fluid mt-4">
                <div className="row">
                    <div className="d-none d-md-block col-md-2">
                        <MenuList />
                    </div>
                    <div className="col-6">
                        <h5 className="mb-3">Posts</h5>
                        {
                            Object.entries(posts).map(([key, post], idx) => <AppCard postInfo={post} img={post.img} idx={idx} key={key} />)
                        }

                    </div>
                    <div className="col-4">
                        <Listings />
                        <Counter />
                    </div>
                </div>
            </div>
            <AppLoading />
        </>
    )
}