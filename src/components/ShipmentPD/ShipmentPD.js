import React from 'react';
import classes from './ShipmentPD.module.css'

const ShipmentPD = (props) => {
    const {name, price, image} = props.product

    return (
        <div className={`card mb-3 ${classes.cardBody}`} style={{maxWidth: '540px'}}>
            <div className="row g-0">
                <div className={`col-md-4 ${classes.cardM}`}>
                <img src={image} className={`img-fluid rounded-start ${classes.img}`} alt="..."/>
                </div>
                <div className={`col-md-4 d-flex ${classes.cardM2}`}>
                <div className={`card-body ${classes.cardHnP}`}>
                    <h5 className={`card-title ${classes.cTitle}`}>{name}</h5>
                    <h5 className={classes.price}>${price}</h5>
                </div>
                <div className={classes.increment}>
                    <button className={`btn ${classes.btnIncr}`}>- 01 +</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default ShipmentPD;