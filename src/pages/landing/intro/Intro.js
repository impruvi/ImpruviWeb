import classes from "./Intro.module.css";
import LandingMainImage from "../../../assets/LandingMain.png";
import AppStoreActionButton from "../../../components/app-store-action-button/AppStoreActionButton";
import {useHistory} from "react-router-dom";
import ArrowRight from "../../../assets/ArrowRightWhiteThick.png";

const Intro = () => {

    const history = useHistory();

    return (
        <div className={classes.Content}>
            <div className={classes.Left}>
                <div>
                    <div className={classes.Title}>
                        Expert coaching in the palm of your hands.
                    </div>
                    <div className={classes.Subtitle}>
                        Custom at-home training plans designed by expert coaches for you.
                    </div>
                    <div className={classes.ActionButtons}>
                        <div className={classes.ButtonPrimary} onClick={() => history.push('/find-coach')}>
                            Get started
                            <img src={ArrowRight} />
                        </div>
                        <AppStoreActionButton />
                    </div>
                </div>
            </div>
            <div className={classes.Right}>
                <img src={LandingMainImage} className={classes.MainImage}/>
            </div>
        </div>
    )
}

export default Intro;