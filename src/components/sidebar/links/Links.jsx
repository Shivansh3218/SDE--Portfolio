import { motion } from "framer-motion";

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};
const itemVariants = {
  open: {
    y: 0,
    opacity: 1,
  },
  closed: {
    y: 50,
    opacity: 0,
  },
};

const Links = () => {
  const items = ["Homepage", "Services", "Certifications", "Contact", "About"];

  return (
    <motion.div className="links" variants={variants}>
      {items.map((item) => {
         const href =
           item === "Certifications"
             ? "https://drive.google.com/drive/folders/16iOUuLblPn-FIJvDEI3UX8Ku-j9Z4ahG?usp=drive_link"
             : `#${item}`;
      return  <motion.a
          href={href}
          key={item}
          variants={itemVariants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {item}
        </motion.a>
      })}
    </motion.div>
  );
};

export default Links;
