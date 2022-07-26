import classes from "./RadioButton.module.css";

const RadioButton = ({isActive}) => {
    return (
        <div className={classes.Container}>
            {isActive && (
                <div className={classes.Knob}/>
            )}
        </div>
    )
}

export default RadioButton;