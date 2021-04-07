import { useState } from 'react'
import MyModal from '../myModal'

const BlogPost = ( { title, subheadline, text, image, button }) => {
    // const [modal, setModal] = useState(false)
    // const toggleModal = (e) => {
    // }
    // const onReadMore = (e) => {
    //     e.preventDefault()
    //     setModal(true)
    // }
    // const readMoreButton = <button className="blog-teaser__post-readmore button" data-function="js-readmore" onToggle={toggleModal} onClick={ onReadMore }>Read More</button>
    const readMoreButton =  <MyModal
        title={title}
        text={text}
        subheadline={subheadline}
        image={image}
    />

    return (
        <div className="blog-teaser__post">
            <img src={image} alt="nft" className="blog-teaser__post-image"></img>
            <div className="blog-teaser__post-info">
                <div className="blog-teaser__post-title">{title}</div>
                <div className="blog-teaser__post-subheadline">{subheadline}</div>
                <div className="blog-teaser__post-teaser-text">
                    {text}
                </div>
                {readMoreButton}
            </div>
        </div>
    )
}

export default BlogPost
