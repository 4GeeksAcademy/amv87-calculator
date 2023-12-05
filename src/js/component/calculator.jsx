import React from "react";

const Calculator = () => {
	return (
		<div className="container">
            <div className=" justify-content-center">
                <div className="calculator-base mt-5 rounded-3 d-flex">
                    <div className="calculator-screen flex-row d-flex rounded-3 mt-3 mx-1"></div>
                    <div className="keys-row1 d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5 text-white">c</div>
                        <div className="key rounded-3 display-5">+-</div>
                        <div className="key rounded-3 display-5">%</div>
                        <div className="key rounded-3 display-5">/</div>
                    </div>
                    <div className="keys-row2 d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">7</div>
                        <div className="key rounded-3 display-5">8</div>
                        <div className="key rounded-3 display-5">9</div>
                        <div className="key rounded-3 display-5">x</div>
                    </div>
                    <div className="keys-row3 justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">4</div>
                        <div className="key rounded-3 display-5">5</div>
                        <div className="key rounded-3 display-5">6</div>
                        <div className="key rounded-3 display-5">-</div>
                    </div>
                    <div className="keys-row4 d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">1</div>
                        <div className="key rounded-3 display-5">2</div>
                        <div className="key rounded-3 display-5">3</div>
                        <div className="key rounded-3 display-5">+</div>
                    </div>
                    <div className="keys-row5 d-flex justify-content-evenly text-center text-white">
                        <div className="key rounded-3 display-5">0</div>
                        <div className="key rounded-3 display-5">.</div>
                        <div className="key-equal rounded-3 display-5">=</div>
                    </div>

                </div>
            </div>
        </div>
)};

export default Calculator;
