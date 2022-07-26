import useGlobalPopup from "../../hooks/useGlobalPopup";
import {useHistory} from "react-router-dom";
import classes from './AuthSubtitle.module.css';


const AuthSubtitle = () => {

    const {setOpenPopup} = useGlobalPopup();
    const history = useHistory();

    const onLinkClick = () => {
        history.push('/become-a-coach');
        setOpenPopup(null);
    }

    return (
        <div>
            Are you a coach? <span onClick={onLinkClick} className={classes.Link}>Get started here</span>.
        </div>
    )
}

export default AuthSubtitle;