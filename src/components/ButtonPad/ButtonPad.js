import Button from "../Button/Button";
import React from "react";
import classes from "./ButtonPad.module.css";

const buttonPad = (props) => {
  return (
    <div className={classes.ButtonPad}>
      <div>
        <Button name="AC" click={props.clicked} />
        <Button name="⌫" click={props.clicked} />
        <Button name="%" click={props.clicked} />
        <Button name="/" blue click={props.clicked} />
      </div>
      <div>
        <Button name="1" click={props.clicked} />
        <Button name="2" click={props.clicked} />
        <Button name="3" click={props.clicked} />
        <Button name="*" blue click={props.clicked} />
      </div>
      <div>
        <Button name="4" click={props.clicked} />
        <Button name="5" click={props.clicked} />
        <Button name="6" click={props.clicked} />
        <Button name="-" blue click={props.clicked} />
      </div>
      <div>
        <Button name="7" click={props.clicked} />
        <Button name="8" click={props.clicked} />
        <Button name="9" click={props.clicked} />
        <Button name="+" blue click={props.clicked} />
      </div>
      <div>
        <Button name="+/-" click={props.clicked} />
        <Button name="0" click={props.clicked} />
        <Button name="." click={props.clicked} />
        <Button name="=" blue click={props.clicked} />
      </div>
    </div>
  );
};

export default buttonPad;
