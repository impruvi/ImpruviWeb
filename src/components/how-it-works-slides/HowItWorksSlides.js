import classes from './HowItWorksSlides.module.css';
import HowItWorksImage from '../../assets/HowItWorks.png';
import ArrowRight from '../../assets/ArrowRightBlack.png'
import ArrowLeft from '../../assets/ArrowLeftBlack.png'
import {useState} from "react";

const slides = [
    {
        id: 1,
        titleLeft: 'How',
        titleRight: 'Works',
        subTitle: null,
        media: HowItWorksImage
    },
    {
        id: 2,
        titleLeft: 'Choose',
        titleRight: 'your coach',
        subTitle: 'Choose among our professional and Division 1 players! Your expert coach will develop a custom at-home training plan based on your needs and availability',
        media: HowItWorksImage
    },
    {
        id: 3,
        titleLeft: 'Train like a pro',
        titleRight: 'with the pros',
        subTitle: 'Download the app and watch videos of your coach perform the drills in your custom plan. Practice, then submit a video for your coach to review.',
        media: HowItWorksImage
    },
    {
        id: 4,
        titleLeft: 'Improve',
        titleRight: 'your game',
        subTitle: 'Your coach will send you video feedback on what you did well and areas you can improve. Explore your drill bank and track progress.',
        media: HowItWorksImage
    }
]

const HowItWorksSlides = () => {

    const [activeSlideId, setActiveSlideId] = useState(1);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const changeSlide = (slideId) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveSlideId(slideId);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 300);
    }

    const getContainerClassName = (slideId) => {
        if (slideId !== activeSlideId) {
            return classes.HiddenSlide;
        }

        if (isTransitioning) {
            return classes.TransitioningSlide;
        } else {
            return classes.ActiveSlide;
        }
    }

    return (
        <div className={classes.Container}>
            {slides.map(slide => (
                <div className={getContainerClassName(slide.id)}>
                    <div className={classes.Left}>
                        {slide.titleLeft}
                    </div>
                    <img src={slide.media} className={classes.PhoneImage}/>
                    <div className={classes.Right}>
                        <div>{slide.titleRight}</div>
                        <div className={classes.Arrows}>
                            {slide.id !== slides[0].id && (
                                <div className={classes.ArrowContainer}>
                                    <img src={ArrowLeft} className={classes.Arrow} onClick={() => changeSlide(activeSlideId - 1)}/>
                                </div>
                            )}
                            {slide.id !== slides[slides.length - 1].id && (
                                <div className={classes.ArrowContainer}>
                                    <img src={ArrowRight} className={classes.Arrow} onClick={() => changeSlide(activeSlideId + 1)}/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            ))}

        </div>
    )
}

export default HowItWorksSlides;