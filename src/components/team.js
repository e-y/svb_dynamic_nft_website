import Title from './section-title'
import TeamMember from '../components/team-member'
import Flag from '../components/flag'
import { Parallax, Background } from 'react-parallax'
import SectionTop from '../components/section-top';
import backgroundImage1 from '../assets/images/photo-1459865264687-595d652de67e.jpg'
import backgroundImage3 from '../assets/images/photo-1517747614396-d21a78b850e8.jpg'
import backgroundImage5 from '../assets/images/photo-1507226353400-5ec8e43add88.jpg'

const team = () => {

    return (
        <section className="team" id="team">
            <SectionTop title='Crew' subtitle='happily coding the future' badge={true} badge_icon='icon-soccer-ball' />
            <Parallax className="team__parallax" bgImage={backgroundImage1} className="image-grass-light" strength={500}>
                <div className="team__members">
                    <TeamMember name="Erik Young" position="Project Lead /Backend" initials="EY" country="USA" />
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
