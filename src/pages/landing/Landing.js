import classes from "./Landing.module.css";
import HowItWorksSlides from "../../components/how-it-works-slides/HowItWorksSlides";
import Intro from "./intro/Intro";
import NotableCoaches from "./notable-coaches/NotableCoaches";
import WhyImpruvi from "./why-impruvi/WhyImpruvi";
import ForCoaches from "./for-coaches/ForCoaches";
import FrequentlyAskedQuestions from "../../components/faq/FrequentlyAskedQuestions";
import Footer from "../../components/footer/Footer";

const Landing = () => {
    return (
        <div className={classes.Container}>
            <Intro />
            <HowItWorksSlides />
            <NotableCoaches />
            <WhyImpruvi />
            <ForCoaches />
            <div className={classes.FrequentlyAskedQuestionsWrapper}>
                <FrequentlyAskedQuestions />
            </div>
            <Footer />
        </div>
    )
}

export default Landing;