import './App.css'
import Figure from './components/Figure'
import Header from './components/Header'
import PopUp from './components/PopUp'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'
import Notification from './components/Notification'
import { useState } from 'react'

function App() {
    const words = ['react', 'tranquil', 'mechanization', 'christmas']
    const selectedWord = words[Math.floor(Math.random() * words.length)]

    const [playable, setPlayable] = useState(true)
    const [correctLetters, setCorrectLetters] = useState(['a'])
    const [wrongLetters, setWrongLetters] = useState([])

    return (
        <>
            <Header />
            <div className='game-ctn'>
                <Figure />
                <WrongLetters />
                <Word selectedWord={selectedWord} correctLetters={correctLetters}/>
                <PopUp />
                <Notification wrongLetters={wrongLetters}/>
            </div>
        </>
    )
}

export default App
