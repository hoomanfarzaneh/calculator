import { useState } from 'react';
import './calculator.scss'

const Calculator = () => {
    const [calc,setCalc] = useState("");

    const operator=['+', '-', '*', '/', '.'];


    const updateCalc = (value)=>{
        // Prevent (unauthorized use of one operator || use of two operators immediately on row)
        if (
            (operator.includes(value) && calc === '') || 
            (operator.includes(value) && operator.includes(calc.slice(-1)))
            ){
                return;
            }
        setCalc(calc + value);
    }

    // Add(1-10) button numbers
    const createDigit= ()=>{
        const digits = [];
        for (let i =1 ; i <10; i++){
            digits.push(
                <button 
                 onClick={()=> updateCalc(i.toString())} 
                 key={i}>{i}
                </button>
            )
        }
        return digits;
    }

    // Calculate the result
    const calculate = ()=>{
        setCalc(eval(calc).toString());
    }

    // Delete last item on calculator
    const deleteLast = ()=>{
        const value= calc.slice(0, -1);
        setCalc(value);
    }

    // Clear  
    const clear = ()=>{
        setCalc("");
    }

  return (
    <div className="calculator">
        <div className="calc">
            <div className="display">
                <span>{calc || "0"}</span>
            </div>
            <div className="operators">
                <button onClick={()=> updateCalc('+')}>+</button>
                <button onClick={()=> updateCalc('-')}>-</button>
                <button onClick={()=> updateCalc('*')}>*</button>
                <button onClick={()=> updateCalc('/')}>/</button>
                <button onClick={()=> deleteLast()}>⌫</button>
                <button onClick={()=> clear()}>C</button>
            </div>
            <div className="digits">
            {createDigit()}
            <button onClick={()=> updateCalc('0')}>0</button>
            <button onClick={()=> updateCalc('.')}>.</button>
            <button onClick={()=> calculate()}>=</button>
            </div>
        </div>
    </div>
  )
}

export default Calculator