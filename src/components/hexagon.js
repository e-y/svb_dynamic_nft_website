const Hexagon = ({section}) => {
    return (
        <div className={section === true ? 'section-hexagon hexagon' : 'hexagon'}></div>
    )
}

export default Hexagon
