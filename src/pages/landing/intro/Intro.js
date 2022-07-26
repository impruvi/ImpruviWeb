import classes from "./Intro.module.css";
import Mobile from "./mobile/Mobile";
import Desktop from "./desktop/Desktop";
import AngleDown from '../../../assets/AngleDownThin.png';

const Intro = ({scrollToHowItWorks}) => {

    return (
        <>
            <div className={classes.DesktopWrapper}>
                <Desktop />
            </div>
            <div className={classes.MobileWrapper}>
                <Mobile />
            </div>
            <div>
                <img src={AngleDown} className={classes.AngleDown} onClick={scrollToHowItWorks}/>
            </div>
        </>
    )
}

export default Intro;