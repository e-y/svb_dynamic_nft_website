/* eslint-disable import/no-extraneous-dependencies */
import "fullpage.js/vendors/scrolloverflow" // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage"
import fullPageSlide1 from '../components/fullpage-slides/fullpageSlide1'
import TopNavigation from '../components/top-navigation'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"
import SpecialCard from '../components/specialCard'
import CardsFeature from '../components/cards-feature'
import Flag from '../components/flag'

const Homepage = () => {
    const anchors = ["firstPage", "secondPage", "thirdPage"];

    return (
        <ReactFullpage
            //fullpage options
            licenseKey = {'YOUR_KEY_HERE'}
            scrollingSpeed = {1000} /* Options here */

            render={({ state, fullpageApi }) => {
                return (
                    <div className="fullpage">
                        <TopNavigation/>
                        <ReactFullpage.Wrapper>
                            <div className="section fullpage-slide" >
                                <img src={`${process.env.PUBLIC_URL}/img/knitted-paper.png`} className="fullpage-slide__background" alt="surinami-logo"></img>
                                <div className="fullpage-slide fullpage-slide--first" >
                                    <i className="fullpage-slide__coat fullpage-slide__coat--left icon icon-svb-coat"/>
                                    <i className="fullpage-slide__coat fullpage-slide__coat--right icon icon-svb-coat"/>
                                    <img src={`${process.env.PUBLIC_URL}/img/flag-colors.png`} className="flag-image" alt="surinami flag"></img>
                                    <Flag />
                                    <a href="https://testnets.opensea.io/assets/0x6fe40a90b1a8a8378fe2a85357b76d037b3e785a/16" className="fullpage-slide__cta-button fullpage-slide__cta-button--start">Go to the Marketplace</a>
                                    {/* <h1 className="fullpage-slide__title">unique Soccer cards</h1> */}
                                    <div className="fullpage-slide__card-animation-container">
                                        <div className="fullpage-slide__card-animation flip-card">
                                            <div className="flip-card-inner">
                                                <div className="flip-card-front">
                                                    <img src={`${process.env.PUBLIC_URL}/img/output_front-1.png`} className="fullpage-slide__card fullpage-slide__card--front" alt="player card front"></img>
                                                </div>
                                                <div className="flip-card-back">
                                                    <img src={`${process.env.PUBLIC_URL}/img/output_back-1.png`} className="fullpage-slide__card fullpage-slide__card--back" alt="player card back"></img>
                                                </div>
                                                <i className="flip-card__arrow flip-card__arrow--right icon-forward"></i>
                                                <i className="flip-card__arrow flip-card__arrow--left icon-reply"></i>

                                            </div>
                                        </div>
                                        <div className="fullpage-slide__text-animation-container fullpage-slide__text-animation-container--1">
                                            <p className="fullpage-slide__text-animation fullpage-slide__text-animation-1">a new era</p>
                                            <p className="fullpage-slide__text-animation fullpage-slide__text-animation-2">of soccer cards</p>
                                            <p className="fullpage-slide__text-animation fullpage-slide__text-animation-3">just begun</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <div className="section fullpage__slide">
                                <div className="section fullpage-slide--second" style={{ backgroundImage: "url(/img/knitted-paper.png)" }}>
                                    <img src={`${process.env.PUBLIC_URL}/img/`} className="fullpage-slide__background" alt="surinami-logo"></img>
                                    <img src={`${process.env.PUBLIC_URL}/img/587px-Suriname_relief_location_map.jpg`} className="fullpage-slide__background-image fullpage-slide__background-image--world-map" alt="surinami-map"></img>
                                    <img src={`${process.env.PUBLIC_URL}/img/soccer-ball.png`} className="fullpage-slide__background-image fullpage-slide__background-image--soccer-ball" alt="soccer-ball"></img>

                                    <div className="fullpage-slide__text-animation-container fullpage-slide__text-animation-container--2">
                                        <p className="fullpage-slide__text-animation fullpage-slide__text-animation-4">unique and rare content</p>
                                        <p className="fullpage-slide__text-animation fullpage-slide__text-animation-5">stay up to date</p>
                                        <p className="fullpage-slide__text-animation fullpage-slide__text-animation-6">you own it</p>
                                        <p className="fullpage-slide__text-animation fullpage-slide__text-animation-7">easy access</p>
                                    </div>

                                    <div className="fullpage-slide__badge-animation-container fullpage-slide__badge-animation-container--2">
                                        <div className="fullpage-slide__badge-animation fullpage-slide__badge-animation-1">
                                            <img src={`${process.env.PUBLIC_URL}/img/badge.svg`} className="icon__badge" alt="badge"></img>
                                            <i className="icon icon-mobile"></i>
                                            <div className="fullpage-slide__badge-animation-text-container">
                                                <p className="fullpage-slide__badge-animation-text">limited</p>
                                                <p className="fullpage-slide__badge-animation-text-info">limited</p>
                                            </div>
                                        </div>
                                        <div className="fullpage-slide__badge-animation fullpage-slide__badge-animation-2">
                                            <img src={`${process.env.PUBLIC_URL}/img/badge.svg`} className="icon__badge" alt="badge"></img>
                                            <i className="icon icon-mobile"></i>
                                            <div className="fullpage-slide__badge-animation-text-container">
                                                <p className="fullpage-slide__badge-animation-text">ownership</p>
                                                <p className="fullpage-slide__badge-animation-text-info">limited</p>
                                            </div>
                                        </div>
                                        <div className="fullpage-slide__badge-animation fullpage-slide__badge-animation-3">
                                            <img src={`${process.env.PUBLIC_URL}/img/badge.svg`} className="icon__badge" alt="badge"></img>
                                            <i className="icon icon-mobile"></i>
                                            <div className="fullpage-slide__badge-animation-text-container">
                                                <p className="fullpage-slide__badge-animation-text">dynamic data</p>
                                                <p className="fullpage-slide__badge-animation-text-info">limited</p>
                                            </div>
                                        </div>
                                        <div className="fullpage-slide__badge-animation fullpage-slide__badge-animation-4">
                                            <img src={`${process.env.PUBLIC_URL}/img/badge.svg`} className="icon__badge" alt="badge"></img>
                                            <i className="icon icon-mobile"></i>
                                            <div className="fullpage-slide__badge-animation-text-container">
                                                <p className="fullpage-slide__badge-animation-text">variety</p>
                                                <p className="fullpage-slide__badge-animation-text-info">limited</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="fullpage-slide__more-infos-animation-container">
                                        <div className="fullpage-slide__more-infos-animation fullpage-slide__more-infos-animation-1">
                                            <p className="fullpage-slide__more-infos-title">Title 1</p>
                                            <ul className="fullpage-slide__more-infos-list">
                                                <li className="fullpage-slide__more-infos-list-item">First</li>
                                                <li className="fullpage-slide__more-infos-list-item">Second</li>
                                                <li className="fullpage-slide__more-infos-list-item">Third</li>
                                                <li className="fullpage-slide__more-infos-list-item">Fourth</li>
                                            </ul>
                                        </div>
                                        <div className="fullpage-slide__more-infos-animation fullpage-slide__more-infos-animation-2">
                                            <p className="fullpage-slide__more-infos-title">Title 2</p>
                                            <ul className="fullpage-slide__more-infos-list">
                                                <li className="fullpage-slide__more-infos-list-item">First</li>
                                                <li className="fullpage-slide__more-infos-list-item">Second</li>
                                                <li className="fullpage-slide__more-infos-list-item">Third</li>
                                                <li className="fullpage-slide__more-infos-list-item">Fourth</li>
                                            </ul>
                                        </div>
                                        <div className="fullpage-slide__more-infos-animation fullpage-slide__more-infos-animation-3">
                                            <p className="fullpage-slide__more-infos-title">Title 3</p>
                                            <ul className="fullpage-slide__more-infos-list">
                                                <li className="fullpage-slide__more-infos-list-item">First</li>
                                                <li className="fullpage-slide__more-infos-list-item">Second</li>
                                                <li className="fullpage-slide__more-infos-list-item">Third</li>
                                                <li className="fullpage-slide__more-infos-list-item">Fourth</li>
                                            </ul>
                                        </div>
                                        <div className="fullpage-slide__more-infos-animation fullpage-slide__more-infos-animation-4">
                                            <p className="fullpage-slide__more-infos-title">Title 4</p>
                                            <ul className="fullpage-slide__more-infos-list">
                                                <li className="fullpage-slide__more-infos-list-item">First</li>
                                                <li className="fullpage-slide__more-infos-list-item">Second</li>
                                                <li className="fullpage-slide__more-infos-list-item">Third</li>
                                                <li className="fullpage-slide__more-infos-list-item">Fourth</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <Link to="/info">
                                        <button className="fullpage-slide__cta-button fullpage-slide__cta-button--website">Get more Information</button>
                                    </Link>
                                    <Flag />


                                    {/* <p>Section 1 (welcome to fullpage.js)</p>
                                    <button onClick={() => fullpageApi.moveSectionDown()}>
                                        Click me to move down
                                    </button> */}
                                </div>
                            </div>
                            <div className="section fullpage__slide">
                                <img src={`${process.env.PUBLIC_URL}/img/PIXNIO-1735948-5696x3797.jpg`} className="fullpage-slide__background" alt="surinami-logo"></img>
                                <div className="section fullpage__slide--third">
                                    <Flag />
                                    <div className="fullpage-slide__infos">
                                        <h2 className="fullpage-slide__info-title">SVB digital collectable player-card is a project built by a Global team of developers participating in the ChainLink Hackathon 2021.</h2>
                                        <p className="fullpage-slide__info-subtitle">This is an attempt to introduce the proud fans of Suriname to: </p>
                                        <ul className="fullpage-slide__info-list">
                                            <li className="fullpage-slide__info-listitem">Exclusive collectable digitale trading cards (NFT’s) - Exclusive artwork with limited editions</li>
                                            <li className="fullpage-slide__info-listitem">Images/pictures with exclusive content (never posted or shared before)</li>
                                            <li className="fullpage-slide__info-listitem">Engaged and involved with the National soccer team in a revolutionary way.</li>
                                            <li className="fullpage-slide__info-listitem">Follow dynamic data on the card as a player evolves.</li>
                                        </ul>
                                    </div>
                                    <Link to="/info">
                                        <button className="fullpage-slide__cta-button fullpage-slide__cta-button--website-50">Get more information</button>
                                    </Link>
                                    <a href="https://testnets.opensea.io/assets/0x6fe40a90b1a8a8378fe2a85357b76d037b3e785a/16" className="fullpage-slide__cta-button fullpage-slide__cta-button--marketplace-50">Go to the Marketplace</a>
                                </div>
                            </div>
                            {/* <div className="section fullpage__slide">
                                <div className="section fullpage__slide--fourth">
                                    <h1 className="fullpage__title">find out more here</h1>
                                    <CardsFeature />
                                    <Link to="/info">More</Link>
                                    <i className="icon-badge">
                                        <span className="path1"></span>
                                        <span className="path2"></span>
                                        <span className="path3"></span>
                                    </i>
                                </div>
                            </div> */}
                        </ReactFullpage.Wrapper>
                    </div>
                );
            }}
        />
    )
}

export default Homepage