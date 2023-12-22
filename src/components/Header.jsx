import { motion } from "framer-motion"

const Header = () => {
    const boxVariant = {
        initial: { y: '-10vw' },
        visible: {
            y: 0,
            transition: {
                when: 'beforeChildren',
                staggerChildren: 0.5
            }
        }
    }
    const boxItemVariant = {
        initial: { y: '-10vw' },
        visible: {y: 0,}
    }
    return (
        <motion.div
            className="header"
            variants={boxVariant}
            initial='initial'
            animate='visible'
        >
            <motion.h1 variants={boxItemVariant}>HANG-MAN</motion.h1>
            <motion.p variants={boxItemVariant}>Find the hidden word - Enter a letter</motion.p>
        </motion.div>
    )
}

export default Header