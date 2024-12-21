import './App.css';
import Todo from './Components/Todo';
import EmployeeList from './Components/employee_list';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from "react-redux";
import { store } from "./Components/store";

function App() {
  return (
    <Provider store={store}>
    <Router>
      <Routes>
        <Route path="/todo" element={<Todo />} />
        <Route path="/employee_list" element={<EmployeeList />} />
      </Routes>
    </Router>
  </Provider>
  );
}

export default App;
