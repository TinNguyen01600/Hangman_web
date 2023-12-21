import './App.css'
import Figure from './components/Figure'
import Header from './components/Header'
import PopUp from './components/PopUp'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'
import Notification from './components/Notification'
import { useEffect, useState } from 'react'

const words = ['react', 'tranquil', 'mechanization', 'christmas']
const selectedWord = words[Math.floor(Math.random() * words.length)]


function App() {
    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState([])
    const [wrongLetters, setWrongLetters] = useState([])

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
                        // show notification for correct letters
                    }
                }
                else {
                    if (!wrongLetters.includes(letter)) {
                        setWrongLetters(currentLetters => [...currentLetters, letter])
                    }
                    else {
                        // show notification for wrong letters
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
                <WrongLetters wrongLetters={wrongLetters} />
                <Word selectedWord={selectedWord} correctLetters={correctLetters} />
                <PopUp />
                <Notification wrongLetters={wrongLetters} />
            </div>
        </>
    )
}

export default App
