import classes from '../Blog.module.css';
import {Helmet} from "react-helmet";
import React, {useEffect} from "react";

const DoesJugglingActuallyMakeMeABetterPlayer = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Does juggling actually make me a better soccer player? - Impruvi</title>
                <meta name="description" content="Learn about the benefits that juggling a soccer ball can have for your player development."/>
            </Helmet>

            <div className={classes.Container}>
                <h1>Does juggling actually make me a better soccer player?</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/does-juggling-actually-make-me-a-better-player/primary.jpg'}
                     alt={'Does juggling actually make me a better player. Leverage private soccer lessons to become a better player'}/>

                <div className={classes.Paragraph}>
                    Juggling is a cool thing you can show to your friends, but does it actually make you a better player?
                    After all, you don’t often see players juggling the ball up in the air in a game (unless they’re Ronaldinho).
                    So why is it that virtually every coach you come across will have you doing some sort of juggling as a part of trainings.
                </div>
                <ol className={classes.Paragraph}>
                    There are two primary reasons why I think many coaches introduce players to juggling:
                    <li>
                        <span className={classes.Underline}>Tangible improvements:</span> There are not a tremendous amount of drills in soccer where you can have measurable
                        improvements — something you can point to and say definitively “I am better at this today than I was
                        yesterday”. Take dribbling through cones for example. If you diligently dribble through cone drills every
                        day, you may generally feel that you are getting faster and cleaner, but you can’t really track your
                        progress that clearly. If there’s no way to tell if you’re actually getting better at something then,
                        then it may not feel like you’re improving. And if a player doesn’t feel like they’re improving on
                        something, it’s easier to give up. Coaches don’t want players to give up, so it’s important to give
                        players drills where they can clearly see that their hard work is accomplishing something.
                    </li>
                    <li>
                        <span className={classes.Underline}>It’s something you can easily do on your own:</span>
                        Practicing on your own at home is important to
                        developing as a player. Most of the drills players do at home are drills they’ve learned at
                        team practice. However, if all you do at team practice is scrimmage, then you won’t learn any
                        drills to do on your own. Juggling is a drill that requires only one ball and very little space,
                        so practically every player could practice this on their own.
                    </li>
                </ol>

                <h2>Does it actually help?</h2>
                <div className={classes.Paragraph}>
                    Juggling helps with many things: confidence, coordination, balance, concentration. But the primary
                    one I’m going to talk about in this article is juggling helps you develop a “feel for the ball”.
                    You may find that when you start playing soccer, every touch you take requires a tremendous amount of
                    concentration. You need to stare directly down at the ball and think carefully about what part of your
                    foot your going to use to touch the ball in a specific direction and when you touch it, the ball doesn’t
                    always go where you want.
                </div>
                <div className={classes.Paragraph}>
                    When manipulating the ball requires this much effort it’s virtually impossible
                    to also have to think about other things such as:
                    - Where are the defenders, is there a defender behind you?
                    - Where are you teammates? Is a teammate making a run?
                </div>
                <div className={classes.Paragraph}>
                    When you start learning to juggle, it will be the same way. Every juggle requires total concentration.
                    And each touch won’t go where you want, especially if the ball isn’t dropping straight down onto your foot.
                    However, as you continue to practice, you’ll notice that you begin to develop a sort of unconscious connection
                    between your brain and your feet. Without even concentrating your feet may just know what to do, and your body
                    will know how to react when the ball bounces up in a certain way.
                </div>
                <div className={classes.Paragraph}>
                    This unconscious coordination that you
                    develop will translate directly into an actual game. When the ball bounces to you and you trap it, or
                    when you’re dribbling, it will require less concentration to get the ball to do what you want, your feet
                    will just take over. With less attention paid to how your feet are touching the ball, you now will
                    have a greater ability to focus on other aspects of the game, such as where the defenders and your teammates are.
                </div>
                <h2>Diminishing returns?</h2>
                <div className={classes.Paragraph}>
                    Once you can juggle the ball 100 times or 1000 times, is there really any more benefit you can derive from juggling?
                    There probably isn’t too much more benefit if you continue to just do the same simple juggling drill. However
                    you can <a href={'/'}>add many variations that make the juggling much more challenging,</a> which will again push you to develop
                    a greater “feel for the ball”.
                </div>
            </div>
        </>
    )
}

export default DoesJugglingActuallyMakeMeABetterPlayer;
