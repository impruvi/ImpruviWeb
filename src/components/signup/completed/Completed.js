import SubmitButton from "../../submit-button/SubmitButton";

const Completed = ({onComplete}) => {
    return (
        <>
            <SubmitButton onClick={onComplete}
                          isFullWidth={true}>
                View account
            </SubmitButton>
        </>
    )
}

export default Completed;