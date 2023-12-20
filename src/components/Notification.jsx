import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

const Notification = () => {
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    return (
        <div>
            {/* Input Trigger */}
            <input
                type="text"
                placeholder="Type something"
                value={inputValue}
                onChange={handleInputChange}
            />

            {/* Popup */}
            <Popup
                open={inputValue === 'a'}
                modal
                nested
            >
                {close => (
                    <div className='popup-ctn'>
                        You have already entered this letter
                        <button onClick={() => {setInputValue(''); close()}}>Close</button>
                    </div>
                )}
            </Popup>
        </div>
    );
};

export default Notification;
