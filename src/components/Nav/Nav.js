import React, { useContext } from 'react';
import img from '../../images/logo2.png'
import './Nav.css'
import { productContex } from '../../App';

const Nav = () => {
    const [cardItem, setCardItem] = useContext(productContex)
    return (
        <div className='d-flex justify-content-between navSection'>
            <div className='logo'>
                <img src={img} alt="" />
            </div>
            <div className='d-flex'>
                <p><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#00000" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                </svg><b>{cardItem.length}</b></p>
                <a className='login' href="#">Login</a>
                <a className='signup' href="#">Sign up</a>
            </div>
        </div>
    );
};

export default Nav;