import QuizDataHoc from "./QuizDataHoc";
import ArithmeticQuiz from "./ArithmeticQuiz/ArithmeticQuiz";
import QuizDetails from "./QuizDetails";
import QuizResult from "./QuizResult/QuizResult";
const QuizIndex = ({
  inputValues,
  resultArray,
  checkedBox,
  showResult,
  setResultArray,
  setshowResult,
  Provider
}) => {
  return (
    <>
      <QuizDetails inputValues={inputValues} />
      <Provider value={resultArray}>
        {showResult ? (
          <QuizResult />
        ) : (
          <ArithmeticQuiz
            inputValues={inputValues}
            checkedBox={checkedBox}
            setResultArray={setResultArray}
            setshowResult={setshowResult}
          />
        )}
      </Provider>
    </>
  );
};
export default QuizDataHoc(QuizIndex);
