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
import { NikeCard } from "../components/nikeCard/index";


const info = () => {
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
            <NikeCard />
            <span class="icon-globe"></span>
            <Typed
                strings={['Lorem ipsum dolor sit amet']}
                typeSpeed={40}
            />
            <div className="container">
                <Intro />
            </div>

            <div class="container">
                <CardsFeature />
            </div>

            <div class="container">
                <Blog />
            </div>

            <div class="container">
                <FaqAccordion/>
            </div>

            <div class="container">
                <Team />
            </div>

        </>
    )
}

export default info
