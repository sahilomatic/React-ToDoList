import "./inputBox.css";
export default function DisplayList({ data, moveToCompleteTask }) {
  return (
    <div className="display">
      <div className="todolist">
        <h4 style={{ margin: "20px", justifyContent: "center" }}>To Do List</h4>
        <ul>
          {data.todolist.map((str, index) => {
            return (
              <li key={index} draggable>
                <span>{str}</span>
                <span>
                  <button
                    className="button"
                    onClick={() => {
                      moveToCompleteTask(str);
                    }}
                  >
                    Done
                  </button>
                </span>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="completedList">
        <h4 style={{ margin: "20px", justifyContent: "center" }}>
          Completed List
        </h4>
        <ul>
          {data.completedTask.map((str, index) => {
            return <li key={index}>{str}</li>;
          })}
        </ul>
      </div>
    </div>
  );
}
