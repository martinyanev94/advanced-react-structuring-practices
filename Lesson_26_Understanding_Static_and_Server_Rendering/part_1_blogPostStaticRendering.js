import React from 'react';

const BlogPost = ({ title, content }) => {
    return (
        <article>
            <h1>{title}</h1>
            <div>{content}</div>
        </article>
    );
};

export async function getStaticProps() {
    const post = {
        title: "Understanding Static Rendering",
        content: "Static rendering generates HTML at build time, making loading super fast."
    };
    return {
        props: {
            title: post.title,
            content: post.content,
        },
    };
}

export default BlogPost;
