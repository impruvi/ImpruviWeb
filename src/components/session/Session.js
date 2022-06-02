import classes from './Session.module.css';
import Day from "../day/Day";
import {ProgressStatus} from "../progress/ProgressIndicator";
import {TrainingTypeEnum} from "../day/trainingtype/TrainingType";
import Drill from "../drill/Drill";
import DrillAfter from "../drillafter/DrillAfter";

const Session = ({isAfter}) => {
    return (
        <div className={classes.Days}>
            <div className={classes.DaySticky}>
                <Day isAfter={isAfter} route={'/content'} title={'Session 2'} progressStatus={ProgressStatus.Completed} trainingType={TrainingTypeEnum.InPerson} isFull={true}/>
            </div>
            <div className={classes.Drills}>
                {isAfter && (
                    <>
                        <DrillAfter autoPlay={true} text={'Warmup'}/>
                        <DrillAfter autoPlay={false} text={'Dribbling'}/>
                        <DrillAfter autoPlay={false} text={'Shooting'}/>
                    </>
                )}
                {!isAfter && (
                    <>
                        <Drill text={'Warmup'}/>
                        <Drill text={'Dribbling'}/>
                        <Drill text={'Shooting'}/>
                    </>
                )}
            </div>
        </div>

    )
}

export default Session;
