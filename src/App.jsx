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

const words = ['react', 'tranquil', 'mechanization', 'christmas']
let selectedWord = words[Math.floor(Math.random() * words.length)]


function App() {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [enteredLetter, setEnteredLetter] = useState('')
    const [showNotification, setShowNotification] = useState(false)

    const dispatch = useDispatch()

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
                        setCorrectLetters(currentLetters => [...currentLetters, letter])
                        dispatch(appendCorrectLetters(letter))
                    }
                    else {
                        // show notification for repeated correct letters
                        setEnteredLetter(letter)
                    }
                }
                else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter])
                        dispatch(appendWrongLetters(letter))
                        showNoti()
                    }
                    else {
                        // show notification for repeated wrong letters
                        setEnteredLetter(letter)
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

    const playAgain = () => {
        setCorrectLetters([])
        setWrongLetters([])
        setPlayable(true)
        selectedWord = words[Math.floor(Math.random() * words.length)]
        window.location.reload(false);
    }

    return (
        <>
            <Header />
            <div className='game-ctn'>
                <Figure wrongLetters={wrongLetters} />
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} />
                <RepeatLetterPopup
                    wrongLetters={wrongLetters}
                    enteredLetter={enteredLetter}
                    setEnteredLetter={setEnteredLetter}
                    setPlayable={setPlayable}
                />
                <EndgamePopup
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}
                    selectedWord={selectedWord}
                    setPlayable={setPlayable}
                    playAgain={playAgain}
                />
            </div>
            <Notification
                showNotification={showNotification}
                wrongLetters={wrongLetters}
            />
        </>
    )
}

export default App
