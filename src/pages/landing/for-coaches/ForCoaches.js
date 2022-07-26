import classes from './ForCoaches.module.css';
import ForCoachesImage from '../../../assets/ForCoaches.png';
import {useHistory} from "react-router-dom";
import SubmitButton from "../../../components/submit-button/SubmitButton";

const ForCoaches = () => {

    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div className={classes.Card}>
                <div className={classes.CardLeft}>
                    <img src={ForCoachesImage} />
                </div>
                <div className={classes.CardRight}>
                    <div className={classes.HeaderText}>For coaches</div>
                    <div className={classes.Title}>Let's grow your business</div>
                    <div className={classes.SubTitle}>
                        Whether you are a private coach or a club coach,
                        use our app to expand
                    </div>
                    <div className={classes.Break}/>
                    <div className={classes.Row}>
                        <div>Increased clientele</div>
                        <div>Expanded markets</div>
                        <div>Convenient coaching</div>
                    </div>
                    <SubmitButton className={classes.Button} onClick={() => history.push('/become-a-coach')}>
                        Become a coach
                    </SubmitButton>
                </div>
            </div>
        </div>
    )
}

export default ForCoaches;