const Hexagon = ({section, inner}) => {

    const innerElement = <div className="hexagon hexagon-inner"></div>

    return (
        <div className={section === true ? 'section-hexagon hexagon' : 'hexagon'}>{ inner === true ? innerElement : '' }</div>
    )
}

export default Hexagon
