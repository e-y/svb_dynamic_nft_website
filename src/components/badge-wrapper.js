import BadgeIcon from './badge-icon'
import Hexagon from './hexagon'

const BadgeWrapper = ({ badge_title, section }) => {
    const divClassName =  ({ section } === true) ? 'section__badge-wrapper' : 'badge-wrapper'
    console.log("Section:" + { section })
    return (
        <div className={divClassName}>
            <BadgeIcon badge_title={badge_title} section={section} wrapper={true} />
            <Hexagon section={section} inner={true} />
        </div>
    )
}

export default BadgeWrapper
