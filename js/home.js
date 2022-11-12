var logPage = document.querySelector('#logPage');
var logOutbtn = document.querySelector('#logOutbtn');
var content = document.querySelector('#content');
loginAcc = JSON.parse(sessionStorage.getItem( "loginAcc") );



(function (){
    logPage.classList.remove("d-none")
    content.innerHTML=` <div class="w-50 bg-dark bg-opacity-75  mx-auto text-center">
    <h1 class="fw-bold p-5 shadow-lg text-white">Welcome ${loginAcc.name}</h1>
</div>` 
})()



logOutbtn.addEventListener('click', function(){
    logOutbtn.setAttribute('href','index.html');
    sessionStorage.removeItem('loginAcc')

} )