import Dylan from "../../../assets/coaches/Dylan.png";
import Dawda from "../../../assets/coaches/Dawda.png";
import {useState} from "react";
import classes from "./Quotes.module.css";
import ArrowLeft from '../../../assets/ArrowLeftBlack.png';
import ArrowRight from '../../../assets/ArrowRightBlack.png';

const quotes = [
    {
        id: 1,
        name: 'Dylan Teves',
        title: 'Seattle Sounders',
        image: Dylan,
        quote: 'Coaching youth players has always been a passion of mine. However, as a professional soccer player, I seldom have any time to meet with players in person to train. Imprüvi has not only helped me work with and mentor players, but it has allowed me to connect and engage with my fans.'
    },
    {
        id: 2,
        name: 'Dawda Dibba',
        title: 'Private Coach',
        image: Dawda,
        quote: 'While in-person private training is great, training on your own is required in order to get to the next level. I use imprüvi to make sure my clients are training properly on their own so that they can get the most out of their  in-person session. Imprüvi has also let me expand my client base to areas outside of Seattle.'
    }
];

const Quotes = () => {

    const [activeQuoteId, setActiveQuoteId] = useState(quotes[0].id);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const changeQuoteIdx = (quoteId) => {
        setIsTransitioning(true);
        setTimeout(() => {
            setActiveQuoteId(quoteId);
            setTimeout(() => {
                setIsTransitioning(false);
            }, 100);
        }, 300);
    }

    const canIncrement = () => {
        return activeQuoteId < quotes[quotes.length - 1].id;
    }

    const canDecrement = () => {
        return activeQuoteId > quotes[0].id;
    }

    const incrementQuoteIdx = () => {
        if (canIncrement()) {
            changeQuoteIdx(activeQuoteId + 1);
        }
    }

    const decrementQuoteIdx = () => {
        if (canDecrement()) {
            changeQuoteIdx(activeQuoteId - 1);
        }
    }

    const getContainerClassName = (quoteId) => {
        if (quoteId !== activeQuoteId) {
            return classes.HiddenSlide;
        }

        if (isTransitioning) {
            return classes.TransitioningSlide;
        } else {
            return classes.ActiveSlide;
        }
    }

    const getDotClassName = (quoteId) => {
        if (quoteId === activeQuoteId) {
            return [classes.DotActive, classes.Dot].join(' ');
        } else {
            return classes.Dot
        }
    }

    return (
        <div className={classes.Container}>
            {quotes.map(quote => (
                <div className={[getContainerClassName(quote.id), classes.Slide].join(' ')} key={quote.id}>
                    <div className={classes.ImageContainer}>
                        <img src={quote.image} className={classes.Image}/>
                    </div>
                    <div className={classes.Titles}>
                        <div className={classes.Title}>
                            {quote.name}
                        </div>
                        <div className={classes.Title}>
                            {quote.title}
                        </div>
                    </div>
                    <div className={classes.Quote}>
                        "{quote.quote}"
                    </div>
                </div>
            ))}
            <div className={classes.Controls}>
                <div className={classes.Arrows}>
                    {canDecrement() && (
                        <div onClick={decrementQuoteIdx}>
                            <img src={ArrowLeft} className={classes.ArrowImage}/>
                        </div>
                    )}
                    {canIncrement() && (
                        <div onClick={incrementQuoteIdx}>
                            <img src={ArrowRight} className={classes.ArrowImage}/>
                        </div>
                    )}
                </div>
                <div className={classes.Index}>
                    {quotes.map(quote => (
                        <div className={getDotClassName(quote.id)} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Quotes;
