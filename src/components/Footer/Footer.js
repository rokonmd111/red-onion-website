import React from 'react';
import classes from './Footer.module.css'
import logo from '../../images/logo.png'

const Footer = () => {
    return (
        <div className={classes.footerBg}>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3">
                        <img className={classes.logo} src={logo} alt="" />
                    </div>
                    <div className="col-md-3"></div>
                    <div className={`col-md-3 ${classes.flink}`}>
                        <p><a href="#">About Online Food</a></p>
                        <p><a href="#">Read Our Blog</a></p>
                        <p><a href="#">Sign up to Deliver</a></p>
                        <p><a href="#">Add Your Restrurent</a></p>
                    </div>
                    <div className={`col-md-3 ${classes.flink}`}>
                        <p><a href="#">Get Help</a></p>
                        <p><a href="#">Read FAQs</a></p>
                        <p><a href="#">View all Clints</a></p>
                        <p><a href="#">Restrurent Near me</a></p>
                    </div>
                </div>
                <div className={`d-flex justify-content-between ${classes.lastlinks}`}>
                    <div>
                        <p className={classes.copyright}><small>Copyright &#169; 2020 Online Food</small></p>
                    </div>
                    <div className='d-flex'>
                        <p><a href="#">Privacy Policy</a></p>
                        <p><a href="#">Tarms of Use</a></p>
                        <p><a href="#">Pricing</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;