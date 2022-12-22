import { useRef, useContext, useEffect, useState } from "react";
import { QuizContext } from "../QuizContext";
import Question from "./Question";
import Score from "../Score";
const ArithmeticQuiz = ({
  inputValues,
  checkedBox,
  setshowResult,
  setResultArray
}) => {
  const timerRef = useRef();
  const quesCount = useRef(1);
  console.log(quesCount.current);
  let quizArray = useContext(QuizContext);
  let minCnt = parseInt(inputValues.minLimit, 10);
  let maxCnt = parseInt(inputValues.maxLimit, 10);
  let timerVal = parseInt(inputValues.timer, 10);
  let questnNo = parseInt(inputValues.questionNo, 10);
  let operatorArray = checkedBox;
  const [questionField, setQuestionField] = useState({});
  const [score, setScore] = useState(0);
  const [quesNo, setQuesNo] = useState(1);
  const [timer, setTimer] = useState(timerVal);
  const addItems = (item) => {
    setResultArray((prev) => [...prev, item]);
  };
  const generateQuestionInput = (quesCount) => {
    let operand1 = Math.floor(Math.random() * (maxCnt - minCnt + 1) + minCnt);
    let operand2 = Math.floor(Math.random() * (maxCnt - minCnt + 1) + minCnt);
    let oprIndex = Math.floor(Math.random() * operatorArray.length);
    let operator = operatorArray[oprIndex];
    let result;
    switch (operator) {
      case "+":
        result = operand1 + operand2;
        break;
      case "-":
        result = operand1 - operand2;
        break;
      case "*":
        result = operand1 * operand2;
        break;
      case "/":
        result = operand1 / operand2;
        break;
      default:
        break;
    }
    addItems({
      no: quesCount,
      question: `${operand1}${operator}${operand2}`,
      response: "NA",
      result,
      scoreFlag: false
    });
    setQuestionField({
      operand1,
      operand2,
      operator,
      result
    });
  };
  useEffect(() => {
    return generateQuestionInput(quesCount.current++);
  }, []);
  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (timer === 0) {
        clearInterval(timerRef.current);
        if (quesNo === questnNo - 1) {
          setshowResult(true);
          return;
        }
        setQuesNo((prev) => prev + 1);
        generateQuestionInput(quesCount.current++);
        setTimer(timerVal);
        return;
      }
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timerRef.current);
  }, [timer]);
  const nextClickHandler = (inpVal, setInputVal) => {
    if (timerRef.current && quesNo === questnNo - 1) {
      clearInterval(timerRef.current);
      setshowResult(true);
      return;
    }
    setTimer(timerVal);
    if (inpVal) {
      if (questionField.result === inpVal) {
        setScore((prev) => prev + 1);
        quizArray[quesNo - 1].scoreFlag = true;
      }
      quizArray[quesNo - 1].response = inpVal;
    }
    setInputVal("");
    setQuesNo((prev) => prev + 1);
    generateQuestionInput(quesCount.current++);
  };
  return (
    <>
      <div>
        <span className="detail-field">Question No:-{quesNo}</span>
        <span className="detail-field">Time Left - {timer}</span>
      </div>
      <div>
        <Question
          questionField={questionField}
          nextClickHandler={nextClickHandler}
        />
      </div>
      <div>
        <Score score={score} />
      </div>
    </>
  );
};
export default ArithmeticQuiz;
