import classes from "./ContactOptions.module.css";
import PhoneIcon from "../../assets/PhoneRed.png";
import MailIcon from "../../assets/MailRed.png";

const ContactOptions = () => {
    return (
        <div className={classes.Options}>
            <div className={classes.Option}>
                <img src={PhoneIcon}/>
                <div>
                    720-233-1012
                </div>
            </div>
            <div className={classes.Option}>
                <img src={MailIcon}/>
                <div>
                    ryan@impruviapp.com
                </div>
            </div>
        </div>
    )
}

export default ContactOptions;