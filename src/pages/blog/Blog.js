import {matchPath, Redirect, Route, Switch, useLocation} from "react-router-dom";
import HowVideoCoachingCanHelpPlayers from "./how-video-coaching-can-help-players/HowVideoCoachingCanHelpPlayers";
import BlogList from "./blog-list/BlogList";
import classes from "./Blog.module.css";
import Footer from "../../components/footer/Footer";
import React, {useEffect, useState} from "react";
import {Helmet} from "react-helmet";
import HowToDevelopAMoreConsistentShot from "./how-to-develop-a-more-consistent-shot/HowToDevelopAMoreConsistentShot";
import WhatDoYouthSoccerCoachesLookFor from "./what-do-youth-soccer-coaches-look-for/WhatDoYouthSoccerCoachesLookFor";
import WhyAmINotPlayingOnMySoccerTeam from "./why-am-i-not-playing-on-my-soccer-team/WhyAmINotPlayingOnMySoccerTeam";
import DoesJugglingActuallyMakeMeABetterPlayer
    from "./does-juggling-actually-make-me-a-better-player/DoesJugglingActuallyMakeMeABetterPlayer";
import ThePowerOfVideoInSports from "./the-power-of-video-in-sports/ThePowerOfVideoInSports";

const Blog = () => {

    const location = useLocation();

    const [progress, setProgress] = useState(0);

    const updateProgress = () => {
        const h = document.documentElement,
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight';
        const percent =  (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100;
        setProgress(percent);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.addEventListener('scroll', updateProgress);
        return () => document.removeEventListener('scroll', updateProgress);
    }, []);

    return (
        <>
            <Helmet>
                <title>Impruvi | Blog</title>
                <meta name="description" content="Impruvi Blog – covers everything you need to know to master youth soccer."/>
            </Helmet>
            {!!matchPath(location.pathname, {
                path: '/blog/:slug',
                exact: false
            }) && (
                <div className={classes.ProgressContainer}>
                    <div className={classes.Progress} style={{width: `${progress}%`}}/>
                </div>
            )}
            <Switch>
                <Route path="/blog/how-video-coaching-can-help-players" component={HowVideoCoachingCanHelpPlayers} />
                <Route path="/blog/the-power-of-video-in-sports" component={ThePowerOfVideoInSports} />
                <Route path="/blog/how-to-develop-a-more-consistent-shot" component={HowToDevelopAMoreConsistentShot} />
                <Route path="/blog/what-do-youth-soccer-coaches-look-for" component={WhatDoYouthSoccerCoachesLookFor} />
                <Route path="/blog/why-am-i-not-playing-on-my-soccer-team" component={WhyAmINotPlayingOnMySoccerTeam} />
                <Route path="/blog/does-juggling-actually-make-me-a-better-player" component={DoesJugglingActuallyMakeMeABetterPlayer} />
                <Route path="/blog" component={BlogList} />
                <Redirect to="/blog" />
            </Switch>
            <div className={classes.FooterWrapper}>
                <Footer />
            </div>
        </>
    );
}

export default Blog;
