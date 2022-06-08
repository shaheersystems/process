import React from "react";


function Form(props) {
    return <div className={`form ${props.showClass}`}>
        <form>
            <label htmlFor="name">Project Name:</label>
            <input type="text" placeholder="Travel Management System" />
            <label htmlFor="description">Description:</label>
            <textarea placeholder="Description..."></textarea>
            <label htmlFor="link">Repositry Link:</label>
            <input type="url" placeholder="https://example.com" />
            <input type="submit" />
        </form>
    </div>
}
export default Form;