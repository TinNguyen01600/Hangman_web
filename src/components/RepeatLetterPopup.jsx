import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { motion } from 'framer-motion';

const RepeatLetterPopup = ({ correctLetters, wrongLetters, enteredLetter, setEnteredLetter }) => {
    return (
        <div>
            <Popup
                open={
                    wrongLetters.some(letter => letter === enteredLetter) ||
                    correctLetters.some(letter => letter === enteredLetter)
                }
                modal
                nested
                onClose={() => setEnteredLetter('')}    // called whenever popup box close, regardless of whether it was closed by clicking the close button inside the popup or clicking outside the popup.
            >
                {close => (
                    <div className='popup-ctn'>
                        You have already entered this letter
                        <motion.button
                            className="close-btn"
                            onClick={close}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, rotate: '2.5deg' }}
                        >
                            Close
                        </motion.button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default RepeatLetterPopup;
