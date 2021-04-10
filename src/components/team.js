import Title from './section-title'
import TeamMember from '../components/team-member'
import Flag from '../components/flag'
import { Parallax, Background } from 'react-parallax'
import SectionTop from '../components/section-top';

const team = () => {
    const image1 = "https://images.unsplash.com/photo-1498092651296-641e88c3b057?auto=format&fit=crop&w=1778&q=60&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"

    return (
        <section className="team" id="team">
            <SectionTop title='Crew' subtitle='happily coding the future' badge={true} badge_icon='icon-soccer-ball' />
            <Parallax className="team__parallax" bgImage={image1} strength={500}>
                <div className="team__members">
                    <TeamMember name="Eric Young" position="Project Lead /Backend" initials="EY" country="USA" />
                    <TeamMember name="Rouark Leerdam" position="Pitch /Info /Roadmap" initials="RL" country="NED"/>
                    <TeamMember name="Denny Sander" position="Frontend /Bridge"  initials="DS" country="GER" />
                    {/* <TeamMember name="Kermit" position="Doin Lawn" image={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`}/> */}
                </div>
                <div className="team__links">
                    <a className="team__link" href="https://github.com/e-y/svb_dynamic_nft">
                        <i className="team__link-icon team__link-icon--github icon icon-github"></i>
                        <span className="team__link-icon-text">Code on Github</span>
                    </a>
                    <a className="team__link" href="https://github.com/e-y/svb_dynamic_nft">
                        <i className="team__link-icon team__link-icon--discord icon icon-discord"></i>
                        <span className="team__link-icon-text">Our Discord</span>
                    </a>
                </div>
            </Parallax>
        </section>
    )
}

export default team
