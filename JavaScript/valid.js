function validation(){
    var user = document.getElementById('exampleInputEmail1').value;
    if(user==" "){
         document.getElementById('email123').innerHTML = "Please fill the email field";
         return false;
    } 
    
   }