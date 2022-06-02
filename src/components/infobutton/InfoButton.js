import classes from './InfoButton.module.css';
import {useHistory} from "react-router-dom";

const InfoButton = ({text, route}) => {
    const history = useHistory();

    return (
        <div className={classes.Container} onClick={() => history.push(route)}>
            {text}
        </div>
    );
}

export default InfoButton;
