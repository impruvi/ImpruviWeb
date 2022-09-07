import {Helmet} from "react-helmet";
import React, {useEffect} from "react";
import classes from '../Blog.module.css';

const WhyAmINotPlayingOnMySoccerTeam = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>Why am I not playing on my soccer team? - Impruvi</title>
                <meta name="description" content="Learn why you're not playing on your soccer team and how you can fix it."/>
            </Helmet>

            <div className={classes.Container}>
                <h1>Why am I not playing on my soccer team?</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/why-am-i-not-playing-on-my-soccer-team/primary.jpeg'}
                     alt={'Why am I not playing on my soccer team?'}/>
                <h2>Ask your coach</h2>

                <div className={classes.Paragraph}>
                    The only person who knows the definitive answer to this question is your coach, so you should
                    start by asking them. This is, however, a bit of a touchy question so make sure you ask it in
                    the right way.
                </div>
                <ol className={classes.Paragraph}>
                    Rather than saying “why am I not playing?” or “why is ___ playing and I’m not”, try asking “what can I be doing to improve?”. You should ask the question in this way for several reasons:
                    <li>
                        Soccer coaches are soccer coaches because they want to develop players. Coaches love if a player
                        asks what they can be doing to improve. On the other hand, if you’re asking why so and so is
                        playing and you’re not, this indicates that you’re necessarily solely concerned with becoming a
                        better player and this could potentially indicate that you may be cancerous to the team.
                    </li>
                    <li>
                        Your coach may not actually know why they picked another player over you. Coaches aren’t perfect
                        and especially if results aren’t going their way they may just be trying different things without
                        a tremendous amount of reasoning behind it. A coach will know, however, how you can improve as a
                        player.
                    </li>
                </ol>

                <h2>Get advice from other experts</h2>
                <div className={classes.Paragraph}>
                    Your team coach may be hesitant to give you too much additional help as they may be worried about
                    other players and parents complain gin about preferential treatment. However, most clubs have
                    many coaches, some of which do private trainings. If you work with a private coach for some time,
                    they will be able to tell you what sorts of things they feel are causing you to not be playing and
                    directly help you improve it.
                </div>
                <div className={classes.Paragraph}>
                    Sending game film to a private coach can be a great way for them to assess what areas you need
                    improvement on. In today’s day and age, many teams record their games. You can compile and
                    <a href={'/'}>send your game clips to an expert coach who can work with you to figure out what you need to work on.</a>
                </div>
            </div>
        </>
    )
}

export default WhyAmINotPlayingOnMySoccerTeam;
