function callSignIN(){
    var modal1 = document.getElementById('modal-1');
          modal1.style.display = "block";
          
}

function closeButton1(){
    var close1 = document.getElementById('modal-1');
    close1.style.display = "none";
}
function callSignUp(){
    var modal2 = document.getElementById('modal-2');
          modal2.style.display = "block";
          modal2.style.cursor = "pointer";
          
}
function closeButton2(){
    var close2 = document.getElementById('modal-2');
      close2.style.display = "none" ;
}

// validation  for sign in .........................

function validation(){
    var user = document.getElementById('email123').value;
    var pass = document.getElementById('pass123').value;
    if(user==" "){
         
         return false;
    }
    if(pass.length <6 || pass.length > 8 ){
                 document.getElementById('123').innerHTML = " Password length must be greater than 6 and less than 9";
                 return false;
    }
    if(pass.length >=6 && pass.length <=8){
        document.getElementById('123').innerHTML = "OK";
    }

    
    
   }
 // validation for sign up ......................

 function validation2(){
     var name1 = document.getElementById('name1').value;
     var name2 = document.getElementById('name2').value;
     var pass2 = document.getElementById('pass2').value;
     var pass3 = document.getElementById('pass3').value;
    
     if(name1.length<=2 || name1.length>20){
            document.getElementById('username').innerHTML = "Length must not exceed 20 and should be greater than 2 ";
            return false;
     }
     if(name1.length>2 && name1.length<=20){
        document.getElementById('username').innerHTML = " ";
        
 }
 if(name2.length<=2 || name2.length>8){
    document.getElementById('username1').innerHTML = "Length must not exceed 8 and should be greater than 2 ";
    return false;
}
if(name2.length>2 && name2.length<=8){
    document.getElementById('username1').innerHTML = " ";
    
}

if(pass2.length <6 || pass2.length > 8 ){
    document.getElementById('pwd1').innerHTML = " Password length must be greater than 6 and less than 9";
    return false;
}
if(pass2.length >=6 && pass2.length <=8){
document.getElementById('pwd1').innerHTML = " ";
}

if(pass3.length <6 || pass3.length > 8 ){
    document.getElementById('pwd2').innerHTML = " Password length must be greater than 6 and less than 9";
    return false;
}
if(pass3.length >=6 && pass3.length <=8){
document.getElementById('pwd2').innerHTML = " OK";
}



 }