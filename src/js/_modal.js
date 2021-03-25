export default function modal() {
    function build_blog(state, el) {
        // state: "add" or "remove"
        console.log(el);
        // prepare get data
        const blogTeaserTitle = el.parentNode.querySelector(".blog-teaser__post-title");
        const blogTeaserSubheadline = el.parentNode.querySelector(".blog-teaser__post-subheadline");
        const blogTeaserPostTeaserText = el.parentNode.querySelector(".blog-teaser__post-teaser-container .blog-teaser__post-teaser-text");
        const blogTeaserImage = el.parentNode.parentNode.querySelector(".blog-teaser__post-image"); // cloneNode
        // prepare set data
        let blogPostTitle = el.parentNode.querySelector(".blog-post__title");
        let blogPostSubheadline = el.parentNode.querySelector(".blog-post__subheadline");
        let blogPostText = el.parentNode.querySelector(".blog-post__text");
        let blogPostImage = el.parentNode.querySelector(".blog-post__image");
        console.log(blogPostImage);
        if (state === "add") {
            // fill data
            blogPostTitle.textContent = blogTeaserTitle.textContent;
            blogPostSubheadline.textContent = blogTeaserSubheadline.textContent;
            blogPostText.innerHTML = blogTeaserPostTeaserText.innerHTML;
            blogPostImage.src = blogTeaserImage.src;
            blogPostImage.alt = blogTeaserImage.alt;
        } else if (state === "remove") {
            blogPostTitle.textContent = "";
            blogPostSubheadline.textContent = "";
            blogPostText.innerHTML = "";
            blogPostImage.src = "";
            blogPostImage.alt = "";
        } else {
            console.log("Function build_blog needs 'add' or 'remove' as state");
            return -1;
        }
        console.log(blogTeaserTitle)
    }

    document.querySelectorAll("[data-function=js-readmore]").forEach(el => { el.addEventListener("click", function(ev) {
            if (!document.body.classList.contains("modal-open")) {
                // When the modal is shown, we want a fixed body
                document.body.style.top = `-${window.scrollY}px`;
                document.body.style.position = 'fixed';
                ev.target.parentNode.querySelector(".blog-teaser__modal").classList.toggle("blog-teaser__modal--active");
                document.querySelector("body").classList.toggle("modal-open");
                build_blog("add", ev.target);
            }
        })
    })

    const elements = document.querySelectorAll(".blog-teaser__modal");

    elements.forEach( el => {
        el.addEventListener("click", function(ev) {
            if (el.classList.contains("blog-teaser__modal--active") && ev.target === el) {
                if (el.classList.contains("blog-teaser__modal--active")) {
                    // When the modal is hidden...
                    const scrollY = document.body.style.top;
                    document.body.style.position = '';
                    document.body.style.top = '';
                    window.scrollTo(0, parseInt(scrollY || '0') * -1);
                }

                document.querySelector("body").classList.toggle("modal-open");
                el.classList.toggle("blog-teaser__modal--active");
            }
        })
    })
}

