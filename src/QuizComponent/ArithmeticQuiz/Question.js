import { useState } from "react";
const Question = ({ questionField, nextClickHandler }) => {
  const [inputVal, setInputVal] = useState("");
  const setInputValueHandler = (e) => {
    setInputVal(e.target.value);
  };
  return (
    <>
      <div>
        Question:
        {questionField.operand1}
        {questionField.operator}
        {questionField.operand2}
      </div>
      <input type="number" value={inputVal} onChange={setInputValueHandler} />
      <button
        onClick={() => nextClickHandler(parseInt(inputVal, 10), setInputVal)}
      >
        next
      </button>
    </>
  );
};
export default Question;
