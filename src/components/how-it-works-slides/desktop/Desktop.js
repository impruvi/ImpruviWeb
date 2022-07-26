import classes from './Desktop.module.css';
import ArrowLeft from "../../../assets/ArrowLeftBlack.png";
import ArrowRight from "../../../assets/ArrowRightBlack.png";

const Desktop = ({slide, canNavigateBack, canNavigateForward, navigateBack, navigateForward}) => {
    return (
        <>
            <div className={classes.Left}>
                {slide.titleLeft}
            </div>
            <img src={slide.media} className={classes.PhoneImage}/>
            <div className={classes.Right}>
                <div>{slide.titleRight}</div>
                {slide.subTitle && (
                    <div className={classes.Subtitle}>
                        {slide.subTitle}
                    </div>
                )}
                <div className={classes.Arrows}>
                    {canNavigateBack && (
                        <div className={classes.ArrowContainer}>
                            <img src={ArrowLeft} className={classes.Arrow} onClick={navigateBack}/>
                        </div>
                    )}
                    {canNavigateForward && (
                        <div className={classes.ArrowContainer}>
                            <img src={ArrowRight} className={classes.Arrow} onClick={navigateForward}/>
                        </div>
                    )}
                </div>
            </div>
            {!!slide.footer && (
                <div className={classes.Footer}>
                    {slide.footer}
                </div>
            )}
        </>
    )
}

export default Desktop;