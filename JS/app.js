let x = 5;
let y = 10;
document.getElementById("demo").innerHTML = x + y;

function alertTrigger(){
    let x = 10;
    let y = 10;
    z = x + y;
    alert(z);
}

//#region Get highest number
function GetHighestNumber(){
    let x = document.getElementById("number1").value;
    let y = document.getElementById("number2").value;
    document.getElementById("biggestNumber").innerHTML = Math.max(x, y);
    
}
//#endregion

//#region Get a grade
function SubmitGrade(){
    let percentResult = document.getElementById("gradePercent").value;
    let grade = document.getElementById("gradeResult");

    if (percentResult >= 0 && percentResult <= 19) {
        grade.innerHTML = -3;
    }
    else if(percentResult >= 20 && percentResult <= 49) {
        grade.innerHTML = 00;
    }
    else if(percentResult >= 50 && percentResult <= 54) {
        grade.innerHTML = 02;
    }
    else if(percentResult >= 55 && percentResult <= 65) {
        grade.innerHTML = 4;
    }
    else if(percentResult >= 66 && percentResult <= 80) {
        grade.innerHTML = 7;
    }
    else if(percentResult >= 81 && percentResult <= 91) {
        grade.innerHTML = 10;
    }
    else if(percentResult >= 92 && percentResult <= 100) {
        grade.innerHTML = 12;
    }

    

}
//#endregion

//#region Guess a number
var RND = Math.floor(Math.random() * 10) + 1;
var guessAmount = 3;
function GenerateNumber(){
    guessAmount = 3;
    RND = Math.floor(Math.random() * 10) + 1;
}

function GuessedNumber(){
    if (guessAmount > 0) {
        let guess = document.getElementById("guessedNumber").value;
        let response = document.getElementById("response");

        if (guess < RND) {
        response.innerHTML = "Too low"
        }
        else if (guess > RND) {
            response.innerHTML = "Too high"
        }
        else {
            response.innerHTML = "Correct guess, press Generate a new number to try again."
        }

        guessAmount--;
    }
    else{
        response.innerHTML = "No more tries left, press 'Generate new number' to try again."
    }
}
//#endregion