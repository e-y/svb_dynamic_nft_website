import React from 'react'

const specialCard = () => {
    {/* EXAMPLE: ANIMATED CARD (ADIDAS) */}

    return (
        <div className="special-card">
            <div className="special-card__container">
                <div className="special-card__item" style={{ backgroundImage: "url(/img/raw_front_infos.png)" }}>

                    <div className="special-card__player">
                        <img src={`${process.env.PUBLIC_URL}/img/donk.png`} className="image__world-map" alt="Dynamic Card Front"></img>
                    </div>
                    <div className="special-card__info">
                        <h1 className="special-card__title"></h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default specialCard
