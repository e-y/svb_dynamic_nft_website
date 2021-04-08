import Blog from '../components/blog/blog'
import ImageGeneration from '../components/image-generation'
import Intro from '../components/intro'
import Navigation from '../components/navigation'
import SpecialCard from '../components/specialCard'
import TopNavigation from '../components/top-navigation'
import Typed from 'react-typed'
import FaqAccordion from '../components/faq'
import Team from '../components/team'
import CardsFeature from '../components/cards-feature'
import { NikeCard } from "../components/nikeCard/index"
import ContactForm from '../components/contact-form'
import { Parallax, Background } from 'react-parallax'
import Footer from '../components/footer'

const info = () => {
    // consconst t image1 = `${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`,
    const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

    const style = {
        position: 'absolute',
        background: `rgba(255, 125, 0, .5)`,
        left: '0',
        top: '0',
        width: '100%'
    }

    const styles = {
        fontFamily: "sans-serif",
        textAlign: "center"
      };
    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };

    return (
        <>
            <TopNavigation/>
            {/* <i className="icon icon-badge">
                <span className="path1"></span>
                <span className="path2"></span>
                <span className="path3"></span>
            </i>
            <SpecialCard />
            <Navigation/> */}
            <Parallax bgImage={image1} strength={500}>
                <NikeCard />
                <Typed
                    className="header__animation"
                    strings={[
                        'An example of NFT',
                        'An example of Collectible',
                        'An example of Hackathon Code'
                    ]}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                </Typed>
                <span class="icon-globe"></span>
            </Parallax>
            
            <div className="container">
                <Intro />
            </div>

            <Parallax bgImage={image1}  strength={500} blur={{ min: -15, max: 15 }}>
                <div class="container">
                    <CardsFeature />
                </div>
            </Parallax>

            <div class="container">
                <Blog />
            </div>

            <div class="container">
                <FaqAccordion/>
            </div>

            <div class="container">
                <Team />
            </div>

            <div class="container">
                <ContactForm />
            </div>

            <Footer />
        </>
    )
}

export default info
