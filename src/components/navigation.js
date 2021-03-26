import React, { Component } from 'react';
import Typed from 'react-typed';
import TopNavigation from './top-navigation';

class Navigation extends Component {
    componentDidMount() {
        console.log('I was triggered during componentDidMount')
        console.log(document.querySelector("header"));
    }

    render(){

        return (

        <header className="header" style={{
            background: `url('${process.env.PUBLIC_URL}/img/pexels-photo-54567.jpeg')`,
            backgroundSize: "cover",
            }}>
            <TopNavigation/>
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
                loop />
            <nav className="navigation">
            <div className="navigation__item">What´s NFT?</div>
            <div className="navigation__item">Roadmap</div>
            <div className="navigation__item">More</div>
            </nav>
        </header>

        );

    }

}

export default Navigation;