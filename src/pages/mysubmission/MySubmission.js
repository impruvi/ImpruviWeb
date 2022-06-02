import Header from "../../components/header/Header";
import classes from "../demo/Demo.module.css";

const  MySubmission = () => {

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Video}>
                    <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Octicons-cloud-upload.svg/1200px-Octicons-cloud-upload.svg.png'} />
                </div>
                <div className={classes.Content}>
                    <div className={classes.ContentTitle}>
                        Passing
                    </div>
                    <div className={classes.ContentItem}>
                        Demo
                    </div>
                    <div className={classes.ContentItem}>
                        Submit video
                    </div>
                    <div className={classes.ContentItem}>
                        Feedback
                    </div>
                    <div className={classes.ContentTitle}>
                        Dribbling
                    </div>
                    <div className={classes.ContentItem}>
                        Demo
                    </div>
                    <div className={classes.ContentItem}>
                        Submit video
                    </div>
                    <div className={classes.ContentItem}>
                        Feedback
                    </div>
                </div>
            </div>
        </div>
    );
}

export default  MySubmission;
