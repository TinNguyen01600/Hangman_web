import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index'

const PopUp = () => {
    return (
        <div>
            <Popup trigger=
                {<button>Click to open pop-up</button>}
                modal nested>
                {
                    close => (
                        <div className='popup-ctn'>
                            Message
                            <button onClick={() => close()}>Play again</button>
                            <button onClick={() => close()}>Close</button>
                        </div>
                    )
                }
            </Popup>
        </div>
    )
}

export default PopUp