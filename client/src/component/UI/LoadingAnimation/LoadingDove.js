import { motion } from 'framer-motion';

import doveSvg from '../../../assests/images/svg/white_dove.svg';
import styles from './LoadingDove.module.css';
import { Box, Typography } from '@mui/material';

const LoadingDove = (props) => { 
    return (
        <Box className={`${styles.bird_loader} ${props.className}`}>
        <motion.div
            animate={{ 
                x: [0, -2, 0, -3, 0],           // x axis wiggle
                y: [0, -4, -2, -1, 0],          // y axis flutter
                rotate: [0, -2, 1, -1, 0],      // subtle tilt
            }}
            transition={{
                duration: 1,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
    >
            <img src={doveSvg} alt="Bird flying" className={ styles.bird} />
            </motion.div>
            <Typography className={ styles.text}>{ props.text}</Typography>
        </Box>
    )

};

export default LoadingDove;