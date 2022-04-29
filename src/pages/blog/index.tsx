import React from "react";
import dynamic from 'next/dynamic';

const BlogComponent = dynamic(() => import('@/components/Blog'))

const Blog = () => {

    return <BlogComponent />;
};

export default Blog;

