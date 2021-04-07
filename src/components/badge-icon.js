import React from 'react'

const BadgeIcon = ({badge_title, section, wrapper}) => {
    const BadgeTitle = <span className={wrapper ? 'badge-wrapper__title' : 'badge-title'}>{badge_title}</span>
    return (
        <span className={section === true ? 'section-badge icon-badge' : 'icon-badge'}>
            <span className="icon-badge-inner"></span>
            <span className="icon-badge-outer"></span>
            <span className="icon-badge-shadow"></span>
            { badge_title !== undefined ? BadgeTitle : '' }
        </span>
    )
}

export default BadgeIcon
