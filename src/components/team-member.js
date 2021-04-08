const TeamMember = ({name, position, image}) => {
    return (
        <div className="team__member">
            <img src={image} alt="nft" className="team__memberimage"></img>
            <div className="team__memberinfo">
                <div className="team__membername">{name}</div>
                <div className="team__memberpos">{position}</div>
            </div>
        </div>
    )
}

export default TeamMember
