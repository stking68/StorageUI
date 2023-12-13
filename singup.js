const singinBtn = document.querySelector('#signBtn');
const exitBtn = document.querySelector('#exitBtn');
const mainForm = document.querySelector("#mainForm");
const nationalCode = document.querySelector('#natCode');
const lastName = document.querySelector('#lastName');
const firstName = document.querySelector('#name');

singinBtn.addEventListener('click' , ()=>{
    
    if (nationalCode.value == '' && lastName.value == '' && firstName.value == '') {
        alert("Coming Soon!");
    } else {
        alert(nationalCode.value + " " + lastName.value + " " + firstName.value);        
    }

})