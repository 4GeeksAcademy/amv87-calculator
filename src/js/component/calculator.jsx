import React from "react";

const Calculator = () => {
	return (
		<div className="container">
                <div className="calculator-base mt-5 rounded-3">
                    <div className="calculator-screen row d-flex justify-content-center rounded-3 mt-3 mx-1"></div>
                    <div className="keys-row1 row d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5 text-white">c</div>
                        <div className="key rounded-3 display-5">+-</div>
                        <div className="key rounded-3 display-5">%</div>
                        <div className="key rounded-3 display-5">/</div>
                    </div>
                    <div className="keys-row2 row d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">7</div>
                        <div className="key rounded-3 display-5">8</div>
                        <div className="key rounded-3 display-5">9</div>
                        <div className="key rounded-3 display-5">x</div>
                    </div>
                    <div className="keys-row3 row d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">4</div>
                        <div className="key rounded-3 display-5">5</div>
                        <div className="key rounded-3 display-5">6</div>
                        <div className="key rounded-3 display-5">-</div>
                    </div>
                    <div className="keys-row4 row d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">1</div>
                        <div className="key rounded-3 display-5">2</div>
                        <div className="key rounded-3 display-5">3</div>
                        <div className="key rounded-3 display-5">+</div>
                    </div>
                    <div className="keys-row5 row d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">0</div>
                        <div className="key rounded-3 display-5">.</div>
                        <div className="key-equal rounded-3 display-5">=</div>
                    </div>

                </div>
        </div>
)};

export default Calculator;
