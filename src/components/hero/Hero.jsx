import "./hero.scss";
import { motion } from "framer-motion";

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        <motion.div
          className="textContainer"
          variants={textVariants}
          initial="initial"
          animate="animate"
        >
          <motion.h2 variants={textVariants} className="hero-heading">
            Shivansh Rawat
          </motion.h2>
          <motion.h1 variants={textVariants}>
            Full Stack Developer and Trainer
          </motion.h1>
          <motion.p variants={textVariants}>
            <p>
              I am a software engineer currently working at{" "}
              <strong
                style={{
                  color: "purple",
                }}
              >
                Samyarth
              </strong>{" "}
              on an laptop management automation software. I am focused on
              automating various processes such as software installations
              remotely controlling an entire fleet of laptops.
            </p>
          </motion.p>
          <motion.div variants={textVariants} className="buttons">
            {/* <motion.button variants={textVariants}>
              <a href="https://drive.google.com/drive/folders/16iOUuLblPn-FIJvDEI3UX8Ku-j9Z4ahG?usp=drive_link">
                View Certifications
              </a>
            </motion.button>
            <motion.button variants={textVariants} style={{
              cursor: "pointer",
            }}>
              {" "}
              <a href="#contact">Contact Me</a>
            </motion.button> */}
          </motion.div>
          <motion.img
            variants={textVariants}
            animate="scrollButton"
            src="/scroll.png"
            alt=""
          />
        </motion.div>
      </div>
      <motion.div
        className="slidingTextContainer"
        variants={sliderVariants}
        initial="initial"
        animate="animate"
      >
        Developer Mentor Engineer Trainer
      </motion.div>
    </div>
  );
};

export default Hero;
