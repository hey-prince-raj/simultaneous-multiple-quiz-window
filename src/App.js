import QuizInput from "./QuizInput";
import QuizIndex from "./QuizComponent/QuizIndex";
import "./styles.css";
import { useState } from "react";
const initialInputState = {
  minLimit: "",
  maxLimit: "",
  questionNo: "",
  timer: ""
};
export default function App() {
  const [inputValues, setInputValues] = useState(initialInputState);
  const [checkedBox, setCheckedBoxes] = useState([]);
  const [quizMap, setQuizMap] = useState([]);
  //console.log(quizMap);
  return (
    <>
      <QuizInput
        inputValues={inputValues}
        checkedBox={checkedBox}
        quizMap={quizMap}
        setQuizMap={setQuizMap}
        setInputValues={setInputValues}
        setCheckedBoxes={setCheckedBoxes}
        initialInputState={initialInputState}
      />
      <div className="quiz-content-wrapper">
        {quizMap?.map((item, index) => {
          return (
            <div key={index}>
              <QuizIndex userInput={item} />
            </div>
          );
        })}
      </div>
    </>
  );
}
