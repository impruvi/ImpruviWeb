import classes from "../components/faq/FrequentlyAskedQuestions.module.css";

export const frequentlyAskedQuestions = [
    {
        id: '1',
        question: 'How does it work?',
        answer: (
            <div>
                <div className={classes.AnswerSectionTitle}>On the website</div>
                <ul className={classes.List}>
                    <li>
                        Choose your coach and your plan. Your coach will build you a custom,
                        month long training plan based on your needs and availability.
                    </li>
                </ul>
                <div className={classes.AnswerSectionTitle}>On the app</div>
                <ul className={classes.List}>
                    <li>
                        Watch videos of your coach complete each drill in your custom plan.
                    </li>
                    <li>
                        Watch videos of your coach complete each drill in your custom plan.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: '2',
        question: 'What is included in a subscription?',
        answer: (
            <div>
                <ul className={classes.List}>
                    <li>
                        a customized training plan built by your chosen coach
                    </li>
                    <li>
                        Weekly training sessions (# varies with plan) with 4-5 personalized drills
                    </li>
                    <li>
                        Expert feedback for each drill you submit
                    </li>
                    <li>
                        More content coming soon!
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: '3',
        question: 'How does billing work?',
        answer: (
            <div>
                Once you pay for your initial plan, you will be billed every month until you cancel
                your plan. You can cancel at any time to end the recurring billing cycle.
            </div>
        )
    },
    {
        id: '4',
        question: 'Can I change my coach?',
        answer: (
            <div>
                Yes, you can always change you coach! The updated plan will start with the next
                billing cycle.
            </div>
        )
    },
    {
        id: '5',
        question: 'Can I change my subscription?',
        answer: (
            <div>
                Yes, you can upgrade or downgrade your plan at any time. Changes will go into effect
                the next billing cycle
            </div>
        )
    },
    {
        id: '6',
        question: 'How do I cancel my subscription?',
        answer: (
            <div>
                <ul className={classes.List}>
                    <li>
                        Click your profile icon in the upper right of the website
                    </li>
                    <li>
                        Click "Subscription"
                    </li>
                    <li>
                        Click "Cancel subscription"
                    </li>
                </ul>
            </div>
        )
    }
]