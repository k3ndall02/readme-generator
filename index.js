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
    messsage:"Enter the title of the project",
    name: "License",
    type: "insert",
}, {
    messsage:"Enter the title of the project",
    name: "title",
    type: "insert",
}, {
    messsage:"Enter the title of the project",
    name: "title",
    type: "insert",
}, {
    messsage:"Enter the title of the project",
    name: "title",
    type: "insert",
}, {
    messsage:"Enter the title of the project",
    name: "title",
    type: "insert",
}, {
    messsage:"Enter the title of the project",
    name: "title",
    type: "insert",
}, 
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();