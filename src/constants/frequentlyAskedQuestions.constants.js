import classes from "../components/faq/FrequentlyAskedQuestions.module.css";

export const frequentlyAskedQuestions = [
    {
        id: '1',
        question: 'How does it work?',
        answer: (
            <div>
                <div className={classes.AnswerSectionTitle}>On the website</div>
                <div>
                    • Choose your coach and your plan. Your coach will build you a custom,
                    month long training plan based on your needs and availability.
                </div>
                <div className={classes.AnswerSectionTitle}>On the app</div>
                <div>
                    • Watch videos of your coach complete each drill in your custom plan.
                </div>
                <div>
                    • Watch videos of your coach complete each drill in your custom plan.
                </div>
            </div>
        )
    },
    {
        id: '2',
        question: 'What is included in a subscription?',
        answer: (
            <div>
                <div>• a customized training plan built by your chosen coach</div>
                <div>• Weekly training sessions (# varies with plan) with 4-5 personalized drills</div>
                <div>• Expert feedback for each drill you submit</div>
                <div>• More content coming soon!</div>
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
        question: 'Can i change my coach?',
        answer: (
            <div>
                Yes, you can always change you coach! The updated plan will start with the next
                billing cycle.
            </div>
        )
    },
    {
        id: '5',
        question: 'Can i change my subscription?',
        answer: (
            <div>
                Yes, you can upgrade or downgrade your plan at any time. Changes will go into effect
                the next billing cycle
            </div>
        )
    },
    {
        id: '6',
        question: 'How do i cancel my subscription?',
        answer: (
            <div>
                <div>• Click your profile icon in the upper right of the website</div>
                <div>• Click "Subscription"</div>
                <div>• Click "Cancel subscription"</div>
            </div>
        )
    }
]