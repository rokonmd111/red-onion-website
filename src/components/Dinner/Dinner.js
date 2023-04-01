import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Nav from '../Nav/Nav';
import Products from '../Products/Products';
import dinnerdata from '../dinnerdata'
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';

const Dinner = () => {
    const [dinner, setDinner] = useState([]);
    useEffect( () => {
        setDinner(dinnerdata)
    }, [])

    const style = {
        background: '#f91944',
        color: 'white',
        width: '260px',
        marginLeft: '443px',
        marginBottom: '80px',
    }
    return (
        <div>
            <Nav></Nav>
            <Header></Header>
            <MainContent></MainContent>
            <div className="container">
                <div className="row d-flex text-center">
                    {dinner.map(product => <Products key={product.id} product={product}></Products>)}
                </div>
                <button className='btn disabled' style={style}>Checkout Your Food</button>
            </div>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Dinner;