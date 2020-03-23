var staticPass = '98room';
class LogIn {
    static check(pass) {
        if (pass === staticPass) {
            Show.showCorrect();
        } else {
            Show.showIncorrect();
        }
    }
}

class Show {
    static showCorrect() {
        console.log("Password is correct")
    }
    static showIncorrect() {
        console.log("Password is incorrect")
    }
}
let pass = prompt("Enter password");
LogIn.check(pass);
