import React from 'react';
import bg from '../../images/bannerbackground_copy.png';
import './Header.css';

const Header = () => {
    return (
        <div className='d-flex justify-content-center bg'>
            <div className='top-heaing'>
                <h1>Best food waiting for you belly</h1>
                <div class="input-group">
                    <input type="search" class="form-control" placeholder="Search food items"/>
                    <span class="input-group-addon">
                        <input type="submit" value="Search" class="btn search-btn"/> 
                    </span>
                </div>
            </div>
            <div className='bg-img'>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default Header;