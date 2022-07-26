import classes from './HeadshotChip.module.css';
import UserIcon from '../../assets/UserGrey.png';

const HeadshotChip = ({size= 40, firstName, lastName, image}) => {
    return (
        <div className={classes.Container} style={{width: size, height: size, borderRadius: size}}>
            {!!image && (
                <img src={image} style={{width: size, height: size}}/>
            )}
            {!image && !!firstName && (
                <div>
                    <div style={{fontSize: size / 2.3}}>{`${firstName.substring(0, 1).toUpperCase()}${lastName.substring(0, 1).toUpperCase()}`}</div>
                </div>
            )}
            {!image && !firstName && (
                <img src={UserIcon} style={{width: size, height: size}}/>
            )}
        </div>
    )
}

export default HeadshotChip;