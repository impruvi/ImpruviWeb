import classes from './HowItWorks.module.css';
import Header from "../../components/header/Header";
import Navigation from "../../components/navigation/Navigation";

const HowItWorks = () => {
    return (
        <div>
            <Header />
            <div className={classes.Outer}>
                <Navigation />
                <div className={classes.Container}>
                    <div className={classes.Section}>
                        <div className={classes.SectionLeft}>
                            <div className={classes.Title}>Pick your coach</div>
                            <div>
                                Choose from some of the best coaches in the country
                            </div>
                        </div>
                        <img src={'https://i.cbc.ca/1.6450034.1652311170!/cumulusImage/httpImage/vivek-bhagria.jpg'}/>
                    </div>
                    <div className={classes.Section}>
                        <div className={classes.SectionLeft}>
                            <div className={classes.Title}>Receive a training plan</div>
                            <div>
                                Work with your coach to design a curriculum personalized
                                to your needs
                            </div>
                        </div>
                        <img src={'https://i.cbc.ca/1.6450034.1652311170!/cumulusImage/httpImage/vivek-bhagria.jpg'}/>
                    </div>
                    <div className={classes.Section}>
                        <div className={classes.SectionLeft}>
                            <div className={classes.Title}>Start training</div>
                            <div>
                                Watch your coach demo your personalized training plan
                            </div>
                        </div>
                        <img src={'https://i.cbc.ca/1.6450034.1652311170!/cumulusImage/httpImage/vivek-bhagria.jpg'}/>
                    </div>
                    <div className={classes.Section}>
                        <div className={classes.SectionLeft}>
                            <div className={classes.Title}>Receive Feedback</div>
                            <div>
                                Submit videos of you doing the drills and receive feedback from your coach
                            </div>
                        </div>
                        <img src={'https://i.cbc.ca/1.6450034.1652311170!/cumulusImage/httpImage/vivek-bhagria.jpg'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks;
