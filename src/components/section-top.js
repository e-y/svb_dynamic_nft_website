import BadgeWrapper from './badge-wrapper'
import SectionTitle from './section-title'

const SectionTop = ({title, subtitle, badge, badge_title}) => {
    return (
        <>
            { badge === true ? <BadgeWrapper badge_title={badge_title} section={true} /> : '' }
            <SectionTitle title={title} subtitle={subtitle} />
        </>
    )
}

export default SectionTop
