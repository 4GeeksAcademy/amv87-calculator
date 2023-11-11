import React from "react";

const Calculator = () => {
	return (
		<div className="container">
            <div className="row d-flex justify-content-center">
                <div className="calculator-base mt-5 rounded-3 d-flex justify-content-center">
                    <div className="calculator-screen rounded-3 mt-3 mx-1"></div>
                    <div className="keys-row1 d-flex justify-content-evenly">
                        <div className="key"></div>
                        <div className="key"></div>
                        <div className="key"></div>
                        <div className="key"></div>
                    </div>
                    <div className="keys-row2"></div>
                    <div className="keys-row3"></div>
                    <div className="keys-row4"></div>
                    <div className="keys-row5"></div>

                </div>
            </div>
        </div>
)};

export default Calculator;
