import React from 'react';
import { CountdownSecond } from '../components/countdown/Countdown';
import { RecentBlogSecond } from '../components/recent_blog/RecentBlog';
import Subscribe from '../components/subscribe/Subscribe';

const Blog = () => {
    return (
        <main>
            <CountdownSecond content="Blog" />
            <RecentBlogSecond />
            <Subscribe />
        </main >
    )
}

export default Blog;