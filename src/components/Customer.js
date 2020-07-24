import React from 'react'


function Customer(props) {
    const {
       customerInfo
    } = props
    console.log(props)

    return (
        <div>
            <h1>Your Oder:</h1>
            <h3>{customerInfo.name}</h3>
            <p>{customerInfo.pizzaSize}</p>
            <p>{customerInfo.pepperoni === true ? 'Pepperoni' : null}</p>
            <p>{customerInfo.sausage === true ? 'Sausage' : null}</p>
            <p>{customerInfo.anchovies === true ? 'Anchovies' : null}</p>
            <p>{customerInfo.extraCheese === true ? 'Extra Cheese' : null}</p>
            <p>{customerInfo.specialInstructions}</p>
        </div>
    )
}

export default Customer