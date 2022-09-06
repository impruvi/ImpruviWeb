import classes from "./Landing.module.css";
import HowItWorksSlides from "../../components/how-it-works-slides/HowItWorksSlides";
import Intro from "./intro/Intro";
import NotableCoaches from "./notable-coaches/NotableCoaches";
import WhyImpruvi from "./why-impruvi/WhyImpruvi";
import ForCoaches from "./for-coaches/ForCoaches";
import FrequentlyAskedQuestions from "../../components/faq/FrequentlyAskedQuestions";
import Footer from "../../components/footer/Footer";
import {useRef} from "react";

const Landing = () => {

    const howItWorksRef = useRef();

    const scrollToHowItWorks = () => {
        if (!!howItWorksRef) {
            howItWorksRef.current.scrollIntoView({behavior: 'smooth'})
        }
    }

    return (
        <div className={classes.Container}>
            <Intro scrollToHowItWorks={scrollToHowItWorks}/>
            <div ref={howItWorksRef} className={classes.HowItWorksWrapper}>
                <HowItWorksSlides />
            </div>
            <NotableCoaches />
            <WhyImpruvi />
            <ForCoaches />
            <div className={classes.FrequentlyAskedQuestionsWrapper}>
                <FrequentlyAskedQuestions />
            </div>
            <div className={classes.PaddedContainer}>
                <Footer />
            </div>
        </div>
    )
}

export default Landing;
