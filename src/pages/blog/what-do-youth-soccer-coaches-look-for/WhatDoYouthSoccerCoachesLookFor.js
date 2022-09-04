import classes from "../Blog.module.css";
import {Helmet} from "react-helmet";
import React, {useEffect} from "react";

const WhatDoYouthSoccerCoachesLookFor = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <Helmet>
                <title>What do youth soccer coaches look for? - Impruvi</title>
                <meta name="description" content="Learn what youth soccer coaches look for in a player."/>
            </Helmet>

            <div className={classes.Container}>
                <h1>What do youth soccer coaches look for?</h1>
                <img src={'https://prod-impruvi-media-bucket.s3.us-west-2.amazonaws.com/blog/what-do-youth-soccer-coaches-look-for/primary.jpg'} />
                <div className={classes.Paragraph}>
                    While each individual coach will vary in what they see in a player, there are several
                    things every coach loves to see, and several things every coach absolutely
                    cannot stand. The good news for a young player is all of the things I’m going to talk
                    about in this article can be controlled. Let’s go through each of them.
                </div>

                <h2>Work ethic</h2>
                <div className={classes.Paragraph}>
                    Coaches look for players they can hang their hat on every game. Some days your touch is on,
                    your shot is sharp, and your passing is crisp — but some days things just aren’t clicking.
                    On these days you still need to be able to make an impact on the game. Even if you’re the most
                    skillful player on the team, if you don’t run back on defense every play, your coach may not
                    trust you to be on the field in important moments.
                </div>
                <div className={classes.Paragraph}>
                    So how can you be a player your coach can always trust to be on the field? Making runs for your
                    teammates, and defending honestly are two things that make a big impact on the game and are also
                    two things that you are in complete control of every time you step on the field. Although these
                    sorts of things won’t make it into any highlight reels, it’ll certainly be noticed.
                </div>
                <div className={classes.Paragraph}>
                    Remember, no player is too good to work hard. Watch Wayne Rooney here:
                </div>

                <iframe width="560" height="315" src="https://www.youtube.com/embed/pWDwYSkQj5g"
                        title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen>
                </iframe>

                <h2>Dedication</h2>
                <div className={classes.Paragraph}>
                    Nothing is more frustrating to a coach than a player who doesn’t show up to trainings or to
                    games, or who shows up late. Think about it from the coach’s perspective: why should they invest
                    time and energy into a player who may not even show up to the game — all that effort and energy
                    that went into preparing the player will have been wasted.
                </div>
                <div className={classes.Paragraph}>
                    Particularly in select and ECNL, people tend to underestimate the dedication required to really
                    succeed and excel. These teams are elite and highly competitive; there are many players
                    (and an increasing number of players as time goes on) that want to be on them, many of whom are
                    dedicated enough to show up to every game.
                </div>

                <h2>A good teammate</h2>
                <div className={classes.Paragraph}>
                    Nothing can turn a coach off from a player faster than seeing them be a bad teammate.
                    Be respectful to coaches and other players.  Encourage your teammates, don’t throw your hands
                    in the air when the ball isn’t passed to you. You’d be surprised how important it is to a coach
                    to hear that other players like playing with you, or like being around you.
                </div>
                <div className={classes.Paragraph}>
                    Being a good teammate is just as important off the field as it is on. When your coach is talking,
                    don’t be distracting other players and help pickup the equipment after practice.
                </div>

                <h2>Improvement</h2>

                <div className={classes.Paragraph}>
                    Any coach that’s been around the game long enough will know that the players that are best in their
                    age group when they’re 8 are often times not the best players in their age group when they’re 18.
                    And likewise players who are on the fringes when they’re younger can blossom into some of the
                    best players as they get older. The critical thing here is that the player is dedicated to
                    continually improving. A player who trains on their own an hour a day, 5 times a week is
                    obviously going to become a better player in the long run than one who doesn’t. And from a
                    coach’s perspective, this player is a much better investment of time and energy. Training on
                    your own does not go unnoticed. Coaches notice the increased rate of improvement and word gets
                    around that the player is doing extra work, and coaches love to hear this.  For how many players
                    there are that play on an organized team (ex. Select or ECNL), there are not that many players
                    who actually work on their craft on their own time. So consistently training on your own is one
                    of the simplest and most surefire ways to separate yourself as a player.
                </div>
                <h3>What if I don’t have enough time to be training extra</h3>
                <div className={classes.Paragraph}>
                    As harsh of a reality as this may be, if you feel you don’t have enough time to train extra —
                    then don’t expect a tremendous amount of improvement. Training extra can be as simple as doing
                    30 minutes of footskills in your living room, garage, or yard. There are <a href={'/'}>many tools out there to
                    keep you accountable to training extra and help you pick out the drills that are most effective
                    for you.</a>
                </div>
            </div>
        </>
    )
}

export default WhatDoYouthSoccerCoachesLookFor;
