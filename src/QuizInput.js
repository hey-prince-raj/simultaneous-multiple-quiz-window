import { useRef } from "react";
const QuizInput = ({
  inputValues,
  checkedBox,
  quizMap,
  setQuizMap,
  setInputValues,
  setCheckedBoxes,
  initialInputState
}) => {
  const minRef = useRef();
  const maxRef = useRef();
  const plusRef = useRef();
  const minusRef = useRef();
  const multplRef = useRef();
  const divRef = useRef();
  const inputChangeHandler = (e) => {
    const { name, value } = e.target;
    if (name === "minLimit") {
      maxRef.current.min = value;
    }
    if (name === "maxLimit") {
      minRef.current.max = value;
    }
    if (name === "operation") {
      if (e.target.checked) setCheckedBoxes([...checkedBox, value]);
      else {
        let m = checkedBox.filter((item) => item !== value);
        setCheckedBoxes([...m]);
      }
    }
    setInputValues({
      ...inputValues,
      [name]: value
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    //console.log("values:" + JSON.stringify(inputValues));
    //console.log("values:" + checkedBox);
    setQuizMap([
      ...quizMap,
      {
        inputValues,
        checkedBox
      }
    ]);
    resetForm();
  };
  const resetForm = () => {
    setInputValues(initialInputState);
    setCheckedBoxes([]);
    plusRef.current.checked = false;
    minusRef.current.checked = false;
    multplRef.current.checked = false;
    divRef.current.checked = false;
  };
  return (
    <>
      <div>Quiz Generation</div>
      <form onSubmit={submitHandler}>
        <div>
          <label>Min Limit</label>
          <input
            ref={minRef}
            max=""
            type="number"
            name="minLimit"
            value={inputValues.minLimit}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <label>Max Limit</label>
          <input
            ref={maxRef}
            min=""
            type="number"
            name="maxLimit"
            value={inputValues.maxLimit}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <label>No of questions</label>
          <input
            min="1"
            type="number"
            name="questionNo"
            value={inputValues.questionNo}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <label>Timer</label>
          <input
            min="1"
            type="number"
            name="timer"
            value={inputValues.timer}
            onChange={inputChangeHandler}
            required
          />
        </div>
        <div>
          <span>Operation:-</span>
          <span>
            <span>
              <input
                ref={plusRef}
                type="checkbox"
                name="operation"
                value="+"
                onChange={inputChangeHandler}
                required={!checkedBox.length}
              />
              <label>+</label>
            </span>
            <span>
              <input
                ref={minusRef}
                type="checkbox"
                name="operation"
                value="-"
                onChange={inputChangeHandler}
              />
              <label>-</label>
            </span>
            <span>
              <input
                ref={multplRef}
                type="checkbox"
                name="operation"
                value="*"
                onChange={inputChangeHandler}
              />
              <label>*</label>
            </span>
            <span>
              <input
                ref={divRef}
                type="checkbox"
                name="operation"
                value="/"
                onChange={inputChangeHandler}
              />
              <label>/</label>
            </span>
          </span>
        </div>
        <input type="submit" value="submit" />
      </form>
    </>
  );
};
export default QuizInput;
