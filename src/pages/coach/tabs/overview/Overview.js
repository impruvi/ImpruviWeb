import classes from "./Overview.module.css";

const Overview = ({coach}) => {
    return (
        <div className={classes.Container}>
            <pre>
                {coach.about}
            </pre>
        </div>

    )
}

export default Overview;