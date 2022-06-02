import Header from "../../components/header/Header";
import classes from "./DashboardPendingPayment.module.css";
import Button from "../../components/button/Button";
import {useHistory} from "react-router-dom";
import Day from "../../components/day/Day";
import Navigation from "../../components/navigation/Navigation";
import InfoButton from "../../components/infobutton/InfoButton";

const DashboardPendingPayment = () => {

    const history = useHistory();

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <Navigation />
                <div className={classes.List}>
                    <div className={classes.Bar}>
                        <div className={classes.BarTitle}>
                            Your training plan for this month
                        </div>
                        <div className={classes.Pill}>
                            <div className={classes.Icon}>
                                <i className="fa-light fa-circle-exclamation"></i>
                            </div>
                            Pending payment
                        </div>
                        <InfoButton text={'Change plan'} route={'/changeplan'} />
                    </div>

                    <div>
                        <div className={classes.Title}>Week 1</div>
                        <div className={classes.Days}>
                            <Day route={'/contentlocked'} title={'Day 1'}/>
                            <Day route={'/contentlocked'} title={'Day 2'}/>
                            <Day route={'/contentlocked'} title={'Day 3'}/>
                        </div>
                    </div>
                    <div>
                        <div className={classes.Title}>Week 2</div>
                        <div className={classes.Days}>
                            <Day route={'/contentlocked'} title={'Day 4'}/>
                            <Day route={'/contentlocked'} title={'Day 5'}/>
                            <Day route={'/contentlocked'} title={'Day 6'}/>
                        </div>
                    </div>
                    <div>
                        <div className={classes.Title}>Week 3</div>
                        <div className={classes.Days}>
                            <Day route={'/contentlocked'} title={'Day 4'}/>
                            <Day route={'/contentlocked'} title={'Day 5'}/>
                            <Day route={'/contentlocked'} title={'Day 6'}/>
                        </div>
                    </div>
                    <div>
                        <div className={classes.Title}>Week 4</div>
                        <div className={classes.Days}>
                            <Day route={'/contentlocked'} title={'Day 4'}/>
                            <Day route={'/contentlocked'} title={'Day 5'}/>
                            <Day route={'/contentlocked'} title={'Day 6'}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default DashboardPendingPayment;
