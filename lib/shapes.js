// Shape constructor to assign attributes: colors, size, and position
class Shape{
    constructor(){this.color=''}
        setColor(color){this.color=(color);
        }
    }
    
    class Circle extends Shape{
        render(){
            return `<circle cx="150" cy="100" r="80" height="100%" width="100%" fill="${this.color}"/>`
        }
    }
  
    class Triangle extends Shape{
        render(){
            return `<polygon height="100%" width="40%" points="0,240 300,240 150,0" fill="${this.color}"/>`
        }
    };
   
    class Square extends Shape{
        render(){
            return `<rect x="48" height="200" width="200" fill="${this.color}"/>`
        }
    }

// exporting shape modules
    module.exports = {Circle, Triangle, Square}