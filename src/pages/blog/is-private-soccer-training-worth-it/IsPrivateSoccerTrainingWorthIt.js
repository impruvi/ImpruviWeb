import {Helmet} from "react-helmet";
import React from "react";
import classes from "../Blog.module.css";
import SubmitButton from "../../../components/submit-button/SubmitButton";
import {useHistory} from "react-router-dom";

const IsPrivateSoccerTrainingWorthIt = () => {

    const history = useHistory();

    return (
        <>
            <Helmet>
                <title>Is private soccer training worth it - Impruvi</title>
                <meta name="description" content="Learn how private soccer training can benefit you as a player."/>
            </Helmet>
            <div className={classes.Container}>
                <h1>Is private soccer training worth it?</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/is-private-soccer-training-worth-it/primary.jpg'}
                     alt={'Is private soccer training worth it?'}/>

                <div className={classes.Paragraph}>
                    One highly debated question in the youth soccer world is whether private training is actually
                    worth the costs involved. With the often expensive prices involved, the swath of coaches you
                    can choose from, and no guarantee of improvement, the private training experience can be
                    overwhelming for parents and players alike. In this article, we will explore the tradeoffs of
                    private training and whether or not these tradeoffs make private training worth it.
                </div>

                <h2>What is it?</h2>
                <div className={classes.Paragraph}>
                    Private soccer training is when a player or parent hires a specialty coach to teach them
                    outside of their team training. Often, these trainings are one-on-one or small group sessions
                    (they usually don’t exceed 8 players per 1 coach). A player may choose to start private training
                    for many different reasons. On one end of the spectrum, parents may view private training as a
                    way to get their kids out of the house to get some exercise. On the other end of the spectrum,
                    some parents or players view them as a necessary condition for getting to the next level.
                </div>

                <div className={classes.Paragraph}>
                    While both ends of these spectrums are acceptable truths for some players, this article
                    will focus more on the player or parents using private training as a tool for improvement,
                    and whether or not private training is worth it. The simple pros and cons list below will
                    help us understand more of the idiosyncrasies involved with private training and its value
                    to the player who wants to improve.
                </div>

                <h2>Pros:</h2>
                <div className={classes.Paragraph}>
                    Extra training is required for growth - Just like any skill or hobby, extra practice is required
                    for growth. The same is true for soccer. At its core, working with a private coach will allow a
                    player to simply get more touches, which will translate to improvement (varying, depending on other factors).
                </div>
                <div className={classes.Paragraph}>
                    Personalized - Private soccer training is usually customized for the individual player. Your coach
                    will usually make an effort to understand what areas of your game are lacking, and will dedicate
                    training time to improving those areas.
                </div>
                <div className={classes.Paragraph}>
                    Mentorship - Youth soccer players tend to look up to their club coaches, and the relationship
                    between a private coach and a player is no different. Coaches could be a great resource for mentoring,
                    guidance, and navigation for players.
                </div>
                <div className={classes.Paragraph}>
                    Achieve your goals - While working with a private coach is certainly no guarantee of achieving your
                    sporting goals, more often than not, it can help. Growing up as a child, my goal was to play for a
                    Division 1 soccer team. Working with my private coach directly translated into my growth as a young
                    player, and the mentorship and guidance they gave me during the recruiting process was what got me
                    into a Division 1 program. Many of my teammates had similar experiences.
                </div>

                <h2>Cons:</h2>
                <div className={classes.Paragraph}>
                    Price - It is no doubt that private training can be expensive. In some large Metropolitan areas,
                    such as Seattle, these prices can be upwards of $100/hour
                </div>
                <div className={classes.Paragraph}>
                    Convenience - Many parents have insanely busy schedules. Adding extra private training on top of these
                    schedules can be overwhelming. Nobody wants to sit through hours of traffic to get in a good training session
                </div>
                <div className={classes.Paragraph}>
                    Unsatisfactory coaching - While many private coaches are fantastic, others are not. It is unlikely,
                    but you may hire a private coach that dedicates little or no time to actually improving the players
                    game, and is just there to make a quick buck.
                </div>

                <h2>Conclusion</h2>
                <div className={classes.Paragraph}>
                    Just like any investment, private training can be great for a player's improvement or have no effect
                    at all. Here at imprüvi, we seek to minimize the negative factors of private training while
                    enhancing the positive ones. Directly on our app, work with expert coaches who have played and
                    coached at every level in the game. Save on convenience as you train from anywhere, completing
                    the drills in your custom plan by recording them and sending them back to your coach for review.
                    See real improvement in your game by receiving video feedback from your coach, analyzing and
                    instructing you on each drill you send them.
                </div>
                <div className={classes.ActionButtonContainer}>
                    <SubmitButton className={classes.ActionButton} onClick={() => history.push('/')}>
                        Start training today
                    </SubmitButton>
                </div>
            </div>
        </>
    )
}

export default IsPrivateSoccerTrainingWorthIt;
