import classes from './Footer.module.css';
import AppStoreActionButton from "../app-store-action-button/AppStoreActionButton";
import {useHistory} from "react-router-dom";

const Footer = ({mode='light'}) => {

    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div className={classes.Section}>
                <div className={classes.SectionTitle}>About</div>
                <div className={classes.Option} onClick={() => history.push('/how-it-works')}>How it works</div>
                <div className={classes.Option} onClick={() => history.push('/find-coach')}>Find a coach</div>
                <div className={classes.Option} onClick={() => history.push('/become-a-coach')}>Become a coach</div>
                <div className={classes.Option} onClick={() => history.push('/contact')}>Contact</div>
                <div className={classes.Option} onClick={() => history.push('/terms')}>Terms and conditions</div>
            </div>
            <div className={classes.Section}>
                <div className={classes.SectionTitle}>Social</div>
                <div className={classes.Option}
                     onClick={() => window.open("https://www.instagram.com/impruvi/", "_blank")}>
                    Instagram
                </div>
                <div className={classes.Option}
                     onClick={() => window.open('https://www.linkedin.com/company/impruvi/', '_blank')}>
                    LinkedIn
                </div>
            </div>
            <div className={classes.Section}>
                <div className={classes.SectionTitle}>Download</div>
                <div className={classes.AppStoreActionButtonWrapper}>
                    <AppStoreActionButton mode={mode}/>
                </div>
            </div>
        </div>
    )
}

export default Footer;