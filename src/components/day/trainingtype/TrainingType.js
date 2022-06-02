import classes from './TrainingType.module.css';


export const TrainingTypeEnum = {
    InPerson: 'InPerson',
    Zoom: 'Zoom',
    AtHome: 'AtHome'
}


const TrainingType = ({trainingType}) => {
    if (trainingType === TrainingTypeEnum.InPerson) {
        return (
            <div className={classes.Container}>
                <i className="fa-light fa-person" /> In person
            </div>
        )
    } else if (trainingType === TrainingTypeEnum.Zoom) {
        return (
            <div className={classes.Container}>
                <i className="fa-light fa-laptop" /> Zoom
            </div>
        )
    } else {
        return (
            <div className={classes.Container}>
                <i className="fa-light fa-house" /> At home
            </div>
        )
    }
}

export default TrainingType;
