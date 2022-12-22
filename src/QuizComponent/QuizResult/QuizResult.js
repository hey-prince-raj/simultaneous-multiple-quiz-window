import { useContext } from "react";
import { QuizContext } from "../QuizContext";
import ResultTable from "./ResultTable";
import Score from "../Score";
let score;
const QuizResult = () => {
  const quizArray = useContext(QuizContext);
  const findScore = (quizArray) => {
    const m = quizArray.filter((item) => {
      return item.scoreFlag;
    });
    return m.length;
  };
  score = findScore(quizArray);

  return (
    <>
      <Score score={score} />
      <div>Correct Answers Are</div>
      <ResultTable quizArray={quizArray} boolFlag={true} />
      <div>Wrong Answers Are</div>
      <ResultTable quizArray={quizArray} boolFlag={false} />
    </>
  );
};
export default QuizResult;
