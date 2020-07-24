import React, { useState, useEffect } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import axios from 'axios'
import * as yup from 'yup'
import formSchema from './validation/formSchema'
import Home from './components/Home'
import Customer from './components/Customer'
import Form from './components/Form'

const initialFormValues = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  anchovies: false,
  extraCheese: false,
  specialInstructions: ''
}

const initialFormErrors = {
  name: '',
  pizzaSize: '',
  pepperoni: false,
  sausage: false,
  anchovies: false,
  extraCheese: false,
  specialInstructions: ''
}

const initialCustomers = []
const initialDisabled = true

function App() {
  const [customers, setCustomers] = useState(initialCustomers)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  console.log(formValues)

  const postNewCustomerOrder = newCustomer => {
    axios.post('https://reqres.in/api/users', newCustomer)
      .then( res => {
        console.log(res.data)
        setCustomers([ res.data, ...customers ])
        setFormValues(initialFormValues)
      })
      .catch(err => {
        console.log(err)
      })
  }

  const formChanges = e => {
    e.persist();
    e.target.type === 'checkbox' ? setFormValues({ ...formValues, [e.target.name]: e.target.checked }) : 
      setFormValues({ ...formValues, [e.target.name]: e.target.value }) 
    validateForm(e)
  }

  const validateForm = e => {
    yup
    .reach(formSchema, e.target.name)
    .validate(
      e.target.type === 'checkbox' ? e.target.checked : e.target.value
    )
    .then((valid) => {
      setFormErrors({ ...formErrors, [e.target.name]: '' })
    })
    .catch((err) => {
      setFormErrors({ ...formErrors, [e.target.name]: err.errors })
    })
  }

  const submit = () => {
    const newCustomer = {
      name: formValues.name.trim(),
      pizzaSize: formValues.pizzaSize.trim(),
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      anchovies: formValues.anchovies,
      extraCheese: formValues.extraCheese,
      specialInstructions: formValues.specialInstructions.trim(),
    }
    postNewCustomerOrder(newCustomer)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => {
        setDisabled(!valid)
      })
  }, [formValues])

  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/form'>Form</Link>
        </nav>
      </header>

      <Switch>
        <Route path='/form'>
          <Form 
            formValues={formValues}
            formChanges={formChanges}
            formErrors={formErrors}
            submit={submit}
            disabled={disabled}
          />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
      {
        customers.map(customer => {
          return (
            <Customer key={customer.id} info={customer} />
          )
        })
      }
    
    </div>
  );
};
export default App;
