import React from "react";
import classes from "./Button.module.css";

const button = (props) => {
    let btnClass = classes.Button;
    if(props.blue){
        btnClass = classes.Button + " " + classes.blue;
    }

    return (
      <div className={btnClass} onClick={() => props.click(props.name)}>
        {props.name}
      </div>
    );
}

export default button;
