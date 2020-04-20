import * as Yup from 'yup'

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const validationForm = Yup.object().shape({
   name: Yup.string()
      .min(2, "* Nome muito curto!")
      .max(50, "* Nome muito longo!")
      .required("* Preenchimento obrigatório!"),
   email: Yup.string()
      .email("* Digite um e-mail válido!")
      .required("* Preenchimento obrigatório!"),
   phone: Yup.string()
      .matches(phoneRegExp, "* Digite um telefone válido!")
      .min(8, "* Digite no mínimo 8 números"),
   message: Yup.string()
      .required("* Preenchimento obrigatório!"),
})

export default validationForm