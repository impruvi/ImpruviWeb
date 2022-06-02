import Header from "../../components/header/Header";
import classes from './Content.module.css'
import Navigation from "../../components/navigation/Navigation";
import Drill from "../../components/drill/Drill";

const Content = () => {

    return (
        <div>
            <Header />
            <div className={classes.Outer}>
                {/*<Navigation />*/}
                <div className={classes.Container}>
                    <div className={classes.Title}>Session 4 <span className={classes.Duration}>(1hr 10 minutes)</span></div>
                    <Drill text={'Warmup'}/>
                    <Drill text={'Passing'}/>
                    <Drill text={'Dribbling'}/>
                    <Drill text={'Shooting'}/>
                </div>
            </div>
        </div>
    );

}

export default Content;
