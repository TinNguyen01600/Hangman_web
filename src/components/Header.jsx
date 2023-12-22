import { motion } from "framer-motion"

const Header = () => {
    return (
        <div className="header">
            <motion.h1
                initial={{ y: '-100vw' }}
                animate={{
                    y: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 60
                    }
                }}
            >
                HANG-MAN
            </motion.h1>
            <p>Find the hidden word - Enter a letter</p>
        </div>
    )
}

export default Header