import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import allFoodData from '../allFoodData';
import './Products.css'


const Products = (props) => {
    const {name, price, image, id} = props.product;
    const [food, setFood] = useState([])

    const handleProduct = (id) => {
        const foodCode = allFoodData.find(pd => pd.id === id);
        setFood(foodCode)
    }
    return (
        <>
        <div onClick={() => handleProduct(id)} className="col-md-4">
            <div className='item-div'>
                <div class="card" style={{width: '18rem'}}>
                <Link className='pd-heading' to={'/food/' + id}>
                    <img src={image} class="card-img-top" alt="..."/>
                    <div class="card-body">
                        <h6>{name}</h6>
                        <p class="card-text">How we Dream about our future</p>
                        <h4>$ {price}</h4>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Products;