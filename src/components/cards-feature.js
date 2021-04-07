import SectionTitle from '../components/section-title'

const cardsFeature = () => {
    return (
        <section className="cards-feature">
            <SectionTitle title='Instructions' subtitle='What to do next?' />
            <div className="cards-feature__container">
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>Step01</h2>
                        <h3>Card One</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum exercitationem explicabo, quae eaque
                        fuga quia adipisci quo? Corporis, in nihil.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>02</h2>
                        <h3>Card Two</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum exercitationem explicabo, quae eaque
                        fuga quia adipisci quo? Corporis, in nihil.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>03</h2>
                        <h3>Card Three</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum exercitationem explicabo, quae eaque
                        fuga quia adipisci quo? Corporis, in nihil.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>04</h2>
                        <h3>Card Four</h3>
                        <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing
                        elit. Dolorum exercitationem explicabo, quae eaque
                        fuga quia adipisci quo? Corporis, in nihil.
                        </p>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cardsFeature
