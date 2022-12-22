const QuizDetails = ({ inputValues }) => {
  return (
    <div className="details-wrapper">
      <div>Details Of Quiz</div>
      <div>
        <span className="detail-field">Min Limit: {inputValues.minLimit}</span>
        <span className="detail-field">Max Limit: {inputValues.maxLimit}</span>
      </div>
      <div>
        <span className="detail-field">Timer: {inputValues.timer}</span>
        <span className="detail-field">
          Question Count: {inputValues.questionNo}
        </span>
      </div>
    </div>
  );
};
export default QuizDetails;
