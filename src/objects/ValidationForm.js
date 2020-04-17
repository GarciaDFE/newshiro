import * as Yup from 'yup'

const validationForm = Yup.object().shape({
   name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Name is Required!'),
   email: Yup.string()
      .email('Enter a Valid Email!')
      .required('Email is Required!'),
   phone: Yup.number()
      .typeError('Enter a Valid Phone!')
      .integer("Coloque apenas números")
      .min(8, 'Mínimo 8 dígitos')
      .required('Phone is Required!'),
   message: Yup.string()
      .required('Message is Required!'),
})

export default validationForm