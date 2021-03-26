import BlogModal from './blogModal';
import Title from './title';

const Blog = () => {
    return (
        <section className="blog-teaser">
            <Title title='Read More in our blog posts' />
            <div className="blog-teaser__post">
                <img src={`${process.env.PUBLIC_URL}/img/pexels-photo-6078297.jpeg`} alt="nft" className="blog-teaser__post-image"></img>
                <div className="blog-teaser__post-info">
                    <div className="blog-teaser__post-title">About Surinami</div>
                    <div className="blog-teaser__post-subheadline">Lorem ipsum dolor sit amet</div>
                    <div className="blog-teaser__post-teaser-container">
                        <div className="blog-teaser__post-teaser-text">
                            Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                        </div>
                    </div>
                    <button className="blog-teaser__post-readmore button" data-function="js-readmore">Read More</button>
                </div>
                </div>
                <div className="blog-teaser__post">
                <img src={`${process.env.PUBLIC_URL}/img/pexels-photo-6771671.jpeg`} alt="nft" className="blog-teaser__post-image"></img>
                <div className="blog-teaser__post-info">
                    <div className="blog-teaser__post-title">More about NFT</div>
                    <div className="blog-teaser__post-subheadline">Lorem ipsum dolor sit amet</div>
                    <div className="blog-teaser__post-teaser-container">
                    <div className="blog-teaser__post-teaser-text">
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr
                    </div>
                    </div>
                    <button className="blog-teaser__post-readmore button" data-function="js-readmore">Read More</button>
                    <BlogModal />
                </div>
                </div>
                <div className="blog-teaser__post">
                <img src={`${process.env.PUBLIC_URL}/img/pexels-photo-6772076.jpeg`} alt="nft" className="blog-teaser__post-image"></img>
                <div className="blog-teaser__post-info">
                    <div className="blog-teaser__post-title">At vero eos et accusam</div>
                    <div className="blog-teaser__post-subheadline">Lorem ipsum dolor sit amet</div>
                    <div className="blog-teaser__post-teaser-container">
                    <div className="blog-teaser__post-teaser-text">
                        Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet
                    </div>
                    </div>
                    <button className="blog-teaser__post-readmore button" data-function="js-readmore">Read More</button>
                    <BlogModal />
                </div>
            </div>
        </section>
    )
}

export default Blog
