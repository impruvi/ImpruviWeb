import classes from "./Day.module.css";
import {useHistory} from "react-router-dom";
import ProgressIndicator from "../progress/ProgressIndicator";
import TrainingType from "./trainingtype/TrainingType";

const Day = ({route, title, progressStatus, trainingType, isFull, containsFeedback, isAfter}) => {
    const history = useHistory();

    return (
        <div className={isFull ? classes.ContainerFull : classes.Container}>
            <div className={classes.PillContainer}>
            </div>
            <div className={classes.Header}>
                <div className={classes.Title}>
                    {title} <span className={classes.Duration}>(1hr)</span>
                </div>
                {!isFull && <ProgressIndicator status={progressStatus} />}
            </div>
            <div className={classes.Content}>
                <div className={classes.Item}>
                    <div>
                        Warmup <span className={classes.Duration}>(10 minutes)</span>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div>
                        Passing <span className={classes.Duration}>(10 minutes)</span>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div>
                        Dribbling <span className={classes.Duration}>(10 minutes)</span>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div>
                        Shooting <span className={classes.Duration}>(10 minutes)</span>
                    </div>
                </div>
                <div className={classes.Item}>
                    <div>
                        Agility <span className={classes.Duration}>(10 minutes)</span>
                    </div>
                </div>
            </div>
            {!isAfter && (
                <div className={classes.Others}>
                    <div className={classes.Other}>
                        <div>
                            <div className={classes.OtherTitle}>
                                What you need
                            </div>
                            <div className={classes.EquipmentItem}>
                                <i className="fa-light fa-futbol" /> one ball
                            </div>
                            <div className={classes.EquipmentItem}>
                                <i className="fa-light fa-traffic-cone"/> 4 cones
                            </div>
                            <div className={classes.EquipmentItem}>
                                <i className="fa-light fa-ruler" /> 10 yards of space
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {!isFull && (
                <div className={classes.Footer}>
                    <div className={classes.FooterItem} onClick={() => history.push(route)}>View training</div>
                    {containsFeedback && (
                        <div className={classes.FooterItemBold} onClick={() => history.push(route === '/content' ? '/contentafter' : route)}>View feedback</div>
                    )}
                </div>
            )}
        </div>
    );
}

export default Day;
