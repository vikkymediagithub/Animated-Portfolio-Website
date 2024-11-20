import { motion } from 'framer-motion';
import './hero.scss';

const textVariants = {
  initial: { x: -500, opacity: 0 },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.2,
    },
  },
};

const SliderVariants = {
  initial: { x: 0 },
  animate: {
    x: '-220%',
    transition: {
      duration: 10, // Adjusted duration for a smoother effect
      repeat: Infinity,
      repeatType: 'loop', // Corrected invalid 'morrow' to 'loop'
      ease: 'linear', // Smooth linear scrolling effect
    },
  },
};

const childVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const scrollButtonVariants = {
  initial: { opacity: 0, y: 0 },
  animate: {
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      duration: 2,
      repeat: Infinity,
      repeatType: 'loop',
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        {/* Text Container */}
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={childVariants}>Victor Joseph</motion.h2>
          <motion.h1 variants={childVariants}>Web Developer and UI Designer</motion.h1>
          <motion.div variants={childVariants} className="buttons">
            <motion.button variants={childVariants}>
              See the Latest Work
            </motion.button>
            <motion.button variants={childVariants}>Contact Me</motion.button>
          </motion.div>
          <motion.img
            variants={scrollButtonVariants}
            initial="initial"
            animate="animate"
            src="/src/assets/scroll.png"
            alt="Scroll Icon"
            className="scrollIcon"
          />
        </motion.div>

        {/* Sliding Text */}
        <motion.div
          className="slidingTextContainer"
          variants={SliderVariants}
          animate="animate"
          initial="initial"
        >
          Writer, Frontend Developer, Freelancer, Video Maker, Content Writer
        </motion.div>

        {/* Image Container */}
        <div className="imageContainer">
          <img
            src="/src/assets/hero.png"
            alt="Hero Illustration"
            className="heroImage"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
