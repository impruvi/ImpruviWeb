import SubmitButton from "../../submit-button/SubmitButton";

const Completed = ({onComplete}) => {
    return (
        <>
            <SubmitButton onClick={onComplete}
                          isFullWidth={true}>
                Sign in
            </SubmitButton>
        </>
    )
}

export default Completed;