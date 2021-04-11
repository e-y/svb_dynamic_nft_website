import React from 'react'

const CardLayout = () => {
    return (
        <div className="card-layout">
            <img className="card-layout__image card-layout__image--front" alt="front" src={`${process.env.PUBLIC_URL}/img/output_front-1.png`}></img>
            <img className="card-layout__image card-layout__image--back" alt="front" src={`${process.env.PUBLIC_URL}/img/output_back-1.png`}></img>
        </div>
    )
}

export default CardLayout
