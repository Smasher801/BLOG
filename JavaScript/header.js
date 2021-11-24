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



function validation(){
    var user = document.getElementById('email123').value;
    var pass = document.getElementById('pass123').value;
    if(user==" "){
         
         return false;
    }
    if(pass.length <6 || pass.length > 8 ){
                 document.getElementById('123').innerHTML = " Password length must be grerater than 6 and less than 9";
                 return false;
    }
    if(pass.length >=6 && pass.length <=8){
        document.getElementById('123').innerHTML = "OK";
    }

    
    
   }
