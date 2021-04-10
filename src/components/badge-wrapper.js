import BadgeIcon from './badge-icon'
import Hexagon from './hexagon'

const BadgeWrapper = ({ badge_title, section, badge_icon }) => {
    const divClassName =  ({ section } === true) ? 'section__badge-wrapper' : 'badge-wrapper'
    return (
        <div className={divClassName}>
            <BadgeIcon badge_icon={badge_icon} badge_title={badge_title} section={section} wrapper={true} />
            <Hexagon section={section} inner={true} />
        </div>
    )
}

export default BadgeWrapper
