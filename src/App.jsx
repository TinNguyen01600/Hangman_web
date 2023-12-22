import './App.css'
import Figure from './components/Figure'
import Header from './components/Header'
import EndgamePopup from './components/EndgamePopup'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'
import NotificationPopup from './components/NotificationPopup'
import { useEffect, useState } from 'react'

const words = ['react', 'tranquil', 'mechanization', 'christmas']
let selectedWord = words[Math.floor(Math.random() * words.length)]


function App() {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])
    const [enteredLetter, setEnteredLetter] = useState('')

    useEffect(() => {
        const handleKeydown = event => {
            const { key, keyCode } = event
            if (playable && keyCode >= 65 && keyCode <= 90) {
                const letter = key.toLowerCase()
                if (selectedWord.includes(letter)) {
                    if (!correctLetters.includes(letter)) {
                        setCorrectLetters(currentLetters => [...currentLetters, letter])
                    }
                    else {
                        // show notification for repeated correct letters
                        setEnteredLetter(letter)
                    }
                }
                else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter])
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
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
                <EndgamePopup
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}
                    selectedWord={selectedWord}
                    setPlayable={setPlayable}
                    playAgain={playAgain}
                />
                <NotificationPopup
                    correctLetters={correctLetters}
                    wrongLetters={wrongLetters}
                    enteredLetter={enteredLetter}
                    setEnteredLetter={setEnteredLetter}
                />
            </div>
        </>
    )
}

export default App
