import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { motion } from 'framer-motion';
import ErrorOutlineSharpIcon from '@mui/icons-material/ErrorOutlineSharp';
import { useDispatch, useSelector } from 'react-redux';
import { setEnteredLetter } from '../redux/gameplaySlice';
import { useEffect } from 'react';
import { setPlayable as set } from '../redux/gameplaySlice';

const RepeatLetterPopup = () => {
    const correctLetters = useSelector(state => state.word.correctLetters)
    const wrongLetters = useSelector(state => state.word.wrongLetters)
    const enteredLetter = useSelector(state => state.gameplay.enteredLetter)
    let repeated = wrongLetters.some(letter => letter === enteredLetter) || correctLetters.some(letter => letter === enteredLetter)
    const dispatch = useDispatch()
    
    useEffect(() => {
        if (repeated)   {dispatch(set(false))}
    })

    return (
        <div>
            <Popup
                open={repeated}
                modal
                nested
                contentStyle={popupStyles}
                onClose={() => {
                    dispatch(set(true))
                    dispatch(setEnteredLetter(''))
                }}    // called whenever popup box close, regardless of whether it was closed by clicking the close button inside the popup or clicking outside the popup.
            >
                {close => (
                    <div className='pop-up-content'>
                        <h2>
                            <ErrorOutlineSharpIcon />
                            You have already entered this letter
                        </h2>
                        <motion.button
                            className="close-btn"
                            onClick={close}
                            whileHover={{ scale: 1.15 }}
                            whileTap={{ scale: 0.85, rotate: '2.5deg' }}
                        >
                            Close
                        </motion.button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

const popupStyles = {
    backgroundColor: 'rgba(125, 255, 255, 0.976)',
    borderRadius: '15px',
    width: '500px'
}

export default RepeatLetterPopup;
