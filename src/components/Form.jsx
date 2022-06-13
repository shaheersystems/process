import React from "react";
function Form(props) {
  return (
    <div className={`form ${props.showClass}`}>
      <form onSubmit={props.submitHandler}>
        <label htmlFor="name">Project Name:</label>
        <input
          type="text"
          value={props.projectName}
          placeholder="Travel Management System"
          onChange={props.projectNameHandler}
        />
        <label htmlFor="description">Description:</label>
        <textarea
          placeholder="Description..."
          onChange={props.descHandler}
          value={props.desc}
        ></textarea>
        <label htmlFor="link">Repository Link:</label>
        <input
          type="url"
          value={props.link}
          onChange={props.linkHandler}
          placeholder="https://example.com"
        />
        <input type="submit" />
      </form>
    </div>
  );
}
export default Form;
