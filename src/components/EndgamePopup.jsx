import { useEffect } from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index'

const EndgamePopup = ({ correctLetters, wrongLetters, selectedWord, setPlayable }) => {
    const finalMessageRevealWord = 'The word is: ' + selectedWord
    let finalMessage = ''
    let playable = true

    const checkWin = () => {
        let status = 'win'
        // check for win
        selectedWord.split('').forEach(letter => {
            if (!correctLetters.includes(letter)) status = ''
        })
        // check for lost
        if (wrongLetters.length === 6) status = 'lose'
        return status
    }
    if (checkWin === 'win') {
        finalMessage = 'Congrats! You won!'
        playable = false
    }
    else if (checkWin === 'lose') {
        finalMessage = 'You lost :(('
        playable = false
    }
    useEffect(() => setPlayable(playable))

    return (
        <div>
            <Popup
                trigger={<button>Click to open pop-up</button>}
                modal
                nested
            >
                {(close) => (
                    <div>
                        <h2>{finalMessage}</h2>
                        <h3>{finalMessageRevealWord}</h3>
                        <button onClick={close}>Close Popup</button>
                    </div>
                )}

            </Popup>
        </div>
    )
}


export default EndgamePopup