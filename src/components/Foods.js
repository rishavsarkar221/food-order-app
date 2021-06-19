import React, { useState } from 'react'
import FoodItem from './FoodItem';
import data from './Data';

const Foods = (props) => {
    const addFood = (name, price, plates) => {
        const checkIfFoodsMatching = props.foodsList.filter(val => val.name === name);

        console.log(name + props.foodsList.indexOf(checkIfFoodsMatching[0]))
        console.log(props.foodsList);

        if(checkIfFoodsMatching.length === 0) {
            props.addFood(name, price, plates);
        }
        else {
            let findIndex = props.foodsList.indexOf(checkIfFoodsMatching[0])
            props.overWriteFood(price, plates, findIndex);
        }
    }

    return (
        <>
            {data.map((val, id) => {
                return <FoodItem key={id} name={val.name} price={val.price} addFood={addFood} />
            })}
        </>
    )
}

export default Foods