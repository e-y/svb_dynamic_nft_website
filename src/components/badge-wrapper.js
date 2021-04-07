import BadgeIcon from './badge-icon'
import Hexagon from './hexagon'

const BadgeWrapper = ({badge_title, section}) => {
    return (
        <div className="badge-wrapper">
            <BadgeIcon badge_title={badge_title} section={section} wrapper={true} />
            <Hexagon section={section} />
        </div>
    )
}

export default BadgeWrapper
