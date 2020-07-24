import React from 'react'


function Form(props) {
    const {
        formValues,
        formChanges,
        formErrors,
        disabled,
        submit
    } = props

    return (
        <Form>
            <h2>FormTest</h2>
            <div className='form-group name'>
                <label>Name
                    <input
                        type="text"
                    />
                </label>
            </div>

            <div className='form-group dropdown'>
                <label>Pizza Size
                    <select
                        type="text"
                    >
                        <option>--Select an option--</option>
                        <option>Small</option>
                        <option>Medium</option>
                        <option>Large</option>
                    </select>
                </label>
            </div>

            <div className='form-group checkboxes'>
                <h3>Toppings?</h3>
                <label>Pepperoni
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Sausage
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Anchovies
                    <input
                        type="checkbox"
                    />
                </label>
                <label>Extra Cheese
                    <input
                        type="checkbox"
                    />
                </label>
            </div>

            <div className='form-group special-instructions'>
                <label>Special Instructions
                    <input
                        type="text"
                    />
                </label>
            </div>
        </Form>
    )
}

export default Form