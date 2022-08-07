import {frequentlyAskedQuestions} from "../../../constants/frequentlyAskedQuestions.constants";
import classes from './FrequentlyAskedQuestions.module.css';

const FrequentlyAskedQuestions = () => {
    return (
        <div>
            <div className={classes.Title}>Frequently asked questions</div>
            {frequentlyAskedQuestions.map(question => (
                <div className={classes.QuestionContainer} key={question.id}>
                    <div className={classes.Question}>{question.question}</div>
                    <div className={classes.Answer}>{question.answer}</div>
                </div>
            ))}
        </div>
    )
}

export default FrequentlyAskedQuestions;