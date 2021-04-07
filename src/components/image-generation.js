import Title from './section-title'

const ImageGeneration = () => {
    return (
        <div className="image-generation">
            <div className="image-generation__form">
                <div className="image-generation__form-item">
                <input className="image-generation__form-input" type="text" id="ftitle" name="ftitle" placeholder="Put title here"></input>
                <button className="image-generation__form-button button" data-function="js-update-dynamic-image-title">Update Dynamic Name</button>
                </div>
                <div className="image-generation__form-item">
                <input className="image-generation__form-input" type="text" id="ftext" name="ftext" placeholder="Put text here"></input>
                <button className="image-generation__form-button button" data-function="js-update-dynamic-image-text">Update Dynamic Text</button>
                </div>
            </div>
            <button className="image-generation__submit button" data-function="js-generate-image">Generate Image</button>
        </div>
    )
}

export default ImageGeneration
