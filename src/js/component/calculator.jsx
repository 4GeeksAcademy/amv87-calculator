import React, { useState } from "react";

const Calculator = () => {
    const [calc, setCalc] = useState({
        sign: '',
        num: 0,
        res: 0
    })
    const [calc2, setCalc2] = useState()

    function handleClick(value) {
        console.log(value)
        setCalc(value)
    }

	return (
		<div className="container">
                <div className="calculator-base mt-5 rounded-3">
                    <div className="row"></div>
                    <div className="m-0 my-2 row d-flex ustify-content-center rounded-3 mt-3 mx-1 text-end text-white">
                        <div className="calculator-screen rounded-3 display-2">{calc.num ? calc.num : calc.res}</div>
                    </div>
                    <div className="keys-row1 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <button onClick={()=>handleClick('c')} value="C" className="key rounded-3 display-5">C</button>
                        <button onClick={handleClick} value="+-" className="key rounded-3 display-5">+-</button>
                        <button onClick={handleClick} value="%" className="key rounded-3 display-5">%</button>
                        <button onClick={handleClick} value="/" className="key rounded-3 display-5">/</button>
                    </div>
                    <div className="keys-row2 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <button onClick={()=>handleClick(7)} value="7" className="key rounded-3 display-5">7</button>
                        <button onClick={()=>handleClick(8)} value="8" className="key rounded-3 display-5">8</button>
                        <button onClick={handleClick} value="9" className="key rounded-3 display-5">9</button>
                        <button onClick={handleClick} value="x" className="key rounded-3 display-5">x</button>
                    </div>
                    <div className="keys-row3 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <button onClick={handleClick} value="4" className="key rounded-3 display-5">4</button>
                        <button onClick={handleClick} value="5" className="key rounded-3 display-5">5</button>
                        <button onClick={handleClick} value="6" className="key rounded-3 display-5">6</button>
                        <button onClick={handleClick} value="-" className="key rounded-3 display-5">-</button>
                    </div>
                    <div className="keys-row4 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <button onClick={handleClick} value="1" className="key rounded-3 display-5">1</button>
                        <button onClick={handleClick} value="2" className="key rounded-3 display-5">2</button>
                        <button onClick={handleClick} value="3" className="key rounded-3 display-5">3</button>
                        <button onClick={handleClick} value="+" className="key rounded-3 display-5">+</button>
                    </div>
                    <div className="keys-row5 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <button onClick={handleClick} value="0" className="key rounded-3 display-5">0</button>
                        <button onClick={handleClick} value="." className="key rounded-3 display-5">.</button>
                        <button onClick={handleClick} value="=" className="key-equal rounded-3 display-5">=</button>
                    </div>

                </div>
        </div>
)};

export default Calculator;
