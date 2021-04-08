import Title from './section-title'
import TeamMember from '../components/team-member'
import Flag from '../components/flag'

const team = () => {
    return (
        <section className="team">
            <Title title='Team' />
            <div className="team__members">
                <Flag />
                <TeamMember name="Harry" position="Doin lawn" image={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`}/>
                <TeamMember name="Peter" position="Doin lawn" image={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`}/>
                <TeamMember name="Fred" position="Doin lawn" image={`${process.env.PUBLIC_URL}/img/220px-Kermit_the_Frog.jpg`}/>
            </div>
        </section>
    )
}

export default team
