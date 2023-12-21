import Popup from "reactjs-popup"
import 'reactjs-popup/dist/index'

const PopUp = () => {
    const renderPopupContent = (close) => (
        <div>
            <p>This is the popup content.</p>
            <button onClick={close}>Close Popup</button>
        </div>
    );

    return (
        <div>
            <Popup
                trigger={<button>Click to open pop-up</button>}
                modal
                nested
                onClose={() => console.log(123)}
            >
                {/* {(close) => renderPopupContent(close)} */}
                <div>
                    <p>This is the popup content.</p>
                    <button onClick={close}>Close Popup</button>
                </div>
            </Popup>
        </div>
    )
}

export default PopUp