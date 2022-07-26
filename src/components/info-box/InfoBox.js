import classes from './InfoBox.module.css';

const InfoBox = ({icon, children}) => {
    return (
        <div className={classes.Container}>
            <img src={icon} />
            <div className={classes.Content}>
                {children}
            </div>
        </div>
    )
}

export default InfoBox;