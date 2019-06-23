import React from 'react';
import { SectionTitle } from '../index';
import * as RecentBlogStyle from './RecentBlogStyle';
import RecentBlogContent from './recent_blog_content/RecentBlogContent';

const { RecentBlogSection } = RecentBlogStyle;

export const RecentBlog = () => {
    return (
        <>
            <RecentBlogSection>
                <SectionTitle subTitle="Our Blog" mainTitleLight="Recent" mainTitle="Blog" />
                <RecentBlogContent />
            </RecentBlogSection>
        </>
    )
}

export const RecentBlogSecond = () => {
    return (
        <>
            <RecentBlogSection>
                <SectionTitle subTitle="Our Blog" mainTitleLight="Recent" mainTitle="Blog" />
                <RecentBlogContent />
                <RecentBlogContent />
            </RecentBlogSection>
        </>
    )
}