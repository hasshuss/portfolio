import React from "react";


interface CardProps {
    title: string | JSX.Element;
    content: JSX.Element;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
    return (
        <article className='skillContainer'>
            <h2 className='h2Skills'>{title}</h2>
            {content}
        </article>
    );
};

export default Card;