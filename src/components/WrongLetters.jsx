import { useSelector } from "react-redux"

const WrongLetters = () => {
    const wrongLetters = useSelector(state => state.word.wrongLetters)
    return (
        <>
            <div className="wrong-letters-ctn">
                {wrongLetters.length > 0 && <h3>Wrong: </h3>}
                {wrongLetters
                    .map((letter, i) => (<span key={i}>{letter}</span>))
                    .reduce((prev, current) => prev === null ? [current] : [prev, ', ', current], null)  // put a comma after each wrong letter
                }    
            </div>
        </>
    )
}

export default WrongLetters