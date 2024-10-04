import "./Form.css";
import { useState } from "react";
import Message from "./Message";

export default function Form() {
  const [errorMes, setErrorMes] = useState(null);
  const [showMes, setShowMes] = useState(false);
  const [form, setForm] = useState({
    name: "",
    number: "",
    age: "",
    isEmployee: false,
    salary: "",
  });

  const btnDisabled =
    form.name == "" || form.number == "" || form.age == "" || form.salary == "";

  const handelKeyPress = (event) => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  };

  const handelSubmit = (event) => {
    event.preventDefault();
    setErrorMes(null)
    if(form.age < 18 || form.age > 100 ){
      setErrorMes('The age is not allowed')
    }else{
      setErrorMes(null)
    }
    if(form.number.length < 10 || form.number.length > 12 ){
      setErrorMes('The number is not allowed')
    }
    setShowMes(true)
  };

  const handelMesDisabled = () => {
    if (showMes) {
      setShowMes(false);
    }
  };

  const handelInputName = (event) => {
    setForm({ ...form, name: event.target.value });
  };

  const handelInputNumber = (event) => {
    setForm({ ...form, number: event.target.value });
  };

  const handelInputAge = (event) => {
    setForm({ ...form, age: event.target.value });
  };

  const handelCheckEmployee = (event) => {
    setForm({ ...form, isEmployee: event.target.checked });
  };

  const handelSelectSalary = (event) => {
    setForm({ ...form, salary: event.target.value });
  };

  return (
    <div className="contaner" onClick={handelMesDisabled}>
      <form>
        <div className="input">
          <label>Name:</label>
          <input type="text" value={form.name} onChange={handelInputName} />
        </div>

        <div className="input">
          <label>Phone Number:</label>
          <input
            type="text"
            value={form.number}
            onKeyPress={handelKeyPress}
            onChange={handelInputNumber}
          />
        </div>

        <div className="input">
          <label>Age:</label>
          <input
            type="text"
            value={form.age}
            onKeyPress={handelKeyPress}
            onChange={handelInputAge}
          />
        </div>

        <div className="checkbox">
          <label>Are you an employee?</label>
          <input
            type="checkbox"
            checked={form.isEmployee}
            onChange={handelCheckEmployee}
          />
        </div>

        <div className="input">
          <label>Salary:</label>
          <select value={form.salary} onChange={handelSelectSalary}>
            <option hidden></option>
            <option>200$</option>
            <option>500$</option>
            <option>600$</option>
          </select>
        </div>

        <button
          className={btnDisabled ? "disabled" : ""}
          type="submit"
          disabled={btnDisabled}
          onClick={handelSubmit}
        >
          Submit
        </button>
        <Message isVisible={showMes} errorMes={errorMes} />
      </form>
    </div>
  );
}
