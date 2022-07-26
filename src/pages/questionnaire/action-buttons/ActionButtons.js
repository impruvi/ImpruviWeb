import classes from "./ActionButtons.module.css";
import SubmitButton from "../../../components/submit-button/SubmitButton";

const ActionButtons = ({isPrimaryDisabled, isPrimarySubmitting, primaryText='Continue', onPrimaryClick, shouldShowSecondary=true, secondaryText='Back', onSecondaryClick}) => {
    return (
        <div className={classes.Container}>
            <SubmitButton onClick={onPrimaryClick}
                          className={classes.ContinueButton}
                          isDisabled={isPrimaryDisabled}
                          isSubmitting={isPrimarySubmitting}>
                {primaryText}
            </SubmitButton>
            {shouldShowSecondary && (
                <div className={classes.ButtonSecondary} onClick={onSecondaryClick}>
                    {secondaryText}
                </div>
            )}
        </div>
    )
}

export default ActionButtons;