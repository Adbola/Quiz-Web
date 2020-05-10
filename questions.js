function check() {
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var correct = 0;


    if (question1 == "Pahose") {
        correct++;
    }
    if (question2 == "China") {
        correct++;
    }
    if (question3 == "Odumeje") {
        correct++;
    }
    if (question4 == "Buhari") {
        correct++;
    }
    if (question5 == "Abba Kyari") {
        correct++;
    }

    var pictures = ["img/win.gif", "img/meh.jpeg", "img/lose.gif"];
    var messages = ["Great job!", "That's just okay", "You really need to do better"];
    var score;

    if (correct == 0) {
        score = 0;
    }

    if (correct == 1) {
        score = 1;
    }
    if (correct == 2) {
        score = 2;
    }
    if (correct == 3) {
        score = 3;
    }
    if (correct == 4) {
        score = 4;
    }

    if (correct == 5) {
        score = 5;
    }

    document.getElementById("afterSubmit").style.visibility = "visibile";;

    document.getElementById("message").innerHTML = messages[score];
    document.getElementById("correct").innerHTML = "You got " + correct + " correct.";
    document.getElementById("picture").src = pictures[score];


}