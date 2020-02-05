var userLogin = prompt('Enter your Login:');
var patternLogin = /^[A-Z][A-Za-z0-9_]*\d{2}$/g;
console.log(patternLogin.test(userLogin));
var userPassword = prompt('Enter your password:');
var patternPassword = /^[a-z]{1,5}$|^[а-яё]{1,5}$/g;
console.log(patternPassword.test(userPassword));