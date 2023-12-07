import React from "react";

const Calculator = () => {
	return (
		<div className="container">
                <div className="calculator-base mt-5 rounded-3">
                    <div className="row"></div>
                    <div className="m-0 my-2 row d-flex ustify-content-center rounded-3 mt-3 mx-1 text-end text-white">
                        <div className="calculator-screen rounded-3 display-2">9876</div>
                    </div>
                    <div className="keys-row1 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <button type="button" value="C" className="key rounded-3 display-5">C</button>
                        <button className="key rounded-3 display-5">+-</button>
                        <div className="key rounded-3 display-5">%</div>
                        <div className="key rounded-3 display-5">/</div>
                    </div>
                    <div className="keys-row2 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <input type="button" value="7" className="key rounded-3 display-5" />
                        <div className="key rounded-3 display-5">8</div>
                        <div className="key rounded-3 display-5">9</div>
                        <div className="key rounded-3 display-5">x</div>
                    </div>
                    <div className="keys-row3 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <div className="key rounded-3 display-5">4</div>
                        <div className="key rounded-3 display-5">5</div>
                        <div className="key rounded-3 display-5">6</div>
                        <div className="key rounded-3 display-5">-</div>
                    </div>
                    <div className="keys-row4 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <div className="key rounded-3 display-5">1</div>
                        <div className="key rounded-3 display-5">2</div>
                        <div className="key rounded-3 display-5">3</div>
                        <div className="key rounded-3 display-5">+</div>
                    </div>
                    <div className="keys-row5 mx-0 my-3 row d-flex justify-content-evenly text-center">
                        <div className="key rounded-3 display-5">0</div>
                        <div className="key rounded-3 display-5">.</div>
                        <div className="key-equal rounded-3 display-5">=</div>
                    </div>

                </div>
        </div>
)};

export default Calculator;
