import React from 'react'

const IntroItem = ({image_url, image_alt, title, text}) => {
    const extraText = <p>extraText</p>

    return (
        <div className="intro">
            {extraText}
            <img src={image_url} className="intro__image" alt={image_alt}></img>
            <div className="intro__box">
                <p className="intro__title">{title}</p>
                <p className="intro__text">{text}</p>
            </div>
        </div>
    )
}

export default IntroItem
