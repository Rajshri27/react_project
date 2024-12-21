import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, deleteTodo, editTodo, updateTodo } from "./store";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";

function Todo() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.list);
  const selectedTodo = useSelector((state) => state.todo.selectedTodo);

  const [data, setData] = useState(
    selectedTodo || { task: "", assignedTo: "", startDate: "", endDate: "" }
  );
  const [isAddClick, setAddClick] = useState(false);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleAddClick = () => {
    setAddClick(true);
    setData({ task: "", assignedTo: "", startDate: "", endDate: "" });
  };

  const handleSubmit = () => {
    if (selectedTodo !== null) {
      const index = list.findIndex((item) => item === selectedTodo);
      console.log(index)
      dispatch(updateTodo({ index, data }));
    } else {
      dispatch(addTodo(data));
    }
    setAddClick(false);
  };

  const handleEditClick = (index) => {
    dispatch(editTodo(list[index]));
    setData(list[index]);
    setAddClick(true);
  };

  const handleDeleteClick = (index) => {
    dispatch(deleteTodo(index));
  };

  return (
    <div>
      {isAddClick ? (
        <div>
           <div className="header">
         <h2 className="header_text">Add Todo Item</h2>
       </div>
        <div className="form">
          <form>
            <div className="input_field">
            <label>Task</label>
            <input type="text" name="task" className="input1" value={data.task} onChange={handleChange} />
            </div>
            <div className="input_field">
            <label>Assigned to</label>
            <input type="text" name="assignedTo" className="input2" value={data.assignedTo} onChange={handleChange} />
            </div>
            <div className="input_field">
            <label>Start Date</label>
            <input type="date" name="startDate" className="input3" value={data.startDate} onChange={handleChange} />
            </div>
            <div>
            <label>End Date</label>
            <input type="date" name="endDate" className="input4" value={data.endDate} onChange={handleChange} />
            </div>
            <button type="button" className="submit_button" onClick={handleSubmit}>
              {selectedTodo !== null ? "Update" : "Submit"}
            </button>
          </form>
        </div>
        </div>
      ) : (
        <div>
          <div className="header">
            <h2 className="header_text">Todo List</h2>
          </div>
          <div className="add">
            <button className="add_button" onClick={handleAddClick}>Add</button>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Task</th>
                <th>Assigned to</th>
                <th>Start Date</th>
                <th>End Date</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {list.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.task}</td>
                  <td>{item.assignedTo}</td>
                  <td>{item.startDate}</td>
                  <td>{item.endDate}</td>
                  <td>
                    <span className="edit_icon" onClick={() => handleEditClick(index)}>
                      <FontAwesomeIcon icon={faEdit} />
                    </span>
                    <span onClick={() => handleDeleteClick(index)}>
                      <FontAwesomeIcon icon={faTrash} />
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Todo;