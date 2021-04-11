import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import { useState } from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const TopNavigation = () => {
    const [open, setNavToggle] = useState(false)

    function handleClick(e) {
        e.preventDefault();
        setNavToggle(!open)
    }

    return (
        <div className='top-navigation'>
            <div className="top-navigation__hamburger" onClick={handleClick}>
                <div className="hamburger hamburger--3dx" data-function="js-hamburger">
                    <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
            <Link to="/">
                <img className="top-navigation__logo" alt="surinami-logo" src={`${process.env.PUBLIC_URL}/img/logo.png`}></img>
            </Link>
            <div className="top-navigation__connectwallet button">Launch App</div>{/*Connect to Wallet*/}

            <div className={!open ? 'top-navigation__popup' : 'top-navigation__popup top-navigation__popup--active'}>
                <div className="main-navigation__main">
                    <p className="main-navigation__headline">2022 Unofficial Suriname NFT</p>
                    <i className="main-navigation__icon icon icon-svb-coat"></i>
                    {/* <BadgeIcon badge_icon={true} badge_title="NFT" /> */}
                </div>
                <div className="main-navigation__list">
                    <p className="main-navigation__list-title">Homepage</p>
                    <div className="main-navigation__list-items">
                        <Link to="/" className="main-navigation__list-item" offset='80'>Intro</Link>
                        <Link to="/" className="main-navigation__list-item" offset='80'>Teaser</Link>
                        <Link to="/" className="main-navigation__list-item" offset='80'>Infos</Link>
                    </div>
                </div>

                <div class="footer__list">
                    <p className="footer__list-title">Website</p>
                    <div className="footer__list-items">
                        <AnchorLink className="footer__list-item" href='#start' offset='80'>See the Card</AnchorLink>
                        <AnchorLink className="footer__list-item" href='#infos' offset='80'>General Information</AnchorLink>
                        <AnchorLink className="footer__list-item" href='#howto' offset='80'>How to</AnchorLink>
                        <AnchorLink className="footer__list-item" href='#blog' offset='80'>Blog</AnchorLink>
                        <AnchorLink className="footer__list-item" href='#faq' offset='80'>FAQ</AnchorLink>
                        <AnchorLink className="footer__list-item" href='#team' offset='80'>Team</AnchorLink>
                        <AnchorLink className="footer__list-item" href='#contact' offset='80'>Contact</AnchorLink>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopNavigation
