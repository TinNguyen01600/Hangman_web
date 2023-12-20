import './App.css'
import Figure from './components/Figure'
import Header from './components/Header'
import PopUp from './components/PopUp'
import Word from './components/Word'
import WrongLetters from './components/WrongLetters'

function App() {
    return (
        <>
            <Header />
            <div className='game-ctn'>
                <Figure />
                <WrongLetters />
                <Word />
                <PopUp />
            </div>
        </>
    )
}

export default App
