let submitButton = document.querySelector(".answer__submit");
let answerInputBox = document.querySelector(".answer__input");
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
let randomNumber = Math.floor(Math.random() * questions.length) + 0;
let answer = questions[randomNumber].a;


for (let i = 0; i < questions.length; i++) {
    randomQuestion();
    submitButton.addEventListener("click", function () {
        if (answer == answerInputBox.value) {
            console.log("correct!!");
        } else {
            console.log("Wrong!");
        }
        answerInputBox.value = "";
    });
}

function randomQuestion() {
    document.querySelector(".quiz__question").innerHTML = questions[randomNumber].q;
}

