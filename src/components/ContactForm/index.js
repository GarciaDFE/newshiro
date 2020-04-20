import React from "react"
import axios from "axios"
import { Formik } from "formik"
import validationForm from "../../objects/ValidationForm"

import { 
   WrapForm,
   InputItem,
   FieldItem,
   MsgError,
   TextAreaItem,
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
                  <FieldItem 
                     id="name" 
                     name="name"
                     type="text" 
                     placeholder="Nome" 
                  />
                  <MsgError 
                     name="name"
                     component="p"
                  />
               </InputItem> 
               <InputItem>
                  <FieldItem
                     id="company" 
                     name="company" 
                     type="text" 
                     placeholder="Empresa" 
                  />
               </InputItem>
               <InputItem>
                  <FieldItem
                     id="email"
                     name="email" 
                     type="email" 
                     placeholder="E-mail"
                  />
                  <MsgError 
                     name="email"
                     component="p"
                  />
               </InputItem>
               <InputItem>
                  <FieldItem
                     id="phone"
                     name="phone"  
                     type="text" 
                     placeholder="Telefone"
                  />
                  <MsgError 
                     name="phone"
                     component="p"
                  />
               </InputItem>
               <TextAreaItem>
                  <FieldItem
                     id="message" 
                     name="message" 
                     rows="3" 
                     placeholder="Deixe sua mensagem."
                     component="textarea"
                  />
                  <MsgError 
                     name="message"
                     component="p"
                  />
               </TextAreaItem>
               <Button type="submit">Enviar</Button>
            </WrapForm>   
         )}
      />
   )
}

export default ContactForm