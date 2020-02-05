var userLogin = prompt('Enter your Login:');
var patternLogin = /^[A-Z][A-Za-z0-9_]*\d{2}$/g;
/* Проверка
console.log(userLogin, userLogin.match(patternLogin)); */
console.log(patternLogin.test(userLogin));

var userPassword = prompt('Enter your password:');
var patternPassword = /^[a-z]{1,5}$/g;
/* Проверка
console.log(userPassword, userPassword.match(patternPassword)); */
console.log(patternPassword.test(userPassword));