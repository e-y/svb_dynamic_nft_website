import './App.scss';
import Typed from 'react-typed';

function App() {
  return (
    <div className="App">
      <div className="top-navigation flex-layout flex-layout--space">
        <div className="navigation__hamburger">
          <div className="hamburger hamburger--3dx" data-function="js-hamburger">
            <div className="hamburger-box">
              <div className="hamburger-inner"></div>
            </div>
          </div>
        </div>
        <div className="button">Launch App</div>{/*Connect to Wallet*/}
      </div>

      <header className="header" style={{
          background: `url('${process.env.PUBLIC_URL}/img/pexels-photo-54567.jpeg')`,
          backgroundSize: "cover",
        }}>
        <div className="header__logo-box">
          <img src={`${process.env.PUBLIC_URL}/img/logo.png`} className="header__logo header__logo--svb" alt="surinami-logo"></img>
          <span className="header__logo-text">meets</span>
          <div className="nft-box">
            <div className="nft-box__bracket-row"></div>
            <p className="nft-box__title">Non-Fungible Tokens</p>
            <div className="nft-box__bracket-row nft-box__bracket-row--bottom"></div>
          </div>
          {/* <img src={`${process.env.PUBLIC_URL}/img/link-logo.svg`} className="header__logo header__logo--link" alt="link-logo"></img> */}
        </div>
        <Typed
          className="header__animation"
          strings={[
          'An example of NFT',
          'An example of Collectible',
          'An example of Hackathon Code']}
          typeSpeed={40}
          backSpeed={50}
          loop >
        </Typed>
        <nav className="navigation">
          <div className="navigation__item">What´s NFT?</div>
          <div className="navigation__item">Roadmap</div>
          <div className="navigation__item">More</div>
        </nav>
      </header>

      <Typed
          strings={['Lorem ipsum dolor sit amet']}
          typeSpeed={40}
      />
      <br/>

<h2 className="title">Information</h2>

<section className="intros">
  <div className="intro">
    <img src={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`} className="intro__image" alt="nft"></img>
    <div className="intro__box">
      <p className="intro__title">Stet clita kasd gubergren</p>
      <p className="intro__text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    </div>
  </div>
  <div className="intro">
    <div className="intro__box">
      <p className="intro__title">Stet clita kasd gubergren</p>
      <p className="intro__text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
    </div>
    <img src={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`} className="intro__image" alt="nft"></img>
  </div>
</section>

<h2 className="title">Card-Collection</h2>

<h2 className="title">Roadmap</h2>


  <h2 className="title">Check this interactive stuff out</h2>

      {/* EXAMPLE: ANIMATED CARD (ADIDAS) */}
      <div className="container">
        <div className="card">
            <div className="sneaker">
                <div className="circle"></div>
                <img src={`${process.env.PUBLIC_URL}/img/adidas.png`} alt="nft"></img>
            </div>
            <div className="info">
                <h1 className="title">Adidas ZX</h1>
                <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                <div className="sizes">
                    <button>39</button>
                    <button>40</button>
                    <button className="active">42</button>
                    <button>44</button>
                </div>
                <div className="purchase">
                    <button>Purchase</button>
                </div>
            </div>
        </div>
    </div>

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
    <h2 className="title">Read More in our blog posts</h2>

    <div className="blog-teaser">
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
          <div className="blog-teaser__modal">
            <div className="blog-post">
              <img src="#" className="blog-post__image" alt=""></img>
              <div className="blog-post__container">
                <div className="blog-post__title"></div>
                <div className="blog-post__subheadline"></div>
                <div className="blog-post__text"></div>
              </div>
            </div>
          </div>
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
          <div className="blog-teaser__modal">
            <div className="blog-post">
              <img src="#" className="blog-post__image" alt=""></img>
              <div className="blog-post__container">
                <div className="blog-post__title"></div>
                <div className="blog-post__subheadline"></div>
                <div className="blog-post__text"></div>
              </div>
            </div>
          </div>
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
          <div className="blog-teaser__modal">
            <div className="blog-post">
              <img src="#" className="blog-post__image" alt=""></img>
              <div className="blog-post__container">
                <div className="blog-post__title"></div>
                <div className="blog-post__subheadline"></div>
                <div className="blog-post__text"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <h2 className="title">Team</h2>
    <div className="team">
      <div className="team__member">
        <img src={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`} alt="nft" className="team__memberimage"></img>
         <div className="team__memberinfo">
          <div className="team__membername">Max Muster</div>
          <div className="team__memberpos">Waterboy</div>
        </div>
      </div>
      <div className="team__member">
        <img src={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`} alt="nft" className="team__memberimage"></img>
         <div className="team__memberinfo">
          <div className="team__membername">Max Muster</div>
          <div className="team__memberpos">Waterboy</div>
        </div>
      </div>
      <div className="team__member">
        <img src={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`} alt="nft" className="team__memberimage"></img>
         <div className="team__memberinfo">
          <div className="team__membername">Max Muster</div>
          <div className="team__memberpos">Waterboy</div>
        </div>
      </div>
      <div className="team__member">
        <img src={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`} alt="nft" className="team__memberimage"></img>
         <div className="team__memberinfo">
          <div className="team__membername">Max Muster</div>
          <div className="team__memberpos">Waterboy</div>
        </div>
      </div>
      <div className="team__member">
        <img src={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`} alt="nft" className="team__memberimage"></img>
         <div className="team__memberinfo">
          <div className="team__membername">Max Muster</div>
          <div className="team__memberpos">Waterboy</div>
        </div>
      </div>
    </div>

    <div className="modal">yourAppElement</div>

      <footer className="footer">
        <div className="footer__item">
          Github, Chainlink Hackathon 2021 Project, ..
        </div>
      </footer>
    </div>
  );
}

export default App;
