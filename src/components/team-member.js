const TeamMember = ({name, position, image, initials, country }) => {
    return (
        <div className="team__member">
            {initials ? <span className="team__memberinitials" data-name={name}>{initials}</span> : '' }
            {image ? <img src={image} alt="nft" className="team__memberimage"></img> : ''}
            <div className="team__memberinfo">
                <div className="team__membername">{name}</div>
                <div className="team__memberpos">{position}</div>
                {country ? <span className="team__membercountry" data-name={name}>{country}</span> : '' }
            </div>
        </div>
    )
}

export default TeamMember
