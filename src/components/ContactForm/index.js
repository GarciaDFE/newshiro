import React from "react"
import axios from "axios"
import { Formik, Field, ErrorMessage } from "formik"
import validationForm from "../../objects/ValidationForm"

import { 
   WrapForm,
   InputItem,
   Button } from "./styles";

const ContactForm = () => {

   const handleSubmit = (values, actions) => {
      axios({
         method: 'POST',
         url: "https://formspree.io/xeqkvdvp",
         data: values
      })
         .then(response => {
            actions.setSubmitting(false)
            console.log(values)
            alert("SUCESSO!!")
            actions.resetForm()
         })
         .catch(error => {
            actions.setSubmitting(false)
            console.log("OPS ERRO: ", error)
         })
   }
   
   return (
      <Formik 
         initialValues={{
            name: "",
            company: "",
            email: "",
            phone: "",
            message: "",
         }}
         validationSchema={validationForm}
         onSubmit={handleSubmit}
         render={({
            touched,
            errors,
            isSubmitting,
            handleSubmit,
         }) => (
            <WrapForm 
               id="contact-form"
               onSubmit={handleSubmit}
            >
               <input 
                  type="hidden" 
                  name="_cc" 
                  value="mrgempdig@gmail.com" 
               />
               <input 
                  type="hidden" 
                  name="_subject" 
                  value="Mensagem recebido pelo formulário de contato do site" 
               />
               <InputItem>
                  <Field 
                     id="name" 
                     name="name"
                     type="text" 
                     placeholder="Nome" 
                  />
                  <ErrorMessage 
                     name="name"
                     component="p"
                  />
               </InputItem> 
               <InputItem>
                  <Field
                     id="company" 
                     name="company" 
                     type="text" 
                     placeholder="Empresa" 
                  />
               </InputItem>
               <InputItem>
                  <Field
                     id="email"
                     name="email" 
                     type="email" 
                     placeholder="E-mail"
                  />
                  <ErrorMessage 
                     name="email"
                     component="p"
                  />
               </InputItem>
               <InputItem>
                  <Field
                     id="phone"
                     name="phone"  
                     type="text" 
                     placeholder="Telefone"
                  />
                  <ErrorMessage 
                     name="phone"
                     component="p"
                  />
               </InputItem>
               <InputItem>
                  <Field
                     id="message" 
                     name="message" 
                     rows="3" 
                     placeholder="Deixe sua mensagem."
                     component="textarea"
                  />
                  <ErrorMessage 
                     name="message"
                     component="p"
                  />
               </InputItem>
               <Button type="submit">Enviar</Button>
            </WrapForm>   
         )}
      />
   )
}

export default ContactForm