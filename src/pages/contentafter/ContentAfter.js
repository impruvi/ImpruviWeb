import classes from './ContentAfter.module.css';
import Header from "../../components/header/Header";
import Drill from "../../components/drill/Drill";
import DrillAfter from "../../components/drillafter/DrillAfter";

const ContentAfter = () => {
    return (
        <div>
            <Header />
            <div className={classes.Outer}>
                {/*<Navigation />*/}
                <div className={classes.Container}>
                    <div className={classes.Title}>Session 4 <span className={classes.Duration}>(1hr 10 minutes)</span></div>
                    <DrillAfter text={'Warmup'}/>
                    <DrillAfter text={'Passing'}/>
                    <DrillAfter text={'Dribbling'}/>
                    <DrillAfter text={'Shooting'}/>
                </div>
            </div>
        </div>
    );
}

export default ContentAfter;
