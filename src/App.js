import './App.scss'
import Typed from 'react-typed'
import React from 'react'
// import Homepage from './pages/homepage'
import Navigation from './components/navigation'
import Title from './components/title'
import Intro from './components/intro'
import SpecialCard from './components/specialCard'
import Blog from './components/blog'

function App() {
  return (

    <div className="App">
      {/* <Homepage/> */}
      <Navigation/>
      
      <Typed
          strings={['Lorem ipsum dolor sit amet']}
          typeSpeed={40}
      />
      <br/>

<Intro />
<Title title='Card-Collection' />
<Title title='Check this interactive stuff out' />

<SpecialCard />

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

    <Blog />

    <Title title='Team' />
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
