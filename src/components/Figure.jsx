const Figure = () => {
    return (
        <svg width="250" height="200">
            {/* Head */}
            <circle cx="200" cy="70" r="20" />
            {/* Body */}
            <line x1="200" y1='90' x2='200' y2='150' className="figure-part"/>
            {/* 2 hands */}
            <line x1="200" y1='90' x2='230' y2='130' className="figure-part"/>
            <line x1="200" y1='90' x2='170' y2='130' className="figure-part"/>
            {/* 2 legs */}
            <line x1="200" y1='150' x2='230' y2='200' className="figure-part"/>
            <line x1="200" y1='150' x2='170' y2='200' className="figure-part"/>
        </svg>

    )
}

export default Figure