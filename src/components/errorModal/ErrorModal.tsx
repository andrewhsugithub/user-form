import React, { FC } from "react";
import "./errorModal.css";

interface ErrorModalProps {
  errorMessage: string;
  haveError: boolean;
  setHaveError: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorModal: FC<ErrorModalProps> = ({
  errorMessage,
  haveError,
  setHaveError,
}) => {
  return (
    <>
      <div className="outside__modal" onClick={() => setHaveError(false)}></div>
      <div
        className={`container modal__container ${
          !haveError ? "closeModal" : ""
        }`}
      >
        <h1 className="modal__title">Invalid input</h1>
        <div className="modal__description">
          <p>{errorMessage}</p>
          <button
            className="modal__button"
            type="button"
            onClick={() => setHaveError(false)}
          >
            Okay
          </button>
        </div>
      </div>
    </>
  );
};

export default ErrorModal;
