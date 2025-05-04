import React, { useState, useEffect } from "react";
import "./TodoForm.css";
import { useNavigate } from "react-router";

function TodolistForm({ addTasks, editTask, editingTask }) {
  const [name, setName] = useState("");
  const [state, setState] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (editingTask) {
      setName(editingTask.name);
      setState(editingTask.state);
    }
  }, [editingTask]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !state) {
      alert("Vui lòng không để trống thông tin!!!");
      return;
    }

    if (editingTask) {
      const task = { ...editingTask, name, state };
      editTask(task);
      alert("Sửa thành công!");
    } else {
      const newTask = { id: Date.now(), name, state };
      alert("Thêm thành công!\n");
      addTasks(newTask);
    }

    navigate("/");

    setName("");
    setState("");
  };

  return (
    <div>
      <div className="container">
        <div className="nav">
          <h3>{editingTask ? "Sửa Công Việc" : "Thêm Công Việc"}</h3>
        </div>
        <div className="todoBody">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col">
                <label htmlFor="name" className="form-label">
                  Tên công việc
                </label>
                <input
                  type="text"
                  value={name}
                  className="form-control"
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            <div className="row">
              <div className="col">
                <label className="form-label">Trạng thái</label>
                <select
                  className="form-select"
                  value={state}
                  onChange={(e) => setState(e.target.value)}
                >
                  <option value="">---Trạng thái---</option>
                  <option value="Da xong">Đã xong</option>
                  <option value="Chua xong">Chưa xong</option>
                </select>
              </div>
            </div>
            <button type="submit" className="btn btn-success mt-3">
              {editingTask ? "Lưu thay đổi" : "Thêm công việc"}
            </button>
            <div>
              <button
                onClick={() => navigate("/")}
                type="button"
                className="btn btn-secondary mt-3"
              >
                Huy
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default TodolistForm;
