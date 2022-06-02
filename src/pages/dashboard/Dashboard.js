import Header from "../../components/header/Header";
import classes from "./Dashboard.module.css";
import {useHistory} from "react-router-dom";
import Day from "../../components/day/Day";
import InfoButton from "../../components/infobutton/InfoButton";
import {ProgressStatus} from "../../components/progress/ProgressIndicator";
import {TrainingTypeEnum} from "../../components/day/trainingtype/TrainingType";
import useVisited from "../../hooks/useVisited";
import Drill from "../../components/drill/Drill";
import {useEffect, useState} from "react";
import Session from "../../components/session/Session";

const Tabs = {
    NextSession: 'NextSession',
    PastSessions: 'PastSessions',
    ThisWeek: 'ThisWeek'
}

const Dashboard = () => {

    const {hasVisited, setHasVisited} = useVisited(false);

    const [selectedTab, setSelectedTab] = useState(Tabs.NextSession);

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                {!hasVisited && (
                    <div className={classes.Popup}>
                        <div className={classes.PopupTitle}>Welcome to your training plan! 👋</div>
                        <div className={classes.PopupText}>
                            <div>
                                Your dashboard has been pre-populated with a tentative plan based on your questionnaire
                                answers.
                            </div>
                            <div>
                                Luke will reach out to you to schedule an intro call within the next 2 days.
                            </div>
                            <div>
                                He will then tweak this plan to be personalized for you. After each training session he
                                will again tweak the plan to ensure it is always optimized for your needs
                            </div>
                        </div>
                        <div className={classes.Button} onClick={() => setHasVisited(true)}>
                            Start training
                        </div>
                    </div>
                )}

                <div className={classes.List}>
                    <div className={classes.Header}>
                        <div className={classes.Bar}>
                            <div className={classes.BarTitle}>
                                Your training plan
                            </div>
                            {/*<InfoButton text={'Change plan'} route={'/changeplan'} />*/}
                            <div className={classes.Pill} onClick={() => setHasVisited(false)}>
                                <div className={classes.Icon}>
                                    <i className="fa-light fa-circle-info" />

                                    {/*<i className="fa-light fa-circle-exclamation" />*/}
                                </div>
                                Pending meeting with coach
                            </div>
                            <div className={classes.Coach}>
                                <img src={'https://bloximages.chicago2.vip.townnews.com/tucson.com/content/tncms/assets/v3/editorial/e/64/e64c6a04-c183-51f4-ab33-b1a2772be0d2/5d685ba313695.image.jpg'} />
                                <div>
                                    Your coach: Luke
                                    <InfoButton text={'Contact luke'} route={'/changeplan'} />
                                </div>
                            </div>
                            {/*<div className={classes.Warning}>*/}
                            {/*    <i className="fa-light fa-triangle-exclamation" /> This is a default plan based on the input*/}
                            {/*    you have given us so you can get started right away! Luke will reach out to you to schedule an intro call*/}
                            {/*    and intro session. After that session he will assess what the right plan is for you.*/}
                            {/*</div>*/}
                        </div>

                        <div className={classes.Options}>
                            <div className={selectedTab === Tabs.NextSession ? [classes.Option, classes.OptionSelected].join(' ') : classes.Option}
                                 onClick={() => setSelectedTab(Tabs.NextSession)}>
                                Next session
                            </div>
                            <div className={selectedTab === Tabs.PastSessions ? [classes.Option, classes.OptionSelected].join(' ') : classes.Option}
                                 onClick={() => setSelectedTab(Tabs.PastSessions)}>
                                Past sessions (<span className={classes.Notification}>1</span> unviewed feedback)
                            </div>
                            <div className={selectedTab === Tabs.ThisWeek ? [classes.Option, classes.OptionSelected].join(' ') : classes.Option}
                                 onClick={() => setSelectedTab(Tabs.ThisWeek)}>
                                This week
                            </div>
                            {/*<div className={selectedTab === Tabs.ThisMonth ? [classes.Option, classes.OptionSelected].join(' ') : classes.Option}*/}
                            {/*     onClick={() => setSelectedTab(Tabs.ThisMonth)}>*/}
                            {/*    This month*/}
                            {/*</div>*/}
                        </div>
                    </div>

                    {selectedTab === Tabs.NextSession && (
                        <Session />
                    )}
                    {selectedTab === Tabs.PastSessions && (
                        <Session isAfter={true}/>

                        // <div>
                        //     <div className={classes.Title}>Week 1</div>
                        //     <div className={classes.Days}>
                        //         <Day route={'/content'} title={'Session 1'} progressStatus={ProgressStatus.Completed} trainingType={TrainingTypeEnum.InPerson} containsFeedback={true}/>
                        //         <Day route={'/content'} title={'Session 2'} progressStatus={ProgressStatus.InProgress} trainingType={TrainingTypeEnum.AtHome}/>
                        //         <Day route={'/content'} title={'Session 3'} progressStatus={ProgressStatus.NotStarted} trainingType={TrainingTypeEnum.AtHome}/>
                        //     </div>
                        // </div>
                    )}

                    {selectedTab === Tabs.ThisWeek && (
                        <>
                            <div>
                                <div className={classes.Title}>Week 1</div>
                                <div className={classes.Days}>
                                    <Day route={'/content'} title={'Session 1'} progressStatus={ProgressStatus.Completed} trainingType={TrainingTypeEnum.InPerson} containsFeedback={true}/>
                                    <Day route={'/content'} title={'Session 2'} progressStatus={ProgressStatus.InProgress} trainingType={TrainingTypeEnum.AtHome}/>
                                    <Day route={'/content'} title={'Session 3'} progressStatus={ProgressStatus.NotStarted} trainingType={TrainingTypeEnum.AtHome}/>
                                </div>
                                <div className={classes.Days}>
                                <Day route={'/contentlocked'} title={'Session 4'} progressStatus={ProgressStatus.Locked} trainingType={TrainingTypeEnum.AtHome}/>
                                    <Day route={'/contentlocked'} title={'Session 5'} progressStatus={ProgressStatus.Locked} trainingType={TrainingTypeEnum.AtHome}/>
                                    <Day route={'/contentlocked'} title={'Session 6'} progressStatus={ProgressStatus.Locked} trainingType={TrainingTypeEnum.AtHome}/>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );

}

export default Dashboard;
