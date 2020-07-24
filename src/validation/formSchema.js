import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(2, 'Name must be at least 2 characters long')
        .required('Name is required'),
        pizzaSize: yup
        .string(),
        pepperoni: yup
        .boolean(),
        sausage: yup
        .boolean(),
        anchovies: yup
        .boolean(),
        extraCheese: yup
        .boolean(),
        specialInstructions: yup
        .string(),
        
})

export default formSchema