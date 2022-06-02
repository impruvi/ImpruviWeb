import classes from './Questionnaire.module.css';
import {useHistory} from "react-router-dom";
import Header from "../../components/header/Header";
import Select from "./select/Select";

const Questionnaire = () => {
    const history = useHistory();

    return (
        <div>
            <Header />
            <div className={classes.Container}>
                <div>
                    <div className={classes.Title}>
                        Tell us about yourself
                    </div>
                    <div className={classes.Info}>
                        <i className="fa-light fa-circle-info" />To make the most out of your intro call, give Luke some information
                        so he can start working on your personalized plan
                    </div>
                </div>
                <div className={classes.Question}>
                    <div className={classes.Prompt}>
                        What do you want to get better at?
                    </div>
                    <textarea className={classes.TextArea}/>
                </div>
                <div className={classes.Question}>
                    <div className={classes.Prompt}>
                        What position do you play?
                    </div>
                    <textarea className={classes.TextArea}/>
                </div>
                <div className={classes.Question}>
                    <div className={classes.Prompt}>
                        What is your overarching goal?
                    </div>
                    <textarea className={classes.TextArea}/>
                </div>
                <div className={classes.Question}>
                    <div className={classes.Prompt}>
                        What equipment do you have?
                    </div>
                    <div>
                        <Select options={['Balls', 'Cones', 'Field']}/>
                    </div>
                </div>
                <div className={classes.Question}>
                    <div className={classes.Prompt}>
                        Do you have a partner/group?
                    </div>
                    <div>
                        <Select options={['Individual', 'Group']}/>
                    </div>
                </div>
                <div className={classes.ButtonContainer}>
                    <div className={classes.Button} onClick={() => history.push('/dashboard')}>Next</div>
                </div>
            </div>
        </div>
    )
}

export default Questionnaire;
