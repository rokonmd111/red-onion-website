import React, { useContext, useState } from 'react';
import classes from './Shipment.module.css'
import ShipmentPD from '../ShipmentPD/ShipmentPD';
import { productContex, mapContex } from '../../App';
import { Link } from 'react-router-dom';

const Shipment = () => {
    const [cardItem, setCardItem] = useContext(productContex);
    const [button, setButton] = useState(true);
    const [deliveryData, setDeliveryData] = useState({
        dPlace: '',
        dAddress: '',
        dFlat: '',
        dName: '',
        dInstructor: '',
    });

    const [map, setMap] =useContext(mapContex);

    let itemPrice = 0;
    for (let i = 0; i < cardItem.length; i++) {
        const item = cardItem[i];
        itemPrice = itemPrice + item.price;
    }

    let tax = itemPrice / 10;
    let deliveryFee = 0;
    if (itemPrice < 10) {
        deliveryFee = 5
    }
    if (itemPrice > 10) {
        deliveryFee = 2
    }
    if (itemPrice > 20) {
        deliveryFee = 0
    }
    const total = itemPrice + tax + deliveryFee;

    const handleInput = (e) => {
        let input;
        if (e.target.name === 'dPlace') {
            input = e.target.value
        }
        if (e.target.name === 'dAddress') {
            input = e.target.value
        }
        if (e.target.name === 'dFlat') {
            input = e.target.value
        }
        if (e.target.name === 'dName') {
            input = e.target.value
            setButton(false);
        }
        if (e.target.name === 'dInstructor') {
            input = e.target.value
        }
        if (input) {
            const data = {...deliveryData}
            data[e.target.name] = e.target.value
            setDeliveryData(data);
            setMap(data);
        }
    }

    return (
        <div className='container'>
            <div className="row">
                <div className={`col-md-6 ${classes.div}`}>
                    <h2>Edit Delivery Details</h2>
                    <hr />
                    <div className="form-control">
                        <input className={`form-control ${classes.input}`} type="text" name="dPlace" placeholder='Delivery to Door' onBlur={handleInput} /> <br />
                        <input className={`form-control ${classes.input}`} type="text" name="dAddress" placeholder='107 Rd No 8' onBlur={handleInput} /> <br />
                        <input className={`form-control ${classes.input}`} type="text" name="dFlat" placeholder='Flat, suite or Floor ' onBlur={handleInput} /> <br />
                        <input className={`form-control ${classes.input}`} type="text" name="dName" placeholder='Business Name' onBlur={handleInput} /> <br />
                        <input className={`form-control ${classes.input2}`} type="text" name="dInstructor" placeholder='Add Delivery Instructor' onBlur={handleInput} />
                    </div>
                    <button className={`btn ${classes.btn}`}>Save & Continue</button>
                </div>
                <div className={`col-md-6 ${classes.div}`}>
                    <p>From <b>Gulshan Plaza Restara GPR</b></p>
                    <p>Arriving in 20-30 min</p>
                    <p>107 Rd No 8</p>
                    {
                        cardItem.map(item => <ShipmentPD key={item.id} product={item}></ShipmentPD>)
                    }

                    <div className="d-flex justify-content-between" style={{width: '310px'}}>
                        <div>
                            <p><small>Subtotal</small></p>
                            <p><small>Tax</small></p>
                            <p><small>Delivery Fee</small></p>
                            <p><b>Total</b></p>
                        </div>
                        <div className='text-end'>
                            <p>${itemPrice}</p>
                            <p>${tax.toFixed(2)}</p>
                            <p>${deliveryFee}</p>
                            <p><b>${total.toFixed(2)}</b></p>
                        </div>
                    </div>
                    <Link to={'/finalorder'}><button className={`btn ${classes.btnOrder}`} disabled={button}>Place Order</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Shipment;