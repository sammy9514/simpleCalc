import { useState } from "react";
import CalculatorBtn from "./CalculatorBtn";

const App = () => {
  const calculatorBtn = "C,+/-,%,÷,7,8,9,×,4,5,6,-,1,2,3,+,0,.,=";
  const split = calculatorBtn.split(",");

  const [calcBtn, setCalcBtn] = useState(0);
  const handleBtnClick = (e: any) => {
    setCalcBtn((prev) => {});
  };

  return (
    <div>
      <div className="w-full h-screen flex justify-center items-center">
        <div className="w-[380px] h-[550px] rounded-[15px] bg-gray-300 pt-7 px-3 pb-5 flex flex-col  ">
          <div className="w-full h-[150px] bg-white rounded-[15px] p-4 ">
            {calcBtn}
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
