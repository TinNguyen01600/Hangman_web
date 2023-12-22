import { useEffect } from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index'
import ConfettiExplosion from 'react-confetti-explosion';

const EndgamePopup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    const finalMessageRevealWord = 'The word is: ' + selectedWord
    const isWin = selectedWord.split('').every(letter => correctLetters.includes(letter))
    const isLose = wrongLetters.length === 6
    const finalMessage = isLose ? 'You lost' : isWin ? 'Congrats! You won' : ''

    let playable = true
    if (isLose || isWin) playable = false
    useEffect(() => setPlayable(playable))

    return (
        <div>
            {isWin && <ConfettiExplosion
                duration={8000}
                force={0.9}
                particleCount={400}
                height='500vh'
                width={2000}
            />}
            <Popup
                open={isLose || isWin}
                modal
                nested
            >
                {(close) => (
                    <div>
                        <h2>{finalMessage}</h2>
                        <h3>{finalMessageRevealWord}</h3>
                        <button onClick={close}>Close</button>
                        <button onClick={playAgain}>PLay Again</button>
                    </div>
                )}

            </Popup>
        </div>
    )
}


export default EndgamePopup