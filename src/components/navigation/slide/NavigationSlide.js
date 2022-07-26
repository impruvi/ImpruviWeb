import React from "react";
import classes from "./NavigationSlide.module.css";
import {useHistory, useLocation} from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import useGlobalPopup, {popups} from "../../../hooks/useGlobalPopup";
import SubmitButton from "../../submit-button/SubmitButton";
import {useCallback, useEffect, useState} from "react";
import useHttpClient from "../../../hooks/useHttpClient";


const Option = ({path, text}) => {
    const history = useHistory();
    const location = useLocation();

    const isActive = location.pathname === path;

    return (
        <div className={isActive ? [classes.NavOption, classes.NavOptionActive].join(' ') : classes.NavOption}
             onClick={() => history.push(path)}>
            {text}
        </div>
    )
}

const NavigationSlide = ({isOpen, close}) =>  {

    const [player, setPlayer] = useState();

    const {playerId} = useAuth();
    const {httpClient} = useHttpClient();
    const {setOpenPopup} = useGlobalPopup();

    const getPlayer = useCallback(async () => {
        if (!playerId) {
            return;
        }
        const player = await httpClient.getPlayer(playerId);
        setPlayer(player);
    }, [httpClient, playerId])

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
                        <Option path={'/account'} text={'Account'}/>
                    )}
                    <Option path={'/how-it-works'} text={'How it works'}/>
                    <Option path={'/find-coach'} text={'Find a coach'}/>
                    <Option path={'/become-a-coach'} text={'Become a coach'}/>
                    <Option path={'/contact'} text={'Contact'}/>
                    {!player &&
                        <SubmitButton onClick={() => setOpenPopup(popups.SignIn)}>
                            Sign in
                        </SubmitButton>
                    }
                    <div className={classes.Footer}>
                        <div className={classes.FooterOption}>
                            Seattle, WA
                        </div>
                        <div className={classes.FooterOption}>
                            <a href="mailto:john@impruviapp.com?Subject=Hello%20Impruvi" target="_blank">john@impruviapp.com</a>
                        </div>
                        <div className={classes.FooterOption}>
                            Terms of Service
                        </div>
                        <div className={classes.FooterOption}>
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
