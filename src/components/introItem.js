import React from 'react'

const IntroItem = ({img_position, image_url, image_alt, title, text}) => {
    const introImage = <img src={image_url} className="intro__image" alt={image_alt}></img>
    const introInfo =
        <div className="intro__box">
            <p className="intro__title">{title}</p>
            <p className="intro__text">{text}</p>
        </div>
    let className = 'intro';
    console.log("Imageposition: ", img_position)
    if (img_position === 'right') {
        className += ' intro--reverse';
    }
    return (
        <div className={className}>
            {introImage} {introInfo}
        </div>
    )
}

export default IntroItem
