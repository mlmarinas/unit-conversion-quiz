let answer = document.querySelector(".answer__input");
let submit = document.querySelector(".answer__submit");

//Enables you change the range of the random number that will be used to select a question
let getTestSelector = function(startingNumber, maximumNumber) {
    let randomNumber = Math.floor((Math.random() * maximumNumber) + startingNumber);
    return randomNumber;
}
//Range of the random number is between 0-10;
getTestSelector(0, 10);

//List of questions
let questions = [
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
    {
        q: "1 centimeter (cm) equals how many millimeters (mm) ?",
        a: 1
    },
]

submit.addEventListener("click", function() {
    if (answer.value == 10) {
        alert("Correct!");
    } else {
        alert("Wrong!")
    }
})
