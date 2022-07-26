import classes from './QuestionExpand.module.css';
import Expand from "react-expand-animated";
import AngleDownIcon from '../../../assets/AngleDown.png';

const QuestionExpand = ({question, answer, isExpanded, toggleExpansion}) => {

    return (
        <div className={classes.Container}>
            <div className={classes.Question} onClick={toggleExpansion}>
                <div>{question}</div>
                <img src={AngleDownIcon}/>
            </div>
            <Expand open={isExpanded} duration={200}>
                <div className={classes.Answer}>
                    {answer}
                </div>
            </Expand>
        </div>
    )
}

export default QuestionExpand;