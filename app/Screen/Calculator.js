import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
import MenuHeader from './MenuHeader';
import { FaBackspace } from "react-icons/fa";


export default function Calculator() {
    const [close, setClose] = useState(false);
    const [displayValue, setDisplayValue] = useState('');
    const [history, setHistory] = useState('');

    const closed = () => {
        setClose(!close);
    };


    const handleButtonClick = (value) => {
        if (value === 'C') {
            setDisplayValue('');
            setHistory('');
        } else if (value === '=') {
            try {
                const result = eval(displayValue); 
                setHistory(displayValue + ' = ' + result);
                setDisplayValue(result.toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        } else if (value === 'backspace') {
            setDisplayValue(displayValue.slice(0, -1));
        } else if (value === '%') {
            try {
                const percentage = parseFloat(displayValue) / 100;
                setDisplayValue(percentage.toString());
                setHistory(`${displayValue}% = ${percentage}`);
            } catch (error) {
                setDisplayValue('Error');
            }
        } else {
            setDisplayValue(displayValue + value);
        }
    };

    const handleKeyPress = (event) => {
        const { key } = event;
        if (key === 'Enter') {
            try {
                const result = eval(displayValue); 
                setHistory(displayValue + ' = ' + result);
                setDisplayValue(result.toString());
            } catch (error) {
                setDisplayValue('Error');
            }
        } else if (key === 'Backspace') {
            setDisplayValue(displayValue.slice(0, -1));
        } else if (key === 'Delete') {
            setDisplayValue('');
            setHistory('');
        } else if (key === '%') {
            try {
                const percentage = parseFloat(displayValue) / 100;
                setDisplayValue(percentage.toString());
                setHistory(`${displayValue}% = ${percentage}`);
            } catch (error) {
                setDisplayValue('Error');
            }
        } else if (!isNaN(parseInt(key, 10)) || key === '.' || key === '+' || key === '-' || key === '*' || key === '/') {
            setDisplayValue(displayValue + key);
        }
    };


    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [displayValue]); 

    if (close) return null;

    return (
        <Draggable>
            <div className='calculator w-1/3 rounded-md rounded-bl-md bg-[#454545b3] animation'>
                <MenuHeader onClick={closed} className="my-4 mx-2" />
                <input
                    type='text'
                    readOnly
                    value={displayValue}
                    className='w-full h-16 bg-transparent border-none mt-4 text-white text-right text-3xl pr-4'
                />
                <div className='w-full'>
                    <div className='flex items-center  flex-wrap text-white'>
                        <button className='w-1/4 key' onClick={() => handleButtonClick("C")}>C</button>
                        <button className='w-1/4  key' onClick={() => handleButtonClick("backspace")}>
                            <FaBackspace />
                        </button>
                        <button className='w-1/4  key' onClick={() => handleButtonClick("%")}>%</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('/')}>/</button>

                        <button className='w-1/4 key' onClick={() => handleButtonClick('7')}>7</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('8')}>8</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('9')}>9</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('*')}>*</button>

                        <button className='w-1/4 key' onClick={() => handleButtonClick('4')}>4</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('5')}>5</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('6')}>6</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('-')}>-</button>

                        <button className='w-1/4 key' onClick={() => handleButtonClick('1')}>1</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('2')}>2</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('3')}>3</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('+')}>+</button>

                        <button className='w-1/4 key rounded-bl-md flex flex-1 ' onClick={() => handleButtonClick('0')}>0</button>
                        <button className='w-1/4 key' onClick={() => handleButtonClick('.')}>.</button>
                        <button className='w-1/4 key rounded-br-md' onClick={() => handleButtonClick('=')}>=</button>

                    </div>
                    {history && (
                        <div className="mt-2 text-center text-sm text-gray-400">
                            {history}
                        </div>
                    )}
                </div>
            </div>
        </Draggable>
    );
}
