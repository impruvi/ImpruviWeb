import classes from './Navigation.module.css';
import {useHistory} from "react-router-dom";

const Navigation = () => {
    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div className={classes.Option}>
                <div className={classes.OptionInner} onClick={() => history.push('/dashboard')}>
                    <div className={classes.Icon}>
                        <i className="fa-thin fa-house" />
                    </div>
                    <div className={classes.HelpText}>
                        Training plan
                    </div>
                </div>
            </div>
            <div className={classes.Option}>
                <div className={classes.OptionInner} onClick={() => history.push('/howitworks')}>
                    <div className={classes.Icon}>
                        <i className="fa-thin fa-circle-info" />
                    </div>
                    <div className={classes.HelpText}>
                        How it works
                    </div>
                </div>
            </div>
            <div className={classes.Option}>
                <div className={classes.OptionInner}>
                    <div className={classes.Icon}>
                        <i className="fa-thin fa-circle-question" />
                    </div>
                    <div className={classes.HelpText}>
                        Contact us
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navigation;
