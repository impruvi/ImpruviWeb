import Popup from "../../../../components/popup/Popup";
import SubmitButton from "../../../../components/submit-button/SubmitButton";
import classes from './CancelPopup.module.css';

const CancelPopup = ({close, nextPaymentDate, cancelSubscription, isCancelling}) => {

    return (
        <Popup onClickOutside={close}>
            <div className={classes.Container}>
                <div className={classes.Title}>Cancel subscription</div>
                <div className={classes.Subtitle}>Are you sure you want to cancel your subscription?</div>
                <div className={classes.Text}>
                    Your subscription is paid until {nextPaymentDate}. After
                    this date you will lose access to content on the app.
                </div>
                <div className={classes.ActionButtons}>
                    <SubmitButton className={classes.ActionButtonSecondary}
                                  onClick={close}>
                        Do not cancel
                    </SubmitButton>
                    <SubmitButton className={classes.ActionButton}
                                  onClick={cancelSubscription}
                                  isSubmitting={isCancelling}
                                  isDisabled={isCancelling}>
                        Cancel
                    </SubmitButton>
                </div>
            </div>
        </Popup>
    )
}

export default CancelPopup;