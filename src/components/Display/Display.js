import React from 'react';
import classes from './Display.module.css';

const display = props => (
    <div className= {classes.Display}>
        <div className ={classes.history}>{props.lastExpression}</div>
        <div>{props.expression}</div>
        <hr />
    </div>
);

export default display;

