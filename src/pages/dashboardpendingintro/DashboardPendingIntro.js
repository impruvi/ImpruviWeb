import Header from "../../components/header/Header";
import PendingIntro from '../../assets/PendingIntro.png';
import classes from './DashboardPendingIntro.module.css';

const  DashboardPendingIntro = () => {

    return (
        <div>
            <Header />
            <div>
                <div className={classes.Bar}>
                    <div className={classes.Title}>
                        Your training plan
                    </div>
                    <div className={classes.Pill}>
                        Pending Henry to fill in your plan
                    </div>
                </div>

                <div className={classes.Info}>
                    <img src={PendingIntro} />
                    Luke will reach out to you to schedule and intro call within the next 2 days.
                    He will set up an initial in person session from this call.
                    After that session he will create an initial plan.
                </div>
            </div>
        </div>
    );

}

export default  DashboardPendingIntro;
