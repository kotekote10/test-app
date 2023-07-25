import { useState } from "react";

export function Form({
  handleSubmit,
  handleChange,
  formData,
  formErrors,
  focused,
  handleFocus,
  handleRequired,
}) {
  return (
    <form onSubmit={handleSubmit} className="form">
      <div className="firstname-lastname-container">
        <div className="fistname-container">
          <input
            className={
              formErrors.firstName && focused.firstName.toString() === "true"
                ? "firstname-error"
                : "firstname"
            }
            value={formData.firstName}
            type="text"
            placeholder="სახელი"
            onChange={handleChange}
            name="firstName"
            onBlur={handleFocus}
            focused={focused.firstName.toString()}
            onFocus={handleRequired}
          ></input>
          {focused.firstName.toString() === "true" && (
            <span className="error1">{formErrors.firstName}</span>
          )}
        </div>
        <div className="lastname-container">
          <input
            className={
              formErrors.lastName && focused.lastName.toString() === "true"
                ? "lastname-error"
                : "lastname"
            }
            value={formData.lastName}
            type="text"
            placeholder="გვარი"
            onChange={handleChange}
            name="lastName"
            onBlur={handleFocus}
            focused={focused.lastName.toString()}
            onFocus={handleRequired}
          ></input>

          {focused.lastName.toString() === "true" && (
            <span className="error2">{formErrors.lastName}</span>
          )}
        </div>
      </div>

      <div className="email-container">
        <input
          className={
            formErrors.email && focused.email.toString() === "true"
              ? "email-error"
              : "email"
          }
          value={formData.email}
          type="email"
          placeholder="მეილი"
          onChange={handleChange}
          name="email"
          onBlur={handleFocus}
          focused={focused.email.toString()}
          onFocus={handleRequired}
        ></input>

        {focused.email.toString() === "true" && (
          <span className="error3">{formErrors.email}</span>
        )}
      </div>

      <textarea
        className="comment"
        value={formData.comments}
        type="text"
        placeholder="დამატებითი ინფორმაცია საკუთარ თავზე"
        onChange={handleChange}
        name="comments"
      ></textarea>
      <div
        className={
          formErrors.box && focused.box.toString() === "true"
            ? "checkbox-container-error"
            : "checkbox-container"
        }
      >
        <label htmlFor="box" className="checkbox-label">
          <input
            className="checkbox"
            id="box"
            type="checkbox"
            checked={formData.box}
            onChange={handleChange}
            name="box"
            focused={focused.box.toString()}
          ></input>
          <div className="box__box"></div>
          ვეთანხმები რომ ლობიანი ჯობია ხაჭაპურს
        </label>
      </div>
      <div
        className={
          formErrors.radio && focused.radio.toString() === "true"
            ? "buttons-container-error"
            : "buttons-container"
        }
      >
        <fieldset className="buttons">
          <legend>აირჩიე ციფრი</legend>

          <label htmlFor="one" className="radio">
            <input
              className="radio__input"
              type="radio"
              id="one"
              name="radio"
              value="one"
              onChange={handleChange}
              checked={formData.radio === "one"}
              focused={focused.radio.toString()}
            />
            <div className="radio__radio"></div>1
          </label>

          <label htmlFor="two" className="radio">
            <input
              className="radio__input"
              type="radio"
              id="two"
              name="radio"
              value="two"
              onChange={handleChange}
              checked={formData.radio === "two"}
              focused={focused.radio.toString()}
            />
            <div className="radio__radio"></div>2
          </label>
          <div></div>

          <label htmlFor="three" className="radio">
            <input
              className="radio__input"
              type="radio"
              id="three"
              name="radio"
              value="three"
              onChange={handleChange}
              checked={formData.radio === "three"}
              focused={focused.radio.toString()}
            />
            <div className="radio__radio"></div>3
          </label>
        </fieldset>
      </div>
      <select
        className={
          formErrors.select && focused.select.toString() === "true"
            ? "select-error"
            : "select"
        }
        id="select"
        value={formData.select}
        onChange={handleChange}
        name="select"
        onBlur={handleFocus}
        onFocus={handleRequired}
        focused={focused.select.toString()}
      >
        <option></option>
        <option>1</option>
        <option>2</option>
        <option>3</option>
        <option>4</option>
        <option>5</option>
      </select>

      <button className="submit">Submit</button>
    </form>
  );
}
