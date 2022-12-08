// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [{
    messsage:"Enter the title of the project.",
    name: "title",
    type: "input",
}, {
    messsage:"Leave a detailed description explaining the what, why, and how on your project.",
    name: "Description",
    type: "input",
}, {
    messsage:"What steps must be taken to install this project? Provide a step-by-step description.",
    name: "Installation",
    type: "input",
}, {
    messsage:"Provide instructions on how to use app.",
    name: "Usage",
    type: "input",
}, {
    messsage:"List any collaborators, third-party assets, or tutorials that helped you complete this project.",
    name: "Credits",
    type: "input",
}, {
    messsage:"A license will let other developers know what they can and cannot do with your project.",
    name: "License",
    type: "list",
    choices: ["GNU","MIT","ISC","APACHE2.0","None"]
}, {
    messsage:"If you would like other developers to contribute to your application, include instructions on how to do so.",
    name: "How to Contribute",
    type: "input",
}, {
    messsage:"Write tests for your application and provide examples on how to run them.",
    name: "Tests",
    type: "input",
}, {
    message: "Please enter email",
    name: "Email",
    type: "input",
}, {
    message: "Please enter github",
    name: "Github",
    type:"input",
}
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
        if (err) {
            return console.log(err)
        } else {
            console.log("success")
        } 
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers)=>{
        writeToFile("README.md", generateMarkdown({...answers}))
    })
}

// Function call to initialize app
init();