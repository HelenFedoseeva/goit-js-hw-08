var throttle = require('lodash.throttle');

const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('input');
const textareaRef = formRef.querySelector('textarea');




formRef.addEventListener('input', throttle(addDataToLocalStorage, 500))
formRef.addEventListener('submit', onSubmitFormHandler)
addDataToForm()

function addDataToLocalStorage(event) {
  
    let clientData = {
        email: `${emailRef.value}`,
        message: `${textareaRef.value}`
    };
   
   
    localStorage.setItem("feedback-form-state", JSON.stringify(clientData))

}

function onSubmitFormHandler(e) {
    e.preventDefault()
   
    const {   elements: { email, message } 
    } = e.target;
    
    const data = {
        email: `${email.value}`,
        message: `${message.value}`
    }


    localStorage.removeItem("feedback-form-state")

    e.target.reset();

   
}


function addDataToForm() {

    const clientDataFromLocalSt = localStorage.getItem("feedback-form-state");
    if (clientDataFromLocalSt) {
    const parsedData = JSON.parse(localStorage.getItem("feedback-form-state"));
    const { email, message } = parsedData;
    emailRef.value = email;
    textareaRef.value = message;
       
      
    }
    
}