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
                        Choose your coach and your plan of 4 sessions, 8 sessions, or 12 sessions per month. Your coach will build you a custom,
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
                        A customized training plan built by your chosen coach.
                    </li>
                    <li>
                        Ability to submit videos and receive feedback for every drill
                    </li>
                    <li>
                        Progress tracking and access to drill bank
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: '3',
        question: 'Can I try it for free?',
        answer: (
            <div>
                <ul className={classes.List}>
                    <li>
                        Yes! Download the app to start your free trial.
                    </li>
                    <li>
                        Once your free trial is over, return to the website to purchase a training plan.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: '4',
        question: 'How long do I have to wait to begin training?',
        answer: (
            <div>
                <ul className={classes.List}>
                    <li>
                        You don’t have to wait at all! Start training as soon as you download the app.
                    </li>
                    <li>
                        Your expert coach has uploaded an intro session into your profile and will build you a custom plan following the completion of the intro session.
                    </li>
                </ul>
            </div>
        )
    },
    {
        id: '5',
        question: 'How does billing work?',
        answer: (
            <div>
                Once you pay for your initial plan, you will be billed every month until you cancel
                your plan. You can cancel at any time to end the recurring billing cycle.
            </div>
        )
    },
    {
        id: '6',
        question: 'Can I change my coach?',
        answer: (
            <div>
                Yes, you can always change your coach! The updated plan will start with the next
                billing cycle.
            </div>
        )
    },
    {
        id: '7',
        question: 'Can I change my subscription?',
        answer: (
            <div>
                Yes, you can upgrade or downgrade your plan at any time. Changes will go into effect
                the next billing cycle.
            </div>
        )
    },
    {
        id: '8',
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
