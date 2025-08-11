import React from 'react';

const NewsArticle = ({ article }) => {
    return (
        <article>
            <h1>{article.title}</h1>
            <p>{article.content}</p>
        </article>
    );
};

export async function getServerSideProps() {
    const res = await fetch('https://api.example.com/latest-article');
    const article = await res.json();

    return {
        props: {
            article,
        },
    };
}

export default NewsArticle;
