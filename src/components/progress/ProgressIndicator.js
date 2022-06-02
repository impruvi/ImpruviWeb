import InProgress from '../../assets/InProgress.png';
import Complete from '../../assets/Complete.png';
import NotStarted from '../../assets/NotStarted.png';
import AwaitingFeedback from '../../assets/AwaitingFeedback.png';
import classes from './ProgressIndicator.module.css';


export const ProgressStatus = {
    InProgress: 'InProgress',
    Locked: 'Locked',
    NotStarted: 'NotStarted',
    Completed: 'Completed'
}

const ProgressIndicator = ({status}) => {
    if (status === ProgressStatus.InProgress) {
        return (
            <div className={classes.Container}  style={{color: '#1A7EAB'}}>
                In progress <i className="fa-thin fa-circle-notch"></i>
            </div>

        );
    } else if (status === ProgressStatus.Locked) {
        return (
            <div className={classes.Container}  style={{color: '#092540'}}>
                Locked <i className="fa-thin fa-lock"></i>
            </div>
        );
    } else if (status === ProgressStatus.NotStarted) {
        return (
            <div className={classes.Container}  style={{color: '#8a9aa8'}}>
                Not started <i className="fa-thin fa-circle"></i>
            </div>
        );
    } else {
        return (
            <div className={classes.Container} style={{color: '#69A943'}}>
                Completed <i className="fa-thin fa-circle-check"></i>
            </div>
        );
    }
}

export default ProgressIndicator;
