import { motion } from "framer-motion"
const Word = ({ selectedWord, correctLetters }) => {
    const boxVariant = {
        visible: {
            transition: { staggerChildren: 0.2 }
        }
    }
    const boxItemVariant = {
        initial: { y: '40vw' },
        visible: {
            y: 0,
            rotate: 720,
            transition: {
                type: 'spring',
                stiffness: 60,
            }
        }
    }

    return (
        <motion.div
            className="word"
            variants={boxVariant}
            initial='initial'
            animate='visible'
        >
            {selectedWord.split('').map((letter, i) => (
                <motion.span
                    className='letter'
                    key={i}
                    variants={boxItemVariant}
                >
                    {correctLetters.includes(letter) ? letter : ''}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default Word