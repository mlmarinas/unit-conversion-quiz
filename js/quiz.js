let answer = document.querySelector(".answer__input");
let submit = document.querySelector(".answer__submit");

//List of questions
let questions = [
    {
        q: "50 centimeter (cm) equals how many millimeters (mm) ?",
        a: 100
    },
    {
        q: "5 kilogram (kg) equals how many grams (g) ?",
        a: 5000
    },
    {
        q: "10 milligram (mg) equals how many micrograms (mmcg) ?",
        a: 10000
    },
    {
        q: "2 kilograms (kg) equals how many pounds (lbs) ?",
        a: 4.4
    },
    {
        q: "5 litres (l) equals how many millilitres (ml) ?",
        a: 5000
    },
    {
        q: "25 inch (in) equals how many centimeters (cm) ?",
        a: 63.5
    },
    {
        q: "15 feet (ft) equals how many inches (in) ?",
        a: 180
    },
    {
        q: "50 yards (yd) equals how many feet (ft) ?",
        a: 150
    },
    {
        q: "5 ounces (oz) equals how many millilitres (ml) ?",
        a: 150
    },
    {
        q: "5 tablespoon (tbsp) equals how many teaspoons (tsp) ?",
        a: 15
    },
];

// -----------------------------------------------------------------------------
//Enables you change the range of the random number that will be used to select a question
let getTestSelector = function (startingNumber, maximumNumber) {
    let randomNumber = Math.floor((Math.random() * maximumNumber) + startingNumber);
    return randomNumber;
}
//Range of the random number is between 0 and the length of the array, "questions";
let randomQuestion = getTestSelector(0, questions.length);
console.log(questions[randomQuestion].q);
// -----------------------------------------------------------------------------

submit.addEventListener("click", function () {
    if (answer.value == 10) {
        alert("Correct!");
    } else {
        alert("Wrong!")
    }
})
