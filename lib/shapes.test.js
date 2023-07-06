// importing shapes from shapes.js
const {Circle, Triangle, Square} = require("./shapes")

// Testing for each shapes
describe('Circle', () => {
    test('renders correctly', () => {
      const shape = new Circle();
      var color =('red')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="${color}"/>`);
    });
  });

describe('Triangle', () => {
    test('renders correctly', () => {
      const shape = new Triangle();
      var color =('green')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<polygon height="100%" width="40%" points="0,240 300,240 150,0" fill="${color}"/>`);
    });
  });

describe('Square', () => {
    test('renders correctly', () => {
      const shape = new Square();
      var color =('blue')
      shape.setColor(color);
      expect(shape.render()).toEqual(`<rect x="48" height="200" width="200" fill="${color}"/>`);
    });
  });

