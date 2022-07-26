import classes from './Mobile.module.css';
import ArrowLeft from "../../../assets/ArrowLeftBlack.png";
import ArrowRight from "../../../assets/ArrowRightBlack.png";

const Mobile = ({slide, canNavigateBack, canNavigateForward, navigateBack, navigateForward}) => {
    return (
        <div>
            <div className={classes.Title}>
                {slide.title}
            </div>
            <div className={classes.Content}>
                <div className={canNavigateBack ? classes.ArrowContainer : [classes.ArrowContainer, classes.ArrowContainerHidden].join(' ')}>
                    <img src={ArrowLeft} className={classes.Arrow} onClick={navigateBack}/>
                </div>
                <img src={slide.media} className={classes.PhoneImage}/>
                <div className={canNavigateForward ? classes.ArrowContainer : [classes.ArrowContainer, classes.ArrowContainerHidden].join(' ')}>
                    <img src={ArrowRight} className={classes.Arrow} onClick={navigateForward}/>
                </div>
            </div>
            {slide.subTitle && (
                <div className={classes.Subtitle}>
                    {slide.subTitle}
                </div>
            )}
            {!!slide.footer && (
                <div>
                    {slide.footer}
                </div>
            )}
        </div>
    )
}

export default Mobile;