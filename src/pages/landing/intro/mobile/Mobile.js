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
                <h1 className={classes.Title}>
                    Expert coaching in the palm of your hands
                </h1>
                <div className={classes.Subtitle}>
                    At-home training plans custom designed for you
                </div>
                <div className={classes.ActionButtons}>
                    <div className={classes.ActionButtonWrapper}>
                        <SubmitButton className={classes.ButtonPrimary}
                                      onClick={() => history.push('/coaches')}>
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
