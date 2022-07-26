import AppleIcon from "../../assets/AppleIcon.png";
import AppleIconBlack from '../../assets/AppleIconBlack.png';
import classes from './AppStoreActionButton.module.css';

const AppStoreActionButton = ({mode}) => {

    return (
        <div className={mode === 'dark' ? [classes.ButtonApple, classes.ButtonAppleDark].join(' ') : classes.ButtonApple}
             onClick={() => window.open("https://apps.apple.com/us/app/impruvi/id1627911060", "_blank")}>
            <img src={mode === 'dark' ? AppleIconBlack : AppleIcon} />
            <div>
                <div className={classes.AppleTextSmall}>Download on the</div>
                <div className={classes.AppleTextLarge}>App Store</div>
            </div>
        </div>
    )
}

export default AppStoreActionButton;