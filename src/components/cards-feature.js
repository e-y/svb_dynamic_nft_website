import SectionTop from '../components/section-top'

const cardsFeature = () => {
    return (
        <section className="section cards-feature" id="howto">
            <SectionTop title='Instructions' subtitle="What to do next?" badge={true} badge_icon='icon-key' />
            <div className="cards-feature__container">
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>01</h2>
                        <h3>Install MetaMask</h3>
                        <img src={`${process.env.PUBLIC_URL}/img/metamask.png`} alt="nft" className="cards-feature__image cards-feature__image--metamask"></img>
                        <p>
                            A modern browser wallet brings you one step closer to our NFT
                        </p>
                        <span className="cards-feature__more-text">MetaMask is one of many solutions for browser wallets and the place where NFTs are stored. It is the way to interact with the NFT space.</span>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>02</h2>
                        <h3>Get yourself some ETH</h3>
                        <img src={`${process.env.PUBLIC_URL}/img/ethereum.svg`} alt="nft" className="cards-feature__image cards-feature__image--ethereum"></img>
                        <p>
                        The technology runs on the Ethereum Blockchain
                        </p>
                        <span className="cards-feature__more-text">Ethereum (ETH) is a crypto currency that not only allows for payments but also offers access to decentralized smart contracts.</span>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>03</h2>
                        <h3>Buy on Opensea</h3>
                        <img src={`${process.env.PUBLIC_URL}/img/opensea.png`} alt="nft" className="cards-feature__image cards-feature__image--opensea"></img>
                        <p>
                        On this NFT-marketplace you can purchase our SVB-Card
                        </p>
                        <span className="cards-feature__more-text">Marketplaces not only give you the tools to buy NFT but you may also sell them.</span>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
                <div className="cards-feature__card">
                    <div className="cards-feature__box">
                    <div className="cards-feature__content">
                        <h2>04</h2>
                        <h3>Enjoy!</h3>
                        <i className="cards-feature__image icon-rocket cards-feature__image--rocket"></i>
                        <p>
                        Create a new era of collectables
                        </p>
                        <span className="cards-feature__more-text">Be part of the Suriname collectors and become one of the first early adopters in that space</span>
                        <a href="#">Read More</a>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default cardsFeature
