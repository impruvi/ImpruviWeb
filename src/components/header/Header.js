import classes from './Header.module.css';
import {useHistory} from "react-router-dom";
import Logo from '../../assets/ImpruviLogo.png';

const Header = () => {
    const history = useHistory();

    return (
        <div className={classes.Container}>
            <div className={classes.Logo} onClick={() => history.push('/landing')}>
                <img src={Logo} />
            </div>

            <div className={classes.Right}>
                <div className={classes.Option} onClick={() => history.push('/pricing')}>Pricing</div>
                <div className={classes.ButtonPrimary} onClick={() => history.push('/signin')}>Sign in</div>
            </div>
        </div>
    );
}

export default Header;
