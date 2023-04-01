import React, { useContext } from 'react';
import classes from './FinalOrder.module.css'
import img from '../../images/Group 1151.png'
import { mapContex } from '../../App';
import Dimg from '../../images/Group 1152.png'


const FinalOrder = () => {
    const [map, setMap] = useContext(mapContex);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className={`col-md-6 ${classes.div}`}>
                        <img src={img} className={classes.img} alt="" />
                        <div className={classes.mDiv}>
                            <div>
                                <p className={classes.p}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"   fill="#f91944" class="bi bi-dot" viewBox="0 0 16 16">
                                    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                    </svg>Your Location</p> <br /> <br /> <br />
                                <p className={classes.p}><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"   fill="#f91944" class="bi bi-dot" viewBox="0 0 16 16">
                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                                </svg>Shop Address</p>
                            </div>
                            <div className={classes.smDiv}>
                                <small className={classes.small}>{map.dAddress}</small> <br /> <br /> <br />
                                <small className={classes.small}>Gulshan Plaza Restara GPR</small>
                            </div>
                        </div>

                        <h2 className={classes.time}>9:30 PM</h2>
                        <p className={classes.dtime}>Estimated delivery time</p>

                        <div className={`d-flex justify-content-center align-items-center ${classes.rider}`}>
                            <div>
                                <img className={classes.riderImg} src={Dimg} alt="" />
                            </div>
                            <div>
                                <h3 className={classes.riderInfoName}>Hamim</h3>
                                <p className={classes.riderInfo}>Your Rider</p>
                            </div>
                        </div>
                        <button className={`btn ${classes.lastBtn}`}>Connect</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default FinalOrder;