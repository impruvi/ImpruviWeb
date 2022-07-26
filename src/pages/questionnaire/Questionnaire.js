import classes from './Questionnaire.module.css';
import {useCallback, useEffect, useState} from "react";
import Intro from "./slides/Intro";
import Name from "./slides/Name";
import Position from "./slides/Position";
import Age from "./slides/Age";
import Equipment from "./slides/Equipment";
import Location from "./slides/Location";
import ShortTermGoal from "./slides/ShortTermGoal";
import LongTermGoal from "./slides/LongTermGoal";
import InitiateSignup from "./slides/InitiateSignup";
import Done from "./slides/Done";
import {useHistory, useParams} from "react-router-dom";
import useHttpClient from "../../hooks/useHttpClient";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/spinner/Spinner";
import CompleteSignup from "./slides/CompleteSignup";


const slideName = {
    Intro: 'Intro',
    Name: 'Name',
    Position: 'Position',
    Age: 'Age',
    Equipment: 'Equipment',
    Location: 'Location',
    ShortTermGoal: 'ShortTermGoal',
    LongTermGoal: 'LongTermGoal',
    InitiateSignup: 'InitiateSignup',
    CompleteSignup: 'CompleteSignup',
    Done: 'Done'
}

const Questionnaire = () => {

    const history = useHistory();
    const {coachId} = useParams();
    const {httpClient} = useHttpClient();
    const {token, playerId, setToken, setPlayerId} = useAuth();

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [player, setPlayer] = useState();
    const [coach, setCoach] = useState();
    const [activeSlide, setActiveSlide] = useState(slideName.Intro);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const [tempPlayerId, setTempPlayerId] = useState();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [position, setPosition] = useState('');
    const [ageRange, setAgeRange] = useState();
    const [availableEquipment, setAvailableEquipment] = useState([]);
    const [availableTrainingLocations, setAvailableTrainingLocations] = useState([]);
    const [shortTermGoal, setShortTermGoal] = useState('');
    const [longTermGoal, setLongTermGoal] = useState('');

    const slides = !!player ? [
        slideName.Intro,
        slideName.Name,
        slideName.Position,
        slideName.Age,
        slideName.Equipment,
        slideName.Location,
        slideName.ShortTermGoal,
        slideName.LongTermGoal,
        slideName.Done
    ] : [
        slideName.Intro,
        slideName.Name,
        slideName.Position,
        slideName.Age,
        slideName.Equipment,
        slideName.Location,
        slideName.ShortTermGoal,
        slideName.LongTermGoal,
        slideName.InitiateSignup,
        slideName.CompleteSignup,
        slideName.Done
    ];

    const submit = () => {
        history.push(`/coaches/${coachId}/choose-plan`)
    }

    const onComplete = async (player, token) => {
        setIsSubmitting(true);
        try {
            await httpClient.updatePlayer({
                ...player,
                position,
                availableEquipment,
                availableTrainingLocations,
                shortTermGoal,
                longTermGoal
            });
            setToken(token);
            setPlayerId(player.playerId);
            changeSlide(slideName.Done);
        } catch (e) {
            console.log(e);
        }
        setIsSubmitting(false);
    }

    const advance = () => {
        const currentIdx = slides.indexOf(activeSlide);
        if (currentIdx === slides.length - 1) {
            submit();
            return;
        }
        changeSlide(slides[currentIdx + 1]);
    }

    const goBack = () => {
        const currentIdx = slides.indexOf(activeSlide);
        if (currentIdx === 0) {
            return;
        }
        changeSlide(slides[currentIdx - 1]);
    }

    const changeSlide = (slide) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveSlide(slide);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 300);
    }

    const getContainerClassName = (slide) => {
        if (slide !== activeSlide) {
            return classes.HiddenSlide;
        }

        if (isTransitioning) {
            return classes.TransitioningSlide;
        } else {
            return classes.ActiveSlide;
        }
    }

    const initialize = useCallback(async () => {
        setIsLoading(true);
        try {
            if (!!playerId) {
                const player = await httpClient.getPlayer(playerId);
                setPlayer(player);
            }
            const coach = await httpClient.getCoach(coachId);
            setCoach(coach);
        } catch(e) {
            console.log(e);
        }
        setIsLoading(false);
    }, [playerId, coachId, httpClient]);

    useEffect(() => {
        window.scrollTo(0, 0);
        initialize();
    }, [initialize]);

    useEffect(() => {
        if (!!player && (activeSlide === slideName.InitiateSignup || activeSlide === slideName.CompleteSignup)) {
            changeSlide(slideName.Done);
        }
    }, [player, activeSlide]);

    return (
        <div>
            <div className={classes.Container}>
                <div className={classes.Content}>
                    <div className={classes.ProgressBarContainer}>
                        <div className={classes.ProgressBarInner} style={{width: `${Math.floor(slides.indexOf(activeSlide) / (slides.length - 1) * 100)}%`}}/>
                    </div>
                    {isLoading && (
                        <Spinner />
                    )}
                    {!isLoading && slides.map(slide => (
                        <div className={getContainerClassName(slide)}>
                            <div className={classes.SlideContainer}>
                                {slide === slideName.Intro && (
                                    <Intro coach={coach}
                                           advance={advance}/>
                                )}
                                {slide === slideName.Name && (
                                    <Name firstName={firstName}
                                          setFirstName={setFirstName}
                                          lastName={lastName}
                                          setLastName={setLastName}
                                          advance={advance}
                                          goBack={goBack}/>
                                )}
                                {slide === slideName.Position && (
                                    <Position position={position}
                                              setPosition={setPosition}
                                              advance={advance}
                                              goBack={goBack}/>
                                )}
                                {slide === slideName.Age && (
                                    <Age ageRange={ageRange}
                                         setAgeRange={setAgeRange}
                                         advance={advance}
                                         goBack={goBack}/>
                                )}
                                {slide === slideName.Equipment && (
                                    <Equipment availableEquipment={availableEquipment}
                                               setAvailableEquipment={setAvailableEquipment}
                                               advance={advance}
                                               goBack={goBack}/>
                                )}
                                {slide === slideName.Location && (
                                    <Location trainingLocations={availableTrainingLocations}
                                              setTrainingLocations={setAvailableTrainingLocations}
                                              advance={advance}
                                              goBack={goBack}/>
                                )}
                                {slide === slideName.ShortTermGoal && (
                                    <ShortTermGoal shortTermGoal={shortTermGoal}
                                                   setShortTermGoal={setShortTermGoal}
                                                   advance={advance}
                                                   goBack={goBack}/>
                                )}
                                {slide === slideName.LongTermGoal && (
                                    <LongTermGoal longTermGoal={longTermGoal}
                                                  setLongTermGoal={setLongTermGoal}
                                                  advance={!!player ? () => onComplete(player, token) : advance}
                                                  isSubmitting={isSubmitting}
                                                  goBack={goBack}/>
                                )}
                                {slide === slideName.InitiateSignup && (
                                    <InitiateSignup advance={advance}
                                                    goBack={goBack}
                                                    setPlayerId={setTempPlayerId}
                                                    firstName={firstName}
                                                    lastName={lastName}/>
                                )}
                                {slide === slideName.CompleteSignup && (
                                    <CompleteSignup onComplete={onComplete}
                                                    playerId={tempPlayerId}
                                                    isSubmitting={isSubmitting}/>
                                )}
                                {slide === slideName.Done && (
                                    <Done advance={advance}/>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Questionnaire;