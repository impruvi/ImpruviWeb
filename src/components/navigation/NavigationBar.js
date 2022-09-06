import LogoText from '../../assets/LogoText.png';
import LogoTextWhite from '../../assets/LogoTextWhite.png';
import classes from './NavigationBar.module.css';
import darkClasses from './NavigationBarDark.module.css'
import {useHistory} from "react-router-dom";
import useGlobalPopup, {popups} from "../../hooks/useGlobalPopup";
import useAuth from "../../hooks/useAuth";
import HeadshotChip from "../headshot-chip/HeadshotChip";
import NavigationSlide from "./slide/NavigationSlide";
import {useCallback, useEffect, useState} from "react";
import HamburgerBlack from '../../assets/HamburgerBlack.png';
import HamburgerWhite from '../../assets/HamburgerWhite.png';
import useHttpClient from "../../hooks/useHttpClient";

const NavigationBar = ({mode= 'light' , sticky=false}) => {

    const [player, setPlayer] = useState();
    const [isSideNavOpen, setIsSignNavOpen] = useState(false);

    const history = useHistory();
    const {setOpenPopup} = useGlobalPopup();
    const {httpClient} = useHttpClient();
    const {playerId} = useAuth();

    const getPlayer = useCallback(async () => {
        if (!playerId) {
            setPlayer(null);
        } else {
            const player = await httpClient.getPlayer(playerId);
            setPlayer(player);
        }
    }, [httpClient, playerId]);

    const getContainerClass = useCallback(() => {
        if (mode === 'light') {
            return sticky
                ? classes.ContainerSticky
                : classes.Container;
        } else {
            return sticky
                ? darkClasses.ContainerSticky
                : darkClasses.Container;
        }
    }, [mode, sticky]);

    useEffect(() => {
        getPlayer();
    }, [getPlayer]);

    return (
        <div className={getContainerClass()}>
            <div className={classes.ContainerInner}>
                <img src={mode === 'light' ? LogoText : LogoTextWhite} className={classes.LogoText} onClick={() => history.push('/')}/>
                <div className={classes.NavRight}>
                    <div className={mode === 'light' ? classes.NavRightOption : darkClasses.NavRightOption} onClick={() => history.push('/coaches')}>
                        For players
                    </div>
                    <div className={mode === 'light' ? classes.NavRightOption : darkClasses.NavRightOption} onClick={() => history.push('/become-a-coach')}>
                        For coaches
                    </div>
                    <div className={mode === 'light' ? classes.NavRightOption : darkClasses.NavRightOption} onClick={() => history.push('/contact')}>
                        Contact
                    </div>
                    <div className={mode === 'light' ? classes.NavRightOption : darkClasses.NavRightOption} onClick={() => history.push('/blog')}>
                        Blog
                    </div>
                    {!player && (
                        <div className={mode === 'light' ? classes.NavRightOption : darkClasses.NavRightOption} onClick={() => setOpenPopup(popups.SignIn)}>
                            Sign in
                        </div>
                    )}

                    {!player && (
                        <div className={classes.SignIn} onClick={() => setOpenPopup(popups.SignUp)}>
                            Free trial
                        </div>
                    )}
                    {!!player && (
                        <div className={classes.HeadshotWrapper} onClick={() => history.push('/account')}>
                            <HeadshotChip image={player.headshot?.fileLocation}
                                          firstName={player.firstName}
                                          lastName={player.lastName}
                                          size={35}/>
                        </div>
                    )}
                </div>
                <div className={classes.NavRightSmall}>
                    <div className={mode === 'light' ? classes.Hamburger : darkClasses.Hamburger} onClick={() => setIsSignNavOpen(true)}>
                        <img src={mode === 'light' ? HamburgerBlack : HamburgerWhite} />
                    </div>
                </div>
            </div>
            <NavigationSlide isOpen={isSideNavOpen}
                             close={() => setIsSignNavOpen(false)}/>
        </div>
    )
}

export default NavigationBar;
