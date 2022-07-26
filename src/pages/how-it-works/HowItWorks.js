import Footer from "../../components/footer/Footer";
import HowItWorksSlides from "../../components/how-it-works-slides/HowItWorksSlides";
import {useEffect} from "react";

const HowItWorks = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div>
            <HowItWorksSlides />
            <Footer />
        </div>
    )
}

export default HowItWorks;
