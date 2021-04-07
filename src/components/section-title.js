
const SectionTitle = ({title, subtitle}) => {
    let sectionSubtitle = <div className="section-title__subtitle">{subtitle}</div>
    return (
        <div className="section-title">
            <div className="section-title__main">
                {title}
                {subtitle ? sectionSubtitle : ''}
            </div>
        </div>
    )
}

export default SectionTitle
