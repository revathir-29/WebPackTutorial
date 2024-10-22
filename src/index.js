import display from "./hello";
import addImage  from "./nature";
import ExampleButton from "./components/ExampleButton";
import Heading from "./components/Heading";

display();
addImage();

const exampleButton = new ExampleButton();
exampleButton.render();

const heading = new Heading();
heading.render();


//ES6 syntax
const multiply = (a,b) => {
    let c= a*b;
    console.log(`Multiplication of ${a} and ${b} is ${c}`);
}
multiply(3,2);
const ten =10;
