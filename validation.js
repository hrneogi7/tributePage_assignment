function register_attendes(){  
    var name=document.getElementById("n1").value;  
    var email=document.getElementById("e1").value;  
    var phone_number=document.getElementById("p1").value;  
    

    var letters = /^[A-Za-z' ']+$/;  
    var email_val = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;  
    var phone_number_val = /^[0-9]+$/;

    if(name==''||email==''||phone_number==''){  
    alert("You need to enter name, phone and email compulsorily");  
    }  
    else if(!letters.test(name))  
            {  
                alert('Name is incorrect must contain alphabets only');  
            }  
    else if (!email_val.test(email))  
            {  
                alert('Invalid email format please enter valid email id');  
            }  
    else if(!phone_number_val.test(phone_number) || phone_number.length!=10)  
            {  
                alert("Invalid phone number");  
            }  
    else{  
            alert("You have been registered....Redirecting to home page");  
            window.location="tribute.html";  
        }  
    }  