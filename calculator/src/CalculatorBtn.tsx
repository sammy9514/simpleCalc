const CalculatorBtn = ({ btn, className = "", onClick, value }: any) => {
  return (
    <button
      className={`px-4 py-4 bg-gray-600 rounded-md text-white hover:bg-gray-500 transition-colors ${className}`}
      onClick={onClick}
      value={value}
    >
      {btn}
    </button>
  );
};

export default CalculatorBtn;
