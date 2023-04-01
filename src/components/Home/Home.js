import React, { useContext, useEffect, useState } from 'react';
import Header from '../Header/Header';
import MainContent from '../MainContent/MainContent';
import Nav from '../Nav/Nav';
import lunchdata from '../lunchdata';
import Products from '../Products/Products';
import ChooseUs from '../ChooseUs/ChooseUs';
import Footer from '../Footer/Footer';
import { productContex } from '../../App';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect( () => {
        setProducts(lunchdata)
    }, [])

    const [cardItem, setCardItem] = useContext(productContex);
    const [button, setButton] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (cardItem.length > 0) {
            setButton(false)
        }
    }, [cardItem])

    const handleCheckout = () => [
        navigate('/shipment')
    ]

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
                    {products.map(product => <Products key={product.id} product={product}></Products>)}
                </div>
                <button onClick={handleCheckout} className='btn' disabled={button} style={style}>Checkout Your Food</button>
            </div>
            <ChooseUs></ChooseUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;