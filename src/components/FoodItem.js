import React, { useState } from 'react'

const FoodItem = (props) => {
    const [plates, setPlates] = useState(1);

    const addFoodHandler = () => {
        props.addFood(props.name, props.price * plates, plates);
    }

    const addPlate = () => {
        setPlates(plates + 1);
    }

    const removePlate = () => {
        if(plates > 0) {
            if(plates >= 2) {
                setPlates(plates - 1);
            } else {
                setPlates(1)
            }
        }
    }

    return (
        <>
            <div className="card" style={{width: '18rem'}}>
                <div className="card-body">
                    <h5 className="card-title">{props.name}</h5>
                    <span style={{marginleft: '5%'}}></span>
                    <br/>
                    <p>Price: <strong>${props.price * plates}</strong></p>
                    Plates: <span style={{marginLeft: '1.5%'}}></span>
                    <button className="btn btn-outline-dark" onClick={addPlate}>+</button>
                    <span style={{marginLeft: '1.5%', marginRight: '1.5%'}}>{plates}</span>
                    <button className="btn btn-outline-dark" onClick={removePlate}>-</button>
                    <br/><br/>
                    <button className="btn btn-success" onClick={addFoodHandler}>Add Food to Cart</button>
                </div>
            </div>
        </>
    )
}

export default FoodItem