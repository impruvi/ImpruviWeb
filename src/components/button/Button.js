import {useHistory} from "react-router-dom";
import classes from './Button.module.css';

const Button = ({text, route}) => {
    const history = useHistory();

    return (
        <div onClick={() => history.push(route)} className={classes.Container}>
            {text}
        </div>
    )
}

export default Button;
