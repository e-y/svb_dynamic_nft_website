import BlogModal from './blogModal';
import Title from '../section-title';
import BlogPost from './blogPost'

const Blog = () => {
    return (
        <section className="blog-teaser">
            <Title title='Read More in our blog posts' />
            <div className="blog-teaser__posts">
                <BlogPost
                    title='Soccer in Suriname'
                    subheadline='A brief History of the Suriname soccer team'
                    text="Suriname has participated in the qualifying matches for the FIFA World Cup since 1962, but has never qualified for the finals. Suriname's strongest showing in World Cup qualification was the campaign for the 1978 finals, when the national team reached the final group stag."
                    image={`${process.env.PUBLIC_URL}/img/pexels-photo-6078297.jpeg`}
                    button={true}
                />
                <BlogPost
                    title='The Sentiment'
                    subheadline='How the team has evolved in 2021'
                    text='Suriname discourages dual citizenship and Surinamese-Dutch players who have picked up a Netherlands passport – which, crucially, offers legal work status in almost any European league – are barred from selection to the national team. Many Suriname-born players and Dutch-born players of Surinamese descent, like Gerald Vanenburg, Ruud Gullit, Frank Rijkaard, Edgar Davids, Clarence Seedorf, Patrick Kluivert, Aron Winter, Georginio Wijnaldum, Virgil van Dijk and Jimmy Floyd Hasselbaink have turned out to play for the Dutch national team.
                    Finally In November 2019, it was announced that a so-called sports passport would allow Dutch professional footballers from the Surinamese diaspora to represent Suriname. On 19 November, Suriname qualified for the 2021 Gold Cup with 2–1 CONCACAF Nations League win over Nicaragua. It will be their debut in the CONCACAF Gold Cup and their first appearance in a CONCACAF tournament since 1985. '
                    image={`${process.env.PUBLIC_URL}/img/pexels-photo-6771671.jpeg`}
                    button={true}
                />
                <BlogPost
                    title='More about NFT'
                    text='Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, consetetur sadipscing elitr'
                    subheadline='Lorem ipsum dolor sit amet'
                    image={`${process.env.PUBLIC_URL}/img/pexels-photo-6771671.jpeg`}
                    button={true}
                />
            </div>
        </section>
    )
}

export default Blog
