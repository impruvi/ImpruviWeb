import React, {useCallback, useEffect, useState} from "react";
import classes from "./NavigationSlide.module.css";
import {useHistory, useLocation} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useGlobalPopup, {popups} from "../../../hooks/useGlobalPopup";
import SubmitButton from "../../submit-button/SubmitButton";
import useHttpClient from "../../../hooks/useHttpClient";


const Option = ({path, text, close}) => {
    const history = useHistory();
    const location = useLocation();

    const isActive = location.pathname === path;

    const onClick = () => {
        history.push(path);
        close();
    }

    return (
        <div className={isActive ? [classes.NavOption, classes.NavOptionActive].join(' ') : classes.NavOption}
             onClick={onClick}>
            {text}
        </div>
    )
}

const NavigationSlide = ({isOpen, close}) =>  {

    const [player, setPlayer] = useState();

    const history = useHistory();
    const {playerId} = useAuth();
    const {httpClient} = useHttpClient();
    const {setOpenPopup} = useGlobalPopup();
    const {signOut} = useAuth();

    const getPlayer = useCallback(async () => {
        if (!playerId) {
            setPlayer(null);
            return;
        }
        const player = await httpClient.getPlayer(playerId);
        setPlayer(player);
    }, [httpClient, playerId]);

    const onSignout = () => {
        signOut();
        history.push('/');
        close();
    }

    const navigateToLink = (path) => {
        history.push(path);
        close();
    }

    useEffect(() => {
        getPlayer();
    }, [getPlayer]);

    return (
        <>
            {isOpen &&
            <div className={classes.Backdrop} onClick={close}/>
            }
            <div className={isOpen ? [classes.Container, classes.ContainerActive].join(' ') : classes.Container}>
                <div className={classes.Content}>
                    {!!player && (
                        <Option path={'/account'} text={'Account'} close={close}/>
                    )}
                    <Option path={'/how-it-works'} text={'How it works'} close={close}/>
                    <Option path={'/coaches'} text={'Find a coach'} close={close}/>
                    <Option path={'/become-a-coach'} text={'Become a coach'} close={close}/>
                    <Option path={'/contact'} text={'Contact'}  close={close}/>
                    {!!player && (
                        <div className={classes.NavOption} onClick={onSignout}>Logout</div>
                    )}
                    {!player &&
                        <div className={classes.ButtonWrapper}>
                            <SubmitButton onClick={() => setOpenPopup(popups.SignIn)}>
                                Sign in
                            </SubmitButton>
                        </div>
                    }
                    <div className={classes.Footer}>
                        <div className={classes.FooterOption}>
                            Seattle, WA
                        </div>
                        <div className={[classes.FooterOption, classes.FooterOptionClickable].join(' ')}>
                            <a href="mailto:john@impruviapp.com?Subject=Hello%20Impruvi" target="_blank">john@impruviapp.com</a>
                        </div>
                        <div className={[classes.FooterOption, classes.FooterOptionClickable].join(' ')} onClick={() => navigateToLink('/terms')}>
                            Terms of Service
                        </div>
                        <div className={[classes.FooterOption, classes.FooterOptionClickable].join(' ')} onClick={() => navigateToLink('/privacy')}>
                            Privacy Policy
                        </div>
                        <div className={classes.FooterOption}>
                            © 2022 ImpruviApp
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}


export default NavigationSlide;
