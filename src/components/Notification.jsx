const Notification = ({ showNotification, wrongLetters }) => {
    const attempts = 6 - wrongLetters.length
    return (
        <>
            {showNotification &&
                <div className="notification-ctn">
                    You have {attempts} attemps left
                </div>
            }
        </>
    )
}

export default Notification