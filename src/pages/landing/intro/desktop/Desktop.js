import classes from './Desktop.module.css';
import {useHistory} from "react-router-dom";
import CoachesMosaic from "../../../../assets/CoachesMosaic.png";
import SubmitButton from "../../../../components/submit-button/SubmitButton";
import ArrowRight from "../../../../assets/ArrowRightWhiteThick.png";

const Desktop = () => {

    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div className={classes.Left}>
                <div>
                    <div className={classes.Title}>
                        Expert coaching in the palm of your hands
                    </div>
                    <div className={classes.Subtitle}>
                        At-home training plans custom designed for you
                    </div>
                    <div className={classes.ActionButtons}>
                        <div className={classes.ActionButtonWrapper}>
                            <SubmitButton className={classes.ButtonPrimary}
                                          onClick={() => history.push('/coaches')}>
                                Start your free trial
                                <img src={ArrowRight} />
                            </SubmitButton>
                        </div>
                    </div>
                </div>
            </div>
            <div className={classes.Right}>
                <div className={classes.MosaicContainer}>
                    <img src={CoachesMosaic} className={classes.MosaicImage}/>
                </div>
            </div>
        </div>
    )
}

export default Desktop;
