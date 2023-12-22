import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

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
                        <button onClick={close}>Close</button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default RepeatLetterPopup;
