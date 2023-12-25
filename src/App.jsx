import './App.css'
import Figure from './components/Figure'
import Header from './components/Header'
import EndgamePopup from './components/EndgamePopup'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'
import RepeatLetterPopup from './components/RepeatLetterPopup'
import Notification from './components/Notification'
import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { appendCorrectLetters, appendWrongLetters } from './redux/wordSlice'
import { setEnteredLetter } from './redux/gameplaySlice'

function App() {
    const [showNotification, setShowNotification] = useState(false)

    const dispatch = useDispatch()
    const selectedWord = useSelector(state => state.word.selectedWord)
    const correctLetters = useSelector(state => state.word.correctLetters)
    const wrongLetters = useSelector(state => state.word.wrongLetters)
    const playable = useSelector(state => state.gameplay.playable)

    useEffect(() => {
        const showNoti = () => {
            if (wrongLetters.length >= 2 && wrongLetters.length <= 4) {
                setShowNotification(true)
                setTimeout(() => setShowNotification(false), 3000)
            }
        }
        const handleKeydown = event => {
            const { key, keyCode } = event
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase()
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        dispatch(appendCorrectLetters(letter))
                    }
                    else {
                        // show notification for repeated correct letters
                        dispatch(setEnteredLetter(letter))
                    }
                }
                else {
                    if (!wrongLetters.includes(letter)) {
                        dispatch(appendWrongLetters(letter))
                        showNoti()
                    }
                    else {
                        // show notification for repeated wrong letters
                        dispatch(setEnteredLetter(letter))
                    }
                }
            }
        }
        // listen for the event 'press key down' from window
        // then func handleKeydown is called
        window.addEventListener('keydown', handleKeydown)

        // clean up all the event listeners created
        // so we only have 1 EL at 1 time
        return () => window.removeEventListener('keydown', handleKeydown)
    }, [correctLetters, wrongLetters, playable])

    return (
        <>
            <Header />
            <div className='game-ctn'>
                <Figure />
                <WrongLetters />
                <Word />
                <RepeatLetterPopup />
                <EndgamePopup />
            </div>
            <Notification
                showNotification={showNotification}
            />
        </>
    )
}

export default App