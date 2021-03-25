import domtoimage from 'dom-to-image';


export default function generateImage() {
    window.domtoimage = domtoimage;

    const generateImageButton = document.querySelector("[data-function=js-generate-image]");
    if (generateImageButton !== undefined) {
        generateImageButton.addEventListener("click", function() {
            domtoimage.toJpeg(document.querySelector(".card"), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'my-image-name.jpeg';
                link.href = dataUrl;
                link.click();
            });
        })
    }
    document.querySelector("[data-function=js-update-dynamic-image-title]").addEventListener("click", function(ev) {
        document.querySelector(".card .info .title").textContent = ev.target.parentElement.querySelector(".image-generation__form-input").value;
    })
    document.querySelector("[data-function=js-update-dynamic-image-text]").addEventListener("click", function(ev) {
        document.querySelector(".card .info h3").textContent = ev.target.parentElement.querySelector(".image-generation__form-input").value;
    })

}