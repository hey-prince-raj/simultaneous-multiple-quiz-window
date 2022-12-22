import { useState } from "react";
import { QuizContext } from "./QuizContext";
const { Provider } = QuizContext;
const QuizDataHoc = (Component) => {
  const NewComponent = ({ userInput }) => {
    const { inputValues, checkedBox } = userInput;
    const [showResult, setshowResult] = useState(false);
    const [resultArray, setResultArray] = useState([]);
    return (
      <Component
        inputValues={inputValues}
        resultArray={resultArray}
        checkedBox={checkedBox}
        showResult={showResult}
        setResultArray={setResultArray}
        setshowResult={setshowResult}
        Provider={Provider}
      />
    );
  };
  return NewComponent;
};
export default QuizDataHoc;
