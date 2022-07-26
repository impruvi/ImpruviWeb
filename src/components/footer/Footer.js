import classes from './Footer.module.css';
import AppStoreActionButton from "../app-store-action-button/AppStoreActionButton";
import {useHistory} from "react-router-dom";

const Footer = () => {

    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div>
                <div className={classes.SectionTitle}>About</div>
                <div className={classes.Option} onClick={() => history.push('/how-it-works')}>How it works</div>
                <div className={classes.Option} onClick={() => history.push('/become-a-coach')}>Become a coach</div>
                <div className={classes.Option} onClick={() => history.push('/contact')}>Contact</div>
                <div className={classes.Option} onClick={() => history.push('/terms')}>Terms and conditions</div>
            </div>
            <div>
                <div className={classes.SectionTitle}>Social</div>
                <div className={classes.Option}
                     onClick={() => window.open("https://www.instagram.com/impruvi/", "_blank")}>
                    Instagram
                </div>
                {/*<div className={classes.Option}>Twitter</div>*/}
                {/*<div className={classes.Option}>Facebook</div>*/}
                <div className={classes.Option}
                     onClick={() => window.open('https://www.linkedin.com/company/impruvi/', '_blank')}>
                    Linkedin
                </div>
            </div>
            <div>
                <div className={classes.SectionTitle}>Download</div>
                <AppStoreActionButton />
            </div>
        </div>
    )
}

export default Footer;