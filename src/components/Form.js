import React from 'react'


function Form(props) {
    const {
        formValues,
        formChanges,
        formErrors,
        disabled,
        submit
    } = props
    console.log(formValues)

    const onSubmit = e => {
        e.preventDefault()
        submit()
    }

    return (
        <form onSubmit={onSubmit}>
            <h2>Order Your Pizza</h2>
            <div className='form-group name'>
                <label>Name
                    <input
                        type="text"
                        name='name'
                        value={formValues.name}
                        onChange={formChanges}
                        placeholder='Enter Your Name'
                    />
                </label>
            </div>

            <div className='form-group dropdown'>
                <label>Pizza Size
                    <select
                        name='pizzaSize'
                        value={formValues.pizzaSize}
                        onChange={formChanges}
                    >
                        <option value=''>--Select an option--</option>
                        <option  value='small'>Small</option>
                        <option  value='medium'>Medium</option>
                        <option  value='large'>Large</option>
                    </select>
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h3>Any Toppings?</h3>
                <label>Pepperoni
                    <input
                        type="checkbox"
                        name='pepperoni'
                        // value={formValues.pepperoni}
                        onChange={formChanges}
                        checked={formValues.pepperoni}
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                        name='sausage'
                        // value={formValues.sausage}
                        onChange={formChanges}
                        checked={formValues.sausage}
                    />
                </label>
                <label>Anchovies
                    <input
                        type="checkbox"
                        name='anchovies'
                        // value={formValues.anchovies}
                        onChange={formChanges}
                        checked={formValues.anchovies}
                    />
                </label>
                <label>Extra Cheese
                    <input
                        type="checkbox"
                        name='extraCheese'
                        // value={formValues.extraCheese}
                        onChange={formChanges}
                        checked={formValues.extraCheese}
                    />
                </label>
            </div>

            <div className='form-group special-instructions'>
                <label>Any Special Instructions?
                    <input
                        type="text"
                        name='specialInstructions'
                        value={formValues.specialInstructions}
                        onChange={formChanges}
                        placeholder='Enter Special Instructions'
                    />
                </label>
            </div>
            <div className='button-container'>
                <button disabled={disabled}>Order</button>
            </div>
            <div className='form-errors'>
                 <div>{formErrors.name}</div>
                 <div>{formErrors.pizzaSize}</div>
            </div> 
        </form>
    )
}

export default Form