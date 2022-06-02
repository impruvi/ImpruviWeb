import classes from './Pricing.module.css';
import Header from "../../components/header/Header";

const Pricing = () => {
    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div className={classes.Title}>
                    Pricing
                </div>

                <div className={classes.PricingOption}>
                    <div className={classes.PricingBar} style={{backgroundColor: '#FC6C1E'}}/>
                    <div className={classes.PricingOptionInner}>
                        <div className={classes.PricingIcon}>
                            <i className="fa-light fa-house-laptop" />
                        </div>
                        <div className={classes.PricingTitle}>
                            Virtual plan
                        </div>
                        <div className={classes.PricingDescription}>
                            Contains 10 at home training sessions with feedback per month
                        </div>
                        <div className={classes.PricingCost}>
                            $100 <span>/mo</span>
                        </div>
                        <div className={classes.PricingButton} style={{backgroundColor: '#FC6C1E'}}>
                            Buy now
                        </div>
                    </div>
                </div>
                <div className={classes.PricingOption}>
                    <div className={classes.PricingBar} style={{backgroundColor: '#1F96C4'}} />
                    <div className={classes.PricingOptionInner}>
                        <div className={classes.PricingIcon}>
                            <i className="fa-light fa-people-group" />
                        </div>
                        <div className={classes.PricingTitle}>
                            Hybrid plan
                        </div>
                        <div className={classes.PricingDescription}>
                            Contains 10 at home training sessions with feedback
                            + 4 in person training sessions per month
                        </div>
                        <div className={classes.PricingCost}>
                            $300 <span>/mo</span>
                        </div>
                        <div className={classes.PricingButton}  style={{backgroundColor: '#1F96C4'}}>
                            Buy now
                        </div>
                    </div>
                </div>
                <div className={classes.PricingOption}>
                    <div className={classes.PricingBar}  style={{backgroundColor: '#2E505D'}}/>
                    <div className={classes.PricingOptionInner}>
                        <div className={classes.PricingIcon}>
                            <i className="fa-light fa-user-gear" />
                        </div>
                        <div className={classes.PricingTitle}>
                            Customize your own plan
                        </div>
                        <div className={classes.PricingDescription}>
                            Specify any number of at home or in person training sessions
                        </div>
                        <div className={classes.PricingButton}  style={{backgroundColor: '#2E505D'}}>
                            Get started
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing;
