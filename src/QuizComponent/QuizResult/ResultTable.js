const ResultTable = ({ quizArray, boolFlag }) => {
  console.log(quizArray);
  return (
    <table>
      <tbody>
        <tr>
          <th>No</th>
          <th>Question</th>
          <th>Response</th>
          <th>Answer</th>
        </tr>
        {quizArray
          .filter((item) => {
            return item.scoreFlag === boolFlag;
          })
          .map((item, index) => {
            return (
              <tr key={item.no}>
                <td>{item.no}</td>
                <td>{item.question}</td>
                <td>{item.response}</td>
                <td>{item.result}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};
export default ResultTable;
