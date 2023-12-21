import { motion } from "framer-motion"

const Figure = ({ wrongLetters }) => {
    const error = wrongLetters.length
    return (
        <svg width="250" height="200" className="figure-ctn">
            {/* Rod */}
            <line x1="200" y1='50' x2='200' y2='10' className="figure-part" />
            <line x1="200" y1='10' x2='50' y2='10' className="figure-part" />
            <line x1="50" y1='10' x2='50' y2='290' className="figure-part" />
            <line x1="0" y1='290' x2='300' y2='290' className="figure-part" />
            <line x1="100" y1='10' x2='50' y2='50' className="figure-part" />

            <motion.svg
                // initial={{ opacity: 0 }}
            >
                {/* Head */}
                {error > 0 && <circle cx="200" cy="70" r="20" className="figure-part" fill="none" />}
                {/* Body */}
                {error > 1 && <line x1="200" y1='90' x2='200' y2='150' className="figure-part" />}
                {/* 2 hands */}
                {error > 2 && <line x1="200" y1='90' x2='230' y2='130' className="figure-part" />}
                {error > 3 && <line x1="200" y1='90' x2='170' y2='130' className="figure-part" />}
                {/* 2 legs */}
                {error > 4 && <line x1="200" y1='150' x2='230' y2='200' className="figure-part" />}
                {error > 5 && <line x1="200" y1='150' x2='170' y2='200' className="figure-part" />}
            </motion.svg>
        </svg>


    )
}

export default Figure