import React from 'react';

import './Card.css';

type ElementClassType = {
    classNames?: string;
}

type PropertiesType = {
    title: string;
    imageSrc: string; 
    subtitle?: string;
    longText?: string;
} & ElementClassType;

const component = (props: PropertiesType) => (
    <div className={`card ${props.classNames}`}>
        <img src={props.imageSrc} alt="img" />
        <div className="card-content">
            <span className="title">{props.title}</span>
            { props.subtitle && <span className="subtitle">{props.subtitle}</span>}
            { props.longText && <span className="long-text">{props.longText}</span>}
        </div>
    </div>)

export default component;