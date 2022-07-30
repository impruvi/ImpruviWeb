import classes from './HowItWorksSlides.module.css';
import IntroImage from '../../assets/how-it-works/Impruvi.png';
import FindCoachImage from '../../assets/how-it-works/FindCoach.png';
import DemoImage from '../../assets/how-it-works/Demos.png';
import FeedbackImage from '../../assets/how-it-works/Feedback.png';
import HowItWorksImage from '../../assets/HowItWorks.png';
import {useState} from "react";
import Desktop from "./desktop/Desktop";
import Mobile from "./mobile/Mobile";
import AppStoreActionButton from "../app-store-action-button/AppStoreActionButton";

const slides = [
    {
        id: 1,
        title: 'How it works',
        titleLeft: 'How',
        titleRight: 'Works',
        subTitle: '',
        footer: (
            <div className={classes.AppStoreActionButtonWrapper}>
                <AppStoreActionButton />
            </div>
        ),
        media: IntroImage
    },
    {
        id: 2,
        title: 'Choose your coach',
        titleLeft: 'Choose',
        titleRight: 'your coach',
        subTitle: 'Choose among our professional and Division 1 players! Your expert coach will develop a custom at-home training plan based on your needs and availability',
        media: FindCoachImage
    },
    {
        id: 3,
        title: 'Train like a pro',
        titleLeft: 'Train like a pro',
        titleRight: 'with the pros',
        subTitle: 'Download the app and watch videos of your coach perform the drills in your custom plan. Practice, then submit a video for your coach to review.',
        media: DemoImage
    },
    {
        id: 4,
        title: 'Improve your game',
        titleLeft: 'Improve',
        titleRight: 'your game',
        subTitle: 'Your coach will send you video feedback on what you did well and areas you can improve. Explore your drill bank and track progress.',
        media: FeedbackImage
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
                <>
                    <div className={[getContainerClassName(slide.id), classes.DesktopWrapper].join(' ')}>
                        <Desktop slide={slide}
                                 canNavigateBack={slide.id !== slides[0].id}
                                 canNavigateForward={slide.id !== slides[slides.length - 1].id}
                                 navigateBack={() => changeSlide(activeSlideId - 1)}
                                 navigateForward={() => changeSlide(activeSlideId + 1)}/>
                    </div>
                    <div className={[getContainerClassName(slide.id), classes.MobileWrapper].join(' ')}>
                        <Mobile slide={slide}
                                canNavigateBack={slide.id !== slides[0].id}
                                canNavigateForward={slide.id !== slides[slides.length - 1].id}
                                navigateBack={() => changeSlide(activeSlideId - 1)}
                                navigateForward={() => changeSlide(activeSlideId + 1)}/>
                    </div>
                </>
            ))}

        </div>
    )
}

export default HowItWorksSlides;