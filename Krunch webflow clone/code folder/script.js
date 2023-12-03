let fname=  document.getElementById("fname"); 
let lname = document.getElementById("lname");
let email=  document.getElementById("email");
fname.addEventListener('click', function (event) {
    event.target.style.border = "2px solid blue";
});
lname.addEventListener('click', function (event) {
    event.target.style.border = "2px solid blue";
});
email.addEventListener('click', function (event) {
    event.target.style.border = "2px solid blue";
});