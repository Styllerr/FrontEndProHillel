var userLogin = prompt('Enter your Login:');
var patternLogin = /^[A-Z][A-Za-z0-9_]*\d{2}$/;
console.log(patternLogin.test(userLogin));
var userPassword = prompt('Enter your password:');
var patternPassword = /^[a-zа-яё]{1,5}$/;
console.log(patternPassword.test(userPassword));