var inquirer = require("inquirer");

var color = ["Red", "Blue", "Yellow"];
var animals = ["Cat", "Dog", "Bird"];
var weather = ["Rain", "Snow", "Hurricane"];

inquirer
    .prompt([
        {
            type: "confirm",
            message: "Are You Ready to Play Hangman?",
            name: "confirm",
            default: true
        }

    ])
    .then(function(inquirerResponse) {
        if(inquirerResponse.confirm) {
            console.log("Great!");
            inquirer
            .prompt([
                {
                    type: "list",
                    message: "Which Category Do You Want to Play?",
                    choices: ["Colors", "Pets", "Weather"],
                    name: "category"
                },
                {
                    type: "confirm",
                    message: "Are you sure?",
                    name: "confirm",
                    default: true
                  },
            ]).then(function(inquirerResponse) {
                if (inquirerResponse.confirm) {
                    console.log("Fantastic! Let's Play Hangman " + inquirerResponse.category + "!!!");
                    if (inquirerResponse.category === "Colors"){
                        console.log(color[0]);
                        //count the number of characters in the word and display underscores//
                        console.log("Start Guessing Letters!");
                        colors.addEventListener ("keypress", myScript);
                        //then capture key inputs and tracks lives left//
                    } 
                    else {
                        console.log("nothing");
                    }
                }
                else {
                    console.log("If you want to play later, you node where to find me ;)");
                }
            });
            
        }
        else {
            console.log("I guess we will play later!");
        }
    });