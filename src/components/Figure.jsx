const Figure = () => {
    return (
        <svg width="250" height="200" className="figure-ctn">
            {/* Rod */}
            <line x1="200" y1='50' x2='200' y2='10' className="figure-part" />
            <line x1="200" y1='10' x2='50' y2='10' className="figure-part" />
            <line x1="50" y1='10' x2='50' y2='290' className="figure-part" />
            <line x1="0" y1='290' x2='300' y2='290' className="figure-part" />
            <line x1="100" y1='10' x2='50' y2='50' className="figure-part" />

            {/* Head */}
            <circle cx="200" cy="70" r="20" className="figure-part" fill="none" />
            {/* Body */}
            <line x1="200" y1='90' x2='200' y2='150' className="figure-part" />
            {/* 2 hands */}
            <line x1="200" y1='90' x2='230' y2='130' className="figure-part" />
            <line x1="200" y1='90' x2='170' y2='130' className="figure-part" />
            {/* 2 legs */}
            <line x1="200" y1='150' x2='230' y2='200' className="figure-part" />
            <line x1="200" y1='150' x2='170' y2='200' className="figure-part" />
        </svg>


    )
}

export default Figure