import classes from './Mobile.module.css';
import CoachesMosaic from "../../../../assets/CoachesMosaic.png";
import SubmitButton from "../../../../components/submit-button/SubmitButton";
import ArrowRight from "../../../../assets/ArrowRightWhiteThick.png";
import {useHistory} from "react-router-dom";

const Mobile = () => {

    const history = useHistory();

    return (
        <>
            <div className={classes.MosaicContainer}>
                <img src={CoachesMosaic} className={classes.MosaicImage}/>
            </div>
            <div className={classes.Content}>
                <div className={classes.Title}>
                    Expert coaching in the palm of your hands.
                </div>
                <div className={classes.Subtitle}>
                    Custom at-home training plans designed by expert coaches for you.
                </div>
                <div className={classes.ActionButtons}>
                    <div className={classes.ActionButtonWrapper}>
                        <SubmitButton className={classes.ButtonPrimary}
                                      onClick={() => history.push('/find-coach')}>
                            Get started
                            <img src={ArrowRight} />
                        </SubmitButton>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mobile;
