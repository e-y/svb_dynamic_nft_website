import Title from './title'
import IntroItem from './introItem'

const Intro = () => {
    return (
        <section className="intros">
        <Title title='Intro' />

        <IntroItem placing="left" title='Test-Title' text='texttexttext' image_url={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`} image_alt='test-alt'/>
        
        <div className="intro">
            <div className="intro__box">
                <p className="intro__title">Stet clita kasd gubergren</p>
                <p className="intro__text"> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat</p>
            </div>
            <img src={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`} className="intro__image" alt="nft"></img>
        </div>

        <IntroItem title='Stet clita kasd gubergren' text='Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat' image_url={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`} image_alt='test-alt2'/>

        </section>
    )
}

export default Intro
