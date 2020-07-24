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
  const [formErros, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(initialDisabled)
  console.log(formValues)



  return (
    <div>
      <header>
        <h1>Lambda Eats</h1>
        <nav>
          <Link to='/'>Home</Link>
          {/* <Link to='/form'>Form</Link> */}
        </nav>
      </header>

      <Switch>
        <Route path='/form'>
          <Form />
        </Route>

        <Route path='/'>
          <Home />
        </Route>
      </Switch>
      
      {/* {
        customers.map(customer => {
          return (
            <Customer key={customer.id} info={customer} />
          )
        })
      } */}
    
    </div>
  );
};
export default App;
