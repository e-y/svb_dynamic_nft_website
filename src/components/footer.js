import react from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Link } from "react-router-dom"
import BadgeIcon from './badge-icon'

const Footer = () => {
    const AnchorElement = <AnchorLink className="footer__list-item" href="blog">Things</AnchorLink>

    return (
        <div className="footer">
            <div className="footer__main">
                <p className="footer__headline">2022 Unofficial Suriname NFT</p>
                <i className="footer__icon icon icon-svb-coat"></i>
                {/* <BadgeIcon badge_icon={true} badge_title="NFT" /> */}
            </div>
            <div className="footer__list">
                <p className="footer__list-title">Homepage</p>
                <div className="footer__list-items">
                    <Link to="/" className="footer__list-item" offset='80'>Intro</Link>
                    <Link to="/" className="footer__list-item" offset='80'>Teaser</Link>
                    <Link to="/" className="footer__list-item" offset='80'>Infos</Link>
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
    )
}

export default Footer
