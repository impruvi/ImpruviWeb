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
                        month long training plan based on your goals and needs.
                    </li>
                </ul>
                <div className={classes.AnswerSectionTitle}>On the app</div>
                <ul className={classes.List}>
                    <li>
                        Watch videos of your coach complete each drill in your custom plan.
                    </li>
                    <li>
                        Send videos to your coach of you completing each drill. You can do this from your garage, backyard, or local park! Anywhere and anytime!
                    </li>
                    <li>
                        Receive video feedback for each drill you submit
                    </li>
                    <li>
                        New  plans every month!
                    </li>
                    <li>
                        More content coming soon!
                    </li>
                </ul>
                <div>Check the <a href={'/how-it-works'} className={classes.Link}>How it works</a> page for more details.</div>
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
                        A customized training plan built by your chosen coach
                    </li>
                    <li>
                        Weekly training sessions varying between 4-5 drills based on your plan
                    </li>
                    <li>
                        Feedback on each drill you submit
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
                the next billing cycle.
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
                        Click on your profile icon on the upper right corner of the webpage
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