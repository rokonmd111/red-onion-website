import MainContent from '../MainContent/MainContent';
import classes from './SingleFood.module.css'
import FoodData from '../allFoodData';
import { useNavigate, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { productContex } from '../../App';

const SingleFood = () => {

    const { code } = useParams();
    const product = FoodData.find(item => item.id == code);
    const {name, price, image, id} = product;

    const navigate = useNavigate();
    const [cardItem, setCardItem] = useContext(productContex);
    

    const handleAddBtn = (product) => {
        navigate('/shipment')
        setCardItem([...cardItem ,product])
    }
    
    return (
        <>
           <div className='mt-3'>
            <MainContent></MainContent>
           </div> 
           <div className='container d-flex'>
            <div>
                <h1 className={classes.h1}>{name}</h1>
                <p className={classes.dec}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem, aliquid doloribus maiores atque placeat laborum. Voluptates itaque, adipisci ea nostrum ducimus asperiores facilis tempore consectetur eligendi inventore ut? Magni, ipsum.</p>
                <div className='d-flex'>
                    <div>
                        <h1 className={classes.price}>${price}</h1>
                    </div>
                    <div>
                        <button className={`btn ${classes.increasBtn}`}>- 1 +</button>
                    </div>
                </div>
                <button onClick={() => handleAddBtn(product)} className={`btn ${classes.addBtn}`}>Add</button>
            </div>
            <div>
                <img className={classes.img} src={image} alt="" />
            </div>
           </div>
        </>
    );
};

export default SingleFood;