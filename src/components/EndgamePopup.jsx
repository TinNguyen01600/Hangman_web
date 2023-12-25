import { useEffect } from "react"
import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index'
import ConfettiExplosion from 'react-confetti-explosion';
import { motion } from "framer-motion";
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';
import SentimentVerySatisfiedIcon from '@mui/icons-material/SentimentVerySatisfied';
import { useDispatch, useSelector } from "react-redux";
import { setPlayable } from '../redux/gameplaySlice';
import { resetCorrectLetters, resetWrongLetters, resetSelectedWord } from '../redux/wordSlice'


const EndgamePopup = () => {
    const correctLetters = useSelector(state => state.word.correctLetters)
    const wrongLetters = useSelector(state => state.word.wrongLetters)
    const selectedWord = useSelector(state => state.word.selectedWord)
    const dispatch = useDispatch()

    const isWin = selectedWord.split('').every(letter => correctLetters.includes(letter))
    const isLose = wrongLetters.length === 6
    const finalMessage = isLose
        ? <div className="final-msg"><SentimentVeryDissatisfiedIcon />You lost!<SentimentVeryDissatisfiedIcon /></div>
        : isWin
            ? <div className="final-msg"><SentimentVerySatisfiedIcon />Congrats! You won!<SentimentVerySatisfiedIcon /></div>
            : ''
    const finalMessageRevealWord = 'The word is: ' + selectedWord

    const playAgain = () => {
        dispatch(resetWrongLetters())
        dispatch(resetCorrectLetters())
        dispatch(resetSelectedWord())
        dispatch(setPlayable(true))
    }

    useEffect(() => {
        if (isLose || isWin)   {dispatch(setPlayable(false))}
    })
    return (
        <div>
            {isWin && <ConfettiExplosion force={0.9} height='500vh' width={2000} duration={5000} />}
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
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                            >
                                PLay Again
                            </motion.button>
                            <motion.button
                                className="close-btn"
                                onClick={close}
                                whileHover={{ scale: 1.15 }}
                                whileTap={{ scale: 0.85, rotate: '2.5deg' }}
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