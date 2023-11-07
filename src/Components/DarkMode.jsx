import { Icon } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { BsFillMoonStarsFill, BsFillSunFill } from 'react-icons/bs';
import { motion } from 'framer-motion';

const DarkMode = ({ colorMode, toggleColorMode, isToggled, setIsToggled }) => {
  const [animate, setAnimate] = useState(false);
  const modeClick = () => {
    toggleColorMode();
    setIsToggled(!isToggled);
    setAnimate(true); // Set animate to true when the button is clicked.

    // Reset the animation state after a short delay to allow the animation to complete.
    setTimeout(() => {
      setAnimate(false);
    }, 500); // Adjust the duration to match your animation duration.
  };
  return (
    <motion.div
      onClick={modeClick}
      initial={{ scale: 1, rotate: 0 }}
      animate={{
        scale: isToggled ? 1.2 : 1,
        rotate: isToggled ? 90 : 0,
        borderRadius: isToggled ? '100%' : '0%',
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.8, rotate: -90, borderRadius: '100%' }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Icon
        color='yellow.500'
        boxSize={5}
        mr={2}
        as={colorMode === 'light' ? BsFillSunFill : BsFillMoonStarsFill}
        cursor='pointer'
      />
    </motion.div>
  );
};

export default DarkMode;
