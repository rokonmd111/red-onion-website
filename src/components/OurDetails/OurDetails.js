import React from 'react';
import img1 from '../../images/adult-blur-blurred-background-687824.png'
import img2 from '../../images/chef-cook-food-33614.png'
import img3 from '../../images/architecture-building-city-2047397.png'

const OurDetails = () => {
    const style = {
        height: '380px',
        width: 'auto',
    }
const iconStyle = {
    backgroundColor: '#f91944',
    width: '40px',
    height: '40px',
    borderRadius: '33px',
    marginRight: '16px',
}
const contentDiv = {
    marginTop: '20px',
}
const seeMoreStyle = {
    marginRight: '10px',
    textDecoration: 'none',
}
    return (
        <div className='row d-flex text-center'>
            <div className="col-md-4">
                <img style={style} src={img1} alt="img1" />
                <div style={contentDiv} className='d-flex'>
                    <div style={iconStyle}>
                        <svg style={{marginTop: '11px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#fff" class="bi bi-bus-front" viewBox="0 0 16 16">
                        <path d="M5 11a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm8 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0Zm-6-1a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2H7Zm1-6c-1.876 0-3.426.109-4.552.226A.5.5 0 0 0 3 4.723v3.554a.5.5 0 0 0 .448.497C4.574 8.891 6.124 9 8 9c1.876 0 3.426-.109 4.552-.226A.5.5 0 0 0 13 8.277V4.723a.5.5 0 0 0-.448-.497A44.303 44.303 0 0 0 8 4Zm0-1c-1.837 0-3.353.107-4.448.22a.5.5 0 1 1-.104-.994A44.304 44.304 0 0 1 8 2c1.876 0 3.426.109 4.552.226a.5.5 0 1 1-.104.994A43.306 43.306 0 0 0 8 3Z"/>
                        <path d="M15 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1V2.64c0-1.188-.845-2.232-2.064-2.372A43.61 43.61 0 0 0 8 0C5.9 0 4.208.136 3.064.268 1.845.408 1 1.452 1 2.64V4a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v3.5c0 .818.393 1.544 1 2v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5V14h6v1.5a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2c.607-.456 1-1.182 1-2V8ZM8 1c2.056 0 3.71.134 4.822.261.676.078 1.178.66 1.178 1.379v8.86a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 11.5V2.64c0-.72.502-1.301 1.178-1.379A42.611 42.611 0 0 1 8 1Z"/>
                        </svg>
                    </div>
                    <div className='text-start'>
                        <h5>Fast Delivary</h5>
                        <p style={{fontWeight: '300', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Blanditiis consequuntur aliquid <br /> natus repellendus! Iure natus amet.</p>
                        <div className='d-flex'>
                            <a style={seeMoreStyle} href="#">See more</a>
                            <div>
                                <svg style={{marginTop: '0px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightGreen" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <img style={{height: '465px', width: '420px',}} src={img2} alt="img2" />
                <div style={contentDiv} className='d-flex'>
                    <div style={iconStyle}>
                        <svg style={{marginTop: '11px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-bell" viewBox="0 0 16 16">
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                        </svg>
                    </div>
                    <div className='text-start'>
                        <h5>A Good Auto Responder</h5>
                        <p style={{fontWeight: '300', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Blanditiis consequuntur aliquid <br /> natus repellendus! Iure natus amet.</p>
                        <div className='d-flex'>
                            <a style={seeMoreStyle} href="#">See more</a>
                            <div>
                                <svg style={{marginTop: '0px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightGreen" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
                <img style={style} src={img3} alt="img3" />
                <div style={contentDiv} className='d-flex'>
                    <div style={iconStyle}>
                        <svg style={{marginTop: '11px'}} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" class="bi bi-truck" viewBox="0 0 16 16">
                        <path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                    </div>
                    <div className='text-start'>
                        <h5>Home Delivery</h5>
                        <p style={{fontWeight: '300', color: 'gray'}}>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Blanditiis consequuntur aliquid <br /> natus repellendus! Iure natus amet.</p>
                        <div className='d-flex'>
                            <a style={seeMoreStyle} href="#">See more</a>
                            <div>
                                <svg style={{marginTop: '0px'}} xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="lightGreen" class="bi bi-arrow-right-circle-fill" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurDetails;