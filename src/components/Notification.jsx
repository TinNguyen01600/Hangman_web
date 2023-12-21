import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Notification = ({ wrongLetters, enteredLetter, setEnteredLetter }) => {
    return (
        <div>
            {/* Popup */}
            <Popup
                open={wrongLetters.some(letter => letter === enteredLetter)}
                modal
                nested
            >
                {close => (
                    <div className='popup-ctn'>
                        You have already entered this letter
                        <button onClick={() => {
                            close()
                            setEnteredLetter('')
                        }}>Close</button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default Notification;
