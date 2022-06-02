import Header from "../../components/header/Header";
import classes from "../signin/Signin.module.css";
import Input from "../../components/input/Input";
import Button from "../../components/button/Button";

const  Signup = () => {
    return (
        <div>
            <Header />
            <div className={classes.Content}>
                <div className={classes.Title}>
                    Sign up
                </div>
                <div className={classes.Text}>
                    Email
                </div>
                <Input />
                <div className={classes.Text}>
                    Password
                </div>
                <Input />
                <div className={classes.Button}>
                    <Button text={'Sign up'} route={'/choosecoach'}/>
                </div>
            </div>
        </div>
    );

}

export default  Signup;
