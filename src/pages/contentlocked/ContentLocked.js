import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import classes from './ContentLocked.module.css';

const ContentLocked = () => {

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Icon}>
                    <i className="fa-thin fa-lock"></i>
                </div>
                <div className={classes.Text}>
                    This content is locked until you complete your payment
                </div>
                <Button text={'Pay'} route={'/content'}/>
            </div>
        </div>
    );

}

export default ContentLocked;
