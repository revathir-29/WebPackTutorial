//import './ExampleButton.css';
import './ExampleButton.scss';

class ExampleButton {
    render(){
        const button = document.createElement('button');
        button.innerHTML = 'Press Me!';
        button.classList.add('green-button')

        const body = document.querySelector('body');
        body.append(button);
    }
}   

export default ExampleButton;