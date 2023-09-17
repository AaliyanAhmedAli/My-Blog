import{auth,createUserWithEmailAndPassword} from './firebase.mjs'



let signBtn = document.getElementById('sign')


const signup = ()=>{
let firstName = document.getElementById('fName').value
let lastName = document.getElementById('lName').value
let Email = document.getElementById('email').value
let PhonNumber = document.getElementById('phone').value
let Password = document.getElementById('password').value
let ConformePassword = document.getElementById('Cpassword').value
let Spiner = document.getElementById('Spiner')
Spiner.style.display='flex',

    console.log("hello", {firstName,lastName,Email,PhonNumber,Password,ConformePassword});
}
signBtn.addEventListener('click', signup    )