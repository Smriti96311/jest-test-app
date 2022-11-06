import { useState } from 'react';
import './style.css';

const CardColorChanger = () => {
    const [classname, setClassName] = useState('white');

    return (
    <div className="container">
        <div className='main'>
            <div data-testid={`${classname}-card`} className={`${classname} cards`}>
                
            </div>
            <div className='btns'>
                <button id="red" data-testid="red" onClick={() => setClassName('red')}>Red</button>

                <button id="blue" data-testid="blue" onClick={() => setClassName('blue')}>Blue</button>

                <button id="yellow" data-testid="yellow" onClick={() => setClassName('yellow')}>Yellow</button>

                <button id="green" data-testid="green" onClick={() => setClassName('green')}>Green</button>

                <button id="reset" onClick={() => setClassName('white')}>RESET</button>
            </div>
        </div>
    </div>
)}

export default CardColorChanger;