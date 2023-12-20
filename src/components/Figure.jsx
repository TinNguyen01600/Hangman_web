const Figure = () => {
    return (
        <svg width="250" height="200">
            {/* Head */}
            <circle cx="140" cy="70" r="20" />
            {/* Body */}
            <line x1="140" y1='90' x2='140' y2='150'
                style={{
                    stroke: 'black',
                    strokeWidth: 4
                }} 
            />
            {/* 2 hands */}
            <line x1="140" y1='90' x2='170' y2='130'
                style={{
                    stroke: 'black',
                    strokeWidth: 4
                }} 
            />
            <line x1="140" y1='90' x2='110' y2='130'
                style={{
                    stroke: 'black',
                    strokeWidth: 4
                }} 
            />
            {/* 2 legs */}
            <line x1="140" y1='150' x2='170' y2='200'
                style={{
                    stroke: 'black',
                    strokeWidth: 4
                }} 
            />
            <line x1="140" y1='150' x2='110' y2='200'
                style={{
                    stroke: 'black',
                    strokeWidth: 4
                }} 
            />
        </svg>

    )
}

export default Figure