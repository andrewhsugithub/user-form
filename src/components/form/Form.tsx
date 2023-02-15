import React, { FC, FormEvent, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./form.css";
import ErrorModal from "../errorModal/ErrorModal";

interface FormProps {
  addUser: (user: RawUser) => void;
}

const Form: FC<FormProps> = ({ addUser }) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [haveError, setHaveError] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "" && age === "") {
      setErrorMessage("Please enter a valid name and age (non-empty values).");
      setHaveError(true);
    } else if (username === "") {
      setErrorMessage("Please enter a valid name (non-empty values).");
      setHaveError(true);
    } else if (age === "") {
      setErrorMessage("Please enter a valid age (non-empty values).");
      setHaveError(true);
    } else {
      if (0 <= Number(age) && Number(age) <= 150) {
        addUser({ id: uuidv4(), username: username, age: age });
        setUsername("");
        setAge("");
      } else {
        setErrorMessage("Please enter a valid age ( 0 <= age <= 150 ).");
        setHaveError(true);
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="container form__container">
        <div className="form__group">
          <label className="form__label">Username</label>
          <input
            className="form__input"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
            value={username}
          />
        </div>
        <div className="form__group">
          <label className="form__label">Age (Years)</label>
          <input
            className="form__input"
            type="text"
            onChange={(e) => setAge(e.target.value)}
            value={age}
          />
        </div>
        <button type="submit" className="form__button">
          Add User
        </button>
      </form>
      {haveError && (
        <ErrorModal
          errorMessage={errorMessage}
          haveError={haveError}
          setHaveError={setHaveError}
        />
      )}
    </>
  );
};

export default Form;
