import React, { useState } from 'react'
import data from './Data';

const Cart = (props) => {
    const [plates, setPlates] = useState(props.plates);
    const [price, setPrice] = useState(props.price);
    const [buttonText, setButtonText] = useState("Order");
    const [headerText, setHeaderText] = useState("");

    const addPlate = () => {
        setPlates(plates + 1);
        setPrice(price + data[data.findIndex(value => value.name === props.name)].price);
    }

    const removePlate = () => {
        if(plates > 0) {
            if(plates >= 2) {
                setPlates(plates - 1);
                setPrice(price - data[data.findIndex(value => value.name === props.name)].price);
            } 
            else {
                setPlates(1)
            }
        }
    }

    const removeCartHandler = () => {
        props.removeCart(props.id);
    }

    const orderFood = () => {
        props.orderFood();
        setButtonText("Order Again");
        setHeaderText("**(Ordered)")
    }

    return (
        <>
            <div>
                <div className="card" style={{width: '18rem'}}>
                    <div className="card-body">
                        <h5 className="card-title">{props.name}    <span style={{color: 'orange'}}>{headerText}</span></h5>
                        <span style={{marginleft: '5%'}}></span>
                        <br/>
                        <p>Price: <strong>${price}</strong></p>
                        <br/>
                        Plates: <span style={{marginLeft: '1.5%'}}></span>
                        <button className="btn btn-outline-dark" onClick={addPlate}>+</button>
                        <span style={{marginLeft: '1.5%', marginRight: '1.5%'}}>{plates}</span>
                        <button className="btn btn-outline-dark" onClick={removePlate}>-</button>
                        <br/><br/>
                        <button className="btn btn-danger" onClick={removeCartHandler}>Remove from Cart</button>
                        <br/><br/>
                        <button className="btn btn-primary" onClick={orderFood}>{buttonText}</button>
                    </div>
                </div>
            </div>

            <br/>
        </>
    )
}

export default Cart