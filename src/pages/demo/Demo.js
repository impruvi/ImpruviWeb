import Header from "../../components/header/Header";
import classes from './Demo.module.css';

const Demo = () => {

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Video}>
                    <img src={'https://www.iconpacks.net/icons/1/free-video-icon-818-thumb.png'} />
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

export default Demo;
