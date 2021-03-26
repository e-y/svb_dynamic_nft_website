import React from 'react'

const specialCard = () => {
    {/* EXAMPLE: ANIMATED CARD (ADIDAS) */}
    
    return (
        <div className="container">
            <div className="card">
                <div className="sneaker">
                    <div className="circle"></div>
                    <img src={`${process.env.PUBLIC_URL}/img/adidas.png`} alt="nft"></img>
                </div>
                <div className="info">
                    <h1 className="title">Adidas ZX</h1>
                    <h3>FUTURE-READY TRAINERS WITH WRAPPED BOOST FOR EXCEPTION COMFORT.</h3>
                    <div className="sizes">
                        <button>39</button>
                        <button>40</button>
                        <button className="active">42</button>
                        <button>44</button>
                    </div>
                    <div className="purchase">
                        <button>Purchase</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default specialCard
