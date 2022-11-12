//SignIn Page
var btnSignUp = document.querySelector('.btnSignUp');
var signIn = document.querySelector('#signIn');
var LoginBtn = document.querySelector('#LoginBtn');
var signInInput = document.querySelectorAll('#signIn input');
var signInAlerts = document.querySelectorAll('#signIn p');
var currentindx = '';
//SignUp Page
var signUp = document.querySelector('#signUp');
var signUpInput = document.querySelectorAll('#signUp input');
var signUpAlerts = document.querySelectorAll('#signUp p');
var signUpBtn = document.querySelector('#signUpBtn');
var signInLink = document.querySelector('#signInLink');
var allAccounts = [];
if( localStorage.getItem( "allAccounts") != null ){
    allAccounts = JSON.parse(localStorage.getItem( "allAccounts") )
}
//signin&signup Links
btnSignUp.addEventListener('click', function(){
    signIn.classList.add ( 'd-none');
    signUp.classList.remove ('d-none');
    displayAllAlert ()

} )
signInLink.addEventListener('click',function(){
    signUp.classList.add('d-none')
    signIn.classList.remove ( 'd-none');
    displayAllAlert ()
})
// SignUp Functions

signUpBtn.addEventListener('click', function(){
    var emailIsEx = false ;
    if (signUpName.value==""||signUpEmail.value==""||signUpPass.value==""){
        displayAllAlert ()
        signUpAlerts[1].classList.remove('d-none');
        
    }
    else {
        for (var i=0;i<allAccounts.length ; i++){
            if( signUpInput[1].value.trim().toLowerCase() == allAccounts[i].email ){
                emailIsEx = true ;}                 
            }
        if(emailIsEx==true){
            displayAllAlert ()
            signUpAlerts[0].classList.remove('d-none')
            }
        else if (emailIsEx==false){
            if(validtionName()==true && validtionEmail()==true && validtionPass()==true){
                var Account ={
                    name :  signUpInput[0].value.trim() ,
                    email : signUpInput[1].value.trim().toLowerCase() ,
                    pass :  signUpInput[2].value 
                }
            allAccounts.push(Account)  
            clearSignup ()
            localStorage.setItem( "allAccounts" , JSON.stringify(allAccounts) )  
            displayAllAlert ()
            signUpAlerts[2].classList.remove('d-none')
            }
            else {
                displayAllAlert ()
                signUpAlerts[3].classList.remove('d-none')        
                }
        }
    }  
})
function clearSignup (){
    signUpInput[0].value=''
    signUpInput[1].value=''
    signUpInput[2].value=''

}
function validtionName(){
    var regex = /^\w{3,}$/i
    return regex.test(signUpInput[0].value.trim())
    }
function validtionEmail(){
        var regex = /^.+@.+\.com$/i
        return regex.test(signUpInput[1].value.trim())
        }
function validtionPass(){
            var regex = /^.{6,}$/i
            return regex.test(signUpInput[2].value)
            }
// SignIn Functions
LoginBtn.addEventListener('click', function(){
    var emailIsCo = false ;
    for (var i=0;i<allAccounts.length ; i++){
    if( signInInput[0].value.trim().toLowerCase() == allAccounts[i].email && signInInput[1].value == allAccounts[i].pass ){
        emailIsCo = true ;
        currentindx=i;   
        if  (emailIsCo == true){
            location.href= "homepage.html";
            sessionStorage.setItem('loginAcc',JSON.stringify(allAccounts[currentindx]))
        }
       
    }  
    
    }
    if (emailIsCo ==false)  {
        if(signInInput[0].value=='' || signInInput[1].value==''){
            displayAllAlert ()
        signInAlerts[0].classList.remove('d-none')
        } 
        else {
            displayAllAlert ()
             signInAlerts[1].classList.remove('d-none')
        }       
    }
    
    
    clearSignIn ()
  
})
function clearSignIn (){
    signInInput[0].value=''
    signInInput[1].value=''
}

function displayAllAlert (){
    for (let i = 0; i < signInAlerts.length; i++) {
         signInAlerts[i].classList.add('d-none')        
    }
    for (let i = 0; i < signUpAlerts.length; i++) {
        signUpAlerts[i].classList.add('d-none')        
   }
}