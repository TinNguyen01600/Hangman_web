import { useEffect } from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index'
import ConfettiExplosion from 'react-confetti-explosion';
import { motion } from "framer-motion";

const EndgamePopup = ({ correctLetters, wrongLetters, selectedWord, setPlayable, playAgain }) => {
    const isWin = selectedWord.split('').every(letter => correctLetters.includes(letter))
    const isLose = wrongLetters.length === 6
    const finalMessage = isLose ? 'You lost! :(( ' : isWin ? 'Congrats! You won!' : ''
    const finalMessageRevealWord = 'The word is: ' + selectedWord

    let playable = true
    if (isLose || isWin) playable = false
    useEffect(() => setPlayable(playable))

    return (
        <div>
            {isWin && <ConfettiExplosion />}
            <Popup
                open={isLose || isWin}
                modal
                nested
                contentStyle={popupStyles}
            >
                {(close) => (
                    <div className='pop-up-content'>
                        <h2>{finalMessage}</h2>
                        <h3>{finalMessageRevealWord}</h3>
                        <div>
                            <motion.button
                                onClick={playAgain}
                                className="play-again-btn"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9, rotate: '2.5deg' }}
                            >
                                PLay Again
                            </motion.button>
                            <motion.button
                                className="close-btn"
                                onClick={close}
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9, rotate: '2.5deg' }}
                            >
                                Close
                            </motion.button>
                        </div>
                    </div>
                )}

            </Popup>
        </div>
    )
}
const popupStyles = {
    backgroundColor: 'rgba(125, 255, 255, 0.976)',
    borderRadius: '15px'
}

export default EndgamePopup