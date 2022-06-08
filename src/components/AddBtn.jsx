import React from "react";



function AddBtn(props) {
    return <div className="add-btn">
        <button onClick={props.addProject} title="Add project" ><span className="material-icons">add</span></button>
    </div>
}

export default AddBtn;