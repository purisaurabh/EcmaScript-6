

const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const phone = document.getElementById('phone');
const password = document.getElementById('password');
const cpassword = document.getElementById('cpassword');


// About preventDefault : when a form is submitted, the browser reloads the page by default.
form.addEventListener('submit' , (event) =>{
    event.preventDefault();
    validate();
}); 


const sendData = (sRate , count) =>{
    if(sRate == count)
    {
        alert("Registration Successful");
        swal({
            title: "Thank You",
            text: "Your Submission is done",
            icon: "success",
            button: "OK",
          });
    }
}

// for final data validation
const successMsg = () =>{
    let formCon = document.getElementsByClassName("form-control");
    var count = formCon.length - 1;
    for(var i = 0 ; i < formCon.length ; i++)
    {
        if(formCon[i].className === 'form-control success')
        {
            var sRate = 0 + i;
            console.log(sRate);
            sendData(sRate, count);
        }

        else
        {
            return false;
        }
    }
}

const isEmail = (emailVal) =>{
    var atSymbol = emailVal.indexOf("@");
    if(atSymbol < 1)
    {
        return false;
    }

    var dot = emailVal.lastIndexOf('.');
    if(dot <= atSymbol + 2)
        return false;

    if(dot == emailVal.length - 1)
    {
        return false;
    }

    return true;
}


// define the validate function
const validate = () =>{
    const usernameVal = username.value.trim();
    const emailVal = email.value.trim();
    const phoneVal = phone.value.trim();
    const passwordVal = password.value.trim();
    const cpasswordVal = cpassword.value.trim();


    // validate your username
    if(username === "")
    {
        setErrorMsg(username , 'Username cannot be blank');
    }
    else if(usernameVal.length <= 2)
    {
        setErrorMsg(username , 'username min 3 character');
    }
    else
    {   
        setSuccessMsg(username);
    }

    //validate your email
    if(emailVal === "")
    {
        setErrorMsg(email , 'Email cannot be blank');
    }
    else if(!isEmail(emailVal))
    {
        setErrorMsg(email , 'Email is not valid');
    }
    else
    {   
        setSuccessMsg(email);
    }
     

    // validate phone
    if(phoneVal === "")
    {
        setErrorMsg(phone , "Phone can't be blank")
    }

    else if(phoneVal.length != 10)
    {
        setErrorMsg(phone , 'Not a valid phone number');
    }
    
    else
    {
        setSuccessMsg(phone);
    }

    // validate password 
    if(passwordVal === "")
    {
        setErrorMsg(password , "Password can't be blank")
    }

    else if(passwordVal.length <= 5)
    {
        setErrorMsg(password , 'Minimum 6 character');
    }
    
    else
    {
        setSuccessMsg(password);
    }


    //validate cpassword
    if(cpasswordVal === "")
    {
        setErrorMsg(cpassword , "Password can't be blank")
    }

    else if(passwordVal != cpasswordVal)
    {
        setErrorMsg(password , 'Password is not matching');
    }
    
    else
    {
        setSuccessMsg(cpassword);
    }

    successMsg();
}



function setErrorMsg(input , errorMsg)
{
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = "form-control error";
    small.innerText = errorMsg;
}

function setSuccessMsg(input)
{
    const formControl = input.parentElement;
    formControl.className = "form-control success"; 
}