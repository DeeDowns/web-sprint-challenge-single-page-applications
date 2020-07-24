import React from 'react'


function Customer(props) {
    const {
       customerInfo
    } = props
    console.log(props)

    return (
        <div>
            
            <h2>{customerInfo.name}'s Order</h2>
            <h3>Pizza Size: {customerInfo.pizzaSize}</h3>
            <h3>Toppings: 
                {customerInfo.pepperoni === true ? 'Pepperoni' : ''}   
                {customerInfo.sausage === true ? 'Sausage' : ''}
                {customerInfo.anchovies === true ? 'Anchovies' : ''}
                {customerInfo.extraCheese === true ? 'Extra Cheese' : ''}  
            </h3>
            <h3>Special Instructions: {customerInfo.specialInstructions ?  customerInfo.specialInstructions : 'none' }</h3>
        </div>
    )
}

export default Customer