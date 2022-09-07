import {Helmet} from "react-helmet";
import classes from "../Blog.module.css";
import React, {useEffect} from "react";

const HowToDevelopAMoreConsistentShot = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>How to develop a more consistent shot - Impruvi</title>
                <meta name="description" content="Learn how to develop the proper shooting technique in soccer."/>
            </Helmet>

            <div className={classes.Container}>
                <h1>How to develop a more consistent shot</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/how-to-develop-a-more-consistent-shot/primary.jpeg'}
                     alt={'How to develop a more consistent shot in soccer'}/>
                <div className={classes.Paragraph}>
                    Arguably one of the most frustrating feelings in soccer is when you line up to strike the ball with
                    your laces — but when you hit the ball, rather than going directly toward the goal with a slight backspin,
                    it slices wide of the goal with a side spin. But why does this happen?
                </div>
                <ol className={classes.Paragraph}>
                    Striking a ball with your laces is extremely difficult. You need to get several things to come together
                    in tandem in order for it to work.

                    <li>You need to strike directly through the middle of the ball.</li>
                    <li>Your plant foot must be the proper distance from the ball in order to stay balanced as you strike through.</li>
                    <li>Your upper body must be upright and slightly over the ball, not leaning too far forward or too far back.</li>
                </ol>
                <div className={classes.Paragraph}>
                    If any one of these things is off, the ball can slice. Now as if this didn’t seem hard enough, try it with a moving ball and a defender chasing you. So how can anyone ever do this?
                </div>
                <h2>Start simple</h2>
                <div className={classes.Paragraph}>
                    When trying to fix your technique, start with a simple drill that focuses on just a few of the variables.
                    A good drill for this is setting the ball about 10 yards away from a goal or a wall — take a few
                    steps back, then jog forward and try to strike the ball and hit the middle of the goal, halfway up the net.
                    Focus on hitting the ball with a slight backspin. As you do this, try approaching the ball at different
                    angles. For example try taking a few steps directly straight backward and then running forward and
                    striking, try from 45 degrees, 90 degrees. In a game, you have such little time, you often won’t be
                    able to approach the ball from the exact angle you’d like to, you should be prepared nonetheless to
                    be able to strike it properly.
                </div>
                <div className={classes.Paragraph}>
                    As you start to get the hang of striking a still ball, try the same drill but pushing the ball forward
                    so it’s moving before you hit it. Again try hitting it from different angles.
                </div>
                <h2>Work with a partner</h2>
                <div className={classes.Paragraph}>
                    A great drill if you have a partner is to stand about 30 yards away from one another. Each person stands
                    in front of a gate about 5 yards wide. Try to strike the ball back and forth to each other through
                    the gate. Focus on keeping the ball below waste height.
                </div>
                <div className={classes.Paragraph}>
                    The temptation here, especially when you’re
                    just getting going is to strike the ball very slowly since chasing a mishit ball is no fun, but
                    really focus on striking the ball with pace — there’s nothing that will prepare you better for a
                    game like kicking the ball the way you would in a game.
                </div>
                <h2>Simulate the game</h2>
                <div className={classes.Paragraph}>
                    It can be difficult to simulate exactly the pressure you’ll have on you during a game, but there are
                    a few things you can do to help. When you’re striking the ball back and forth with your partner
                    take as little time as possible between your touch and your strike.
                </div>
                <div className={classes.Paragraph}>
                    Often times, especially with
                    younger players, you’ll see them receive the ball and want to time to get their body set before
                    shooting or playing a long pass. By the time they’re ready to kick the ball, the chance is already gone.
                    As you’re trapping and playing the ball, think to your self: touch, step, strike. Trap the ball,
                    take one step, then strike the ball. Watch 4:21 of the video below to see a great example of this in action.
                    The player receives the ball with very little space, and is still able to get a clean strike of the ball away.
                </div>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/QTI9qM81U0o?start=261"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>
                <h2>Practice, practice, practice</h2>
                <div className={classes.Paragraph}>
                    Doing the right drills and thinking about the right things as you’re doing them is important, but they
                    mean nothing if you don’t consistently go out and practice. There is no silver bullet when it comes to
                    striking a ball cleanly, you need to practice it many times.
                </div>
                <h2>Have a coach take a look</h2>
                <div className={classes.Paragraph}>
                    Practicing these drills over and over will make you better at striking the ball in whatever way you are
                    practicing it, but if you’re practicing the wrong technique sometimes you can build bad habits.
                    If you practice toe poking the ball every time, over time you will become good at toe poking but
                    this is not what you want in the long run.
                </div>
                <div className={classes.Paragraph}>
                    Have a coach take a look at your technique as you strike
                    the ball so they can catch whether you’re building the technique in the correct way. Ask your coach
                    after your next practice to have a look at the way you strike the ball. One other alternative in today’s
                    technological age is to <a href={'/'}>take a video of yourself striking the ball and send it to an expert to review.</a>
                    Often times this is just as sufficient. Send a video to the coach every week to ensure you’re not
                    falling back into bad habits at any point.
                </div>
            </div>
        </>
    )
}

export default HowToDevelopAMoreConsistentShot;
