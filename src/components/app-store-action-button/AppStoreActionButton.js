import AppleIcon from "../../assets/AppleIcon.png";
import AppleIconBlack from '../../assets/AppleIconBlack.png';
import classes from './AppStoreActionButton.module.css';
import useGoogleAnalyticsClient from "../../hooks/useGoogleAnalyticsClient";

const AppStoreActionButton = ({mode}) => {

    const {gaClient} = useGoogleAnalyticsClient();

    const onClick = () => {
        gaClient.sendGeneralEvent("link_to_app_store");
        window.open("https://apps.apple.com/us/app/impruvi/id1627911060", "_blank");
    }

    return (
        <div className={mode === 'dark' ? [classes.ButtonApple, classes.ButtonAppleDark].join(' ') : classes.ButtonApple}
             onClick={onClick}>
            <img src={mode === 'dark' ? AppleIconBlack : AppleIcon} />
            <div>
                <div className={classes.AppleTextSmall}>Download on the</div>
                <div className={classes.AppleTextLarge}>App Store</div>
            </div>
        </div>
    )
}

export default AppStoreActionButton;
