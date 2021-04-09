import IntroItem from './introItem'
import SectionTop from './section-top'

const Intro = () => {
    return (
        <section className="section intros" id="infos">
            {/* <SectionTitle title='Intro' subtitle='General Ideas' /> */}
            <SectionTop title='Intro' subtitle='General Ideas' badge={true} badge_title='NFT' />
            <IntroItem
                img_position="left"
                title='Collectables of the new generation'
                text='Our soccer cards are not only looking elegant but also serve with great functionality. With updated statistics you will stay on track about your favorite players.'
                image_url={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`}
                image_alt='Soccer player'
            />

            <IntroItem
                img_position="right"
                title='Rarity and a growing demand'
                text='This card is right on time as the demand for digital collectables is increasingly growing. Not only will you have the chance to start early with the adoption but also might see a rise of the monetary value.'
                image_url={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`}
                image_alt='test-alt2'
                position={false}
            />

            <IntroItem
                img_position="left"
                title='Your card stored in the Blockchain'
                text='By using modern technology you will have'
                image_url={`${process.env.PUBLIC_URL}/img/pexels-photo-4785491.jpeg`}
                image_alt='test-alt2'
                position={false}
            />
        </section>
    )
}

export default Intro
