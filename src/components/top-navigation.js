const TopNavigation = () => {
    return (
        <div className="top-navigation">
            <div className="top-navigation__hamburger">
                <div className="hamburger hamburger--3dx" data-function="js-hamburger">
                    <div className="hamburger-box">
                    <div className="hamburger-inner"></div>
                    </div>
                </div>
            </div>
            <img className="top-navigation__logo" alt="surinami-logo" src={`${process.env.PUBLIC_URL}/img/logo.png`}></img>
            <div className="top-navigation__connectwallet button">Launch App</div>{/*Connect to Wallet*/}
        </div>
    )
}

export default TopNavigation
