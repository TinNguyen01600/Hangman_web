import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { motion } from 'framer-motion';

const Notification = ({ showNotification, wrongLetters }) => {
    const attempts = 6 - wrongLetters.length
    return (
        <>
            {showNotification && 
                <motion.div
                    className="notification-ctn"
                    animate={{y: [100, -15, -15, 100]}}
                    transition={{duration: 2.8,}}
                >
                    <WarningAmberIcon />
                    You have {attempts} attemp(s) left
                    <WarningAmberIcon />
                </motion.div>
            }
        </>
    )
}

export default Notification