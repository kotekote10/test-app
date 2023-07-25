import { useState, useEffect } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { Sel } from "./components/Sel";
import { validate } from "./components/validate";
import Select from "react-select";
function App() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    comments: "",
    box: false,
    radio: "",
    select: "",
  });
  const [focused, setFocused] = useState({
    firstName: false,
    lastName: false,
    email: false,
    comments: false,
    box: false,
    radio: false,
    select: false,
  });
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevFormData) => {
      return {
        ...prevFormData,
        [name]: type === "checkbox" ? checked : value,
      };
    });
    if (type === "checkbox" || type === "radio") {
      setFocused((prev) => {
        return {
          ...prev,
          [name]: false,
        };
      });
    }
  }

  function handleSubmit(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    setFocused({
      firstName: true,
      lastName: true,
      email: true,
      box: true,
      radio: true,
      select: true,
    });
    setIsSubmit(true);
  }
  function handleFocus(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    const { name, value, type, checked } = event.target;
    setFocused((prev) => {
      return {
        ...prev,
        [name]: true,
      };
    });
  }
  function handleRequired(event) {
    event.preventDefault();
    setFormErrors(validate(formData));
    const { name, value, type, checked } = event.target;
    setFocused((prev) => {
      return {
        ...prev,
        [name]: false,
      };
    });
  }

  return (
    <div className="app">
      {/*<pre>{JSON.stringify(formData, undefined, 2)}</pre>
        <pre>{JSON.stringify(focused, undefined, 2)}</pre>
        <pre>{JSON.stringify(formErrors, undefined, 2)}</pre>*/}
      <Form
        handleChange={handleChange}
        formData={formData}
        handleSubmit={handleSubmit}
        formErrors={formErrors}
        focused={focused}
        handleFocus={handleFocus}
        handleRequired={handleRequired}
      />
    </div>
  );
}

export default App;
