const inquirer = require("inquirer");
const fs = require("fs");


// Importing shapes from shapes.js
const { Circle, Triangle, Square } = require("./lib/shapes");

// Constructor for assigning attributes for texts and shapes
class SvgLogo {constructor() {
    this.textEl = "";
    this.shapeEl = "";
  }
  render() {
    return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeEl}${this.textEl}</svg>`;
  }
  setTextEl(text, color) {
    this.textEl = `<text x="150" y="125" font-size="60" text-anchor="middle" font-family="Arial, Helvetica, sans-serif" fill="${color}">${text}</text>`;
  }
  setShapeEl(shape) {
    this.shapeEl = shape.render();
  }
}

// Array of questions for generating shapes
const questions = [
  {
    name: "text",
    message: "Please select 3 letters for your logo: ",
    type: "input",
  },
  {
    name: "text-color",
    message: "Please select text color for your logo: ",
    type: "input",
  },
   {
    name: "shape",
    message: "Please select shape color for your logo: ",
    type: "input",
  },
   {
    name: "shape-type",
    message: "Please slect a type of shape for your logo: ",
    type: "list",
    choices: ["Circle", "Triangle", "Square" ],
  },
];

// Function for rendering data into a new file 
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("You have successfully generated a new logo.\n");
  });
}

// async function for logo generation based on user's input
async function init() {
  console.log("\nPlease answer the following prompts to generate a new logo.\n");
  var svg = " ";
  var svgFileType = "logo.svg";
  const answers = await inquirer.prompt(questions);

// if function for user's input for text
  var inputText = "";
  if (answers.text.length > 0 && answers.text.length < 4) {
    inputText = answers.text;
  } else {
    console.log("Invalid. Please select letters (Minimum: 1, Maximum: 3).");
    return;
  }

  console.log(`\nUser's text: ${inputText}`);
  inputTextColor = answers["text-color"];
  console.log(`User's font color: ${inputTextColor}`);
  inputShapeColor = answers.shape;
  console.log(`User's shape color: ${inputShapeColor} `);
  inputShapeType = answers["shape-type"];
  console.log(`User's shape type  = ${inputShapeType}\n`);

// generating new shape type based on user's input
  let inputShape;
  if (inputShapeType === "Circle" || inputShapeType === "circle") {
    inputShape = new Circle();
   } else if (inputShapeType === "Triangle" || inputShapeType === "triangle") {
    inputShape = new Triangle();
   } else if (inputShapeType === "Square" || inputShapeType === "square") {
    inputShape = new Square();
   } else {
    console.log("Invalid. Please select either Circle, Triangle, or Square.");
  }
  inputShape.setColor(inputShapeColor);

// Generating a new logo with user's choice of text, text-color, shape-color, and shape-type
  var svg = new SvgLogo();
  svg.setTextEl(inputText, inputTextColor);
  svg.setShapeEl(inputShape);
  svg = svg.render();
  writeToFile(svgFileType, svg);
}

// Function call to initialize app
init();