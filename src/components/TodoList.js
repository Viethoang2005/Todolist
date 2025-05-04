import React from "react";
import { useNavigate } from "react-router";
import "./TodoList.css";
function TodoList({ tasks, deleteTask, setEditingTask }) {
  const navigate = useNavigate();

  return (
    <div>
      <div className="container">
        <div className="header mb-3">
          <h3>Danh sách công việc</h3>
        </div>
        <div className="list-body">
          {tasks.length === 0 ? (
            <p>Chua co cong viec nao</p>
          ) : (
            tasks.map((t) => {
              let color;
              let text;
              if (t.state === "Da xong") {
                color = "#d3d3d3";
                text = "line-through";
              }
              return (
                <div
                  key={t.id}
                  style={{ backgroundColor: color, textDecoration: text }}
                  className="list-task"
                >
                  <div className="content">
                    <p>{t.name}</p>
                  </div>
                  <div className="btn-gr">
                    <button
                      onClick={() => {
                        setEditingTask(t);
                        navigate("/todo-form");
                      }}
                      className="btn btn-warning m-2"
                    >
                      Sua
                    </button>
                    <button
                      onClick={() => deleteTask(t.id)}
                      className="btn btn-danger"
                    >
                      Xoa
                    </button>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </div>
      <button
        id="add"
        onClick={() => {
          setEditingTask(null);
          navigate("/todo-form");
        }}
        className="btn btn-success rounded-circle"
      >
        +
      </button>
    </div>
  );
}

export default TodoList;
