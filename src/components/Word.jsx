import { motion } from "framer-motion"
import { useSelector } from "react-redux"

const Word = () => {
    const boxVariant = {
        initial: { x: '75vw' },
        visible: {
            x: 0,
            transition: { 
                delay: 1.5,
                when: 'beforeChildren', 
                staggerChildren: 0.3 
            }
        }
    }
    const boxItemVariant = {
        initial: { x: '75vw' },
        visible: {
            x: 0,
            rotate: -1440,
            transition: {
                type: 'spring',
                stiffness: 40,
            }
        }
    }

    const selectedWord = useSelector(state => state.word.selectedWord)
    const correctLetters = useSelector(state => state.word.correctLetters)

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
                    whileHover={{ scale: 1.5 }}
                >
                    {correctLetters.includes(letter) ? letter : ''}
                </motion.span>
            ))}
        </motion.div>
    )
}

export default Word