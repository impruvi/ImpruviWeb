import classes from './FrequentlyAskedQuestions.module.css';
import {useState} from "react";
import QuestionExpand from "./question-expand/QuestionExpand";
import {frequentlyAskedQuestions} from "../../constants/frequentlyAskedQuestions.constants";


const FrequentlyAskedQuestions = () => {

    const [expandedQuestionId, setExpandedQuestionId] = useState('');

    const toggle = (questionId) => {
        if (expandedQuestionId === questionId) {
            setExpandedQuestionId(null);
        } else {
            setExpandedQuestionId(questionId)
        }
    }

    return (
        <div className={classes.Container}>
            <div className={classes.ContainerInner}>
                <div className={classes.Title}>Frequently Asked Questions</div>
                {frequentlyAskedQuestions.map(question => (
                    <QuestionExpand question={question.question}
                                    key={question.id}
                                    answer={question.answer}
                                    isExpanded={question.id === expandedQuestionId}
                                    toggleExpansion={() => toggle(question.id)}/>
                ))}
            </div>
        </div>
    )
}

export default FrequentlyAskedQuestions;