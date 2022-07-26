import classes from './AuthPopup.module.css';
import XMarkIcon from "../../assets/XMarkBlack.png";
import Popup from "../popup/Popup";
import ImpruviIcon from "../../assets/ImpruviIconCircle.png";

const AuthPopup = ({close, title, subtitle, children}) => {
    return (
        <Popup onClickOutside={close}>
            <div className={classes.Container}>
                <div className={classes.CloseIcon} onClick={close}>
                    <img src={XMarkIcon} />
                </div>
                <div className={classes.IconContainer}>
                    <img src={ImpruviIcon} className={classes.Icon}/>
                </div>
                <div className={classes.Title}>{title}</div>
                <div className={classes.Subtitle}>
                    {subtitle}
                </div>
                {children}
            </div>
        </Popup>
    )
}

export default AuthPopup;