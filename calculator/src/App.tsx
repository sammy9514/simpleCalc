import { useState } from "react";
import CalculatorBtn from "./CalculatorBtn";
import { Parser } from "expr-eval";

const App = () => {
  const calculatorBtn = "C,del,%,÷,7,8,9,x,4,5,6,-,1,2,3,+,0,.,=";
  const split = calculatorBtn.split(",");

  const [displayCalc, setDisplayCalc] = useState("0");

  const handleBtnClick = (e: any) => {
    const value = e.target.value;
    if (value === "C") {
      setDisplayCalc("0");
    } else if (value === "=") {
      calculate();
    } else if (value === "%") {
      percentage();
    } else if (value === "del") {
      backSpace();
    } else {
      setDisplayCalc((prev) => {
        if (prev === "0") {
          return value;
        } else {
          return prev + value;
        }
      });
    }
  };

  const calculate = () => {
    try {
      const expression = displayCalc.replace(/x/g, "*").replace(/÷/g, "/");

      const parser = new Parser();
      const expr = parser.parse(expression);
      const result = expr.evaluate(expression);
      setDisplayCalc(result.toString());
    } catch (error) {
      setDisplayCalc("error");
    }
  };

  const backSpace = () => {
    setDisplayCalc((prev) => {
      if (prev.length <= 1) {
        return "0";
      } else {
        return prev.slice(0, -1);
      }
    });
  };

  const percentage = () => {
    setDisplayCalc((prev) => {
      const parts = prev.split(/([\+\-x÷])/);
      const last = parts.pop() ?? "";
      const op = parts.pop() ?? "";
      const percent = (parseFloat(last) / 100).toString();

      return parts.join("") + op + percent;
    });
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[380px] h-[550px] rounded-[15px] bg-gray-300 pt-7 px-3 pb-5 flex flex-col  ">
          <div className="w-full h-[150px] bg-white rounded-[15px] p-4 ">
            {displayCalc}
          </div>
          <div className="mt-7 flex-1 rounded-b-xl grid gap-4 grid-cols-4 grid-rows-5 ">
            {split.map((btn, i) => (
              <CalculatorBtn
                key={i}
                btn={btn}
                value={btn}
                onClick={handleBtnClick}
                className={btn === "0" ? "col-span-2" : ""}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
