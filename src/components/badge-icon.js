import React from 'react'

const BadgeIcon = ({badge_title, section, wrapper, badge_icon }) => {
    const BadgeTitle = <span className={wrapper ? 'badge-wrapper__title' : 'badge-title'}>{badge_title}</span>
        const BadgeIconCSSClass = `badge-wrapper__icon icomoon icon ${badge_icon}`
        const BadgeIconElement = badge_icon ? <i className={BadgeIconCSSClass}></i> : ''

    return (
        <span className={section === true ? 'section-badge icon-badge' : 'icon-badge'}>
            <span className="icon-badge-inner"></span>
            <span className="icon-badge-outer"></span>
            <span className="icon-badge-shadow"></span>
            { badge_title ? BadgeTitle : '' }
            { badge_icon ? BadgeIconElement : '' }
        </span>
    )
}

export default BadgeIcon
