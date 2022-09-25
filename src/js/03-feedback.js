var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('input');
const textareaRef = formRef.querySelector('textarea');
const btnRef = formRef.querySelector('button')



formRef.addEventListener('input', throttle(addDataToLocalStorage, 500))
formRef.addEventListener('submit', onSubmitFormHandler)
window.addEventListener('DOMContentLoaded', addDataToForm)

function addDataToLocalStorage(event) {
  
    let clientData = {
        email: `${emailRef.value}`,
        message: `${textareaRef.value}`
    };
   
   
    localStorage.setItem("feedback-form-state", JSON.stringify(clientData))
// console.log(JSON.parse(localStorage.getItem("feedback-form-state")))
}

function onSubmitFormHandler(e) {
    e.preventDefault()
   
    const {   elements: { email, message } 
    } = e.target;
    
    const data = {
        email: `${email.value}`,
        message: `${message.value}`
    }

     console.log(data)

    localStorage.clear()

    e.target.reset();

   
}


function addDataToForm() {
    if (localStorage.getItem("feedback-form-state") === null) {
   
         emailRef.value = '';
    textareaRef.value = '';
      
    }
     const parsedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    const { email, message } = parsedData;
    emailRef.value = email;
    textareaRef.value = message;

    window.removeEventListener('DOMContentLoaded', addDataToForm)
}