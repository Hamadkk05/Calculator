import React, { useContext } from "react";
import { CalcContext } from "../context/CalcContext";
const getStyleName = (btn) => {
  const className = {
    "=": "equals",
    x: "opt",
    "-": "opt",
    "+": "opt",
    "/": "opt",
  };
  return className[btn];
};
const Button = ({ value }) => {
  const { calc, setCalc } = useContext(CalcContext);
  
  // user click comma
  const commaClick = () => {
    setCalc({
      ...calc,
      num: !calc.num.toString().includes('.') ? calc.num + value : calc.num
    })
  };

  // user click C

  const resetClick = () => {
    setCalc({ sign: '', num: 0, res: 0})
  }
  // user click number
  const handleClickButton = () => {
    const numberString = value.toString()

    let numberValue;
    if (numberString === '0' && calc.num === 0 ) {
      numberValue = "0"

    } else {
      numberValue = Number(calc.num + numberString)
    }

    setCalc({
      ...calc,
      num: numberValue
    })
  }
  // user click opt

  const signClick = () => {
    setCalc({
      sign: value,
      res: !calc.res && calc.num ? calc.num : calc.res,
      num: 0
    })
  }

  const handleBtnClick = () => {
    const results = {
      ".": commaClick,
      'C': resetClick,
      '/': signClick,
      'x': signClick,
      '-': signClick,
      '+': signClick,

    };
    if(results[value]) {
      return results[value]()
    } else {
      return handleClickButton()
    }
  };
  return (
    <button
      onClick={handleBtnClick}
      className={`${getStyleName(value)} button `}
    >
      {value}
    </button>
  );
};

export default Button;
