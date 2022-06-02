import Header from "../../components/header/Header";
import Button from "../../components/button/Button";
import classes from './Signin.module.css';
import Input from "../../components/input/Input";

const  Signin = () => {

    return (
        <div>
            <Header />
             <div className={classes.Content}>
                 <div className={classes.Title}>
                     Sign in
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
                     <Button text={'Sign in'} route={'/dashboard'}/>
                 </div>
             </div>
        </div>
    );

}

export default  Signin;
