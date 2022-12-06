// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util") 

// TODO: Create an array of questions for user input
const questions = [{
    messsage:"Enter the title of the project.",
    name: "Title",
    type: "insert",
}, {
    messsage:"Leave a detailed description explaining the what, why, and how on your project.",
    name: "Description",
    type: "insert",
}, {
    messsage:"Add to make more user friendly.",
    name: "Table of Contents",
    type: "insert",
}, {
    messsage:"What steps must be taken to install this project? Provide a step-by-step description.",
    name: "Installation",
    type: "insert",
}, {
    messsage:"Provide instructions on how to use app.",
    name: "Usage",
    type: "insert",
}, {
    messsage:"List any collaborators, third-party assets, or tutorials that helped you complete this project.",
    name: "Credits",
    type: "insert",
}, {
    messsage:"A license will let other developers know what they can and cannot do with your project.",
    name: "License",
    type: "insert",
}, {
    messsage:"Are not neccessary but provides proof that you know what you are doing as a developer.",
    name: "Badges",
    type: "insert",
}, {
    messsage:"List features here.",
    name: "Features",
    type: "insert",
}, {
    messsage:"If you would like other developers to contribute to your application, include instructions on how to do so.",
    name: "How to Contribute",
    type: "insert",
}, {
    messsage:"Write tests for your application and provide examples on how to run them.",
    name: "Tests",
    type: "insert",
}];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();