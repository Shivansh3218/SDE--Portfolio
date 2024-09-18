import { useRef } from "react";
import "./services.scss";
import { motion, useInView } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    y: 100,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

const Services = () => {
  const ref = useRef();

  const isInView = useInView(ref, { margin: "-100px" });

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      // animate="animate"
      // whileInView="animate"
      ref={ref}
      animate={"animate"}
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on leveraging technology <br /> to accelerate your brand’s
          growth and innovation.
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Distinct</motion.b>{" "}
            Projects
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>I've </motion.b> worked
            on
          </h1>
          <button>IN A TEAM</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Meraki Learn </h2>
          <br />
          <p>Developed structured
            learning pathways to guide users through various coding concepts.
            Implemented secure user authentication systems to ensure seamless
            and personalized user experiences. Focused on enhancing the
            platform’s accessibility and user engagement
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>C4CA</h2>
          <p>
            An Amazon-backed project supporting
            1.5 lakh students in accessing a Learning Management System (LMS).
            Built interactive dashboards for partners , enabling
            them to monitor student progress and manage educational resources
            efficiently. Created user-friendly interface and
            streamlining data management for enhanced educational impact
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Navgurukul</h2>
          <p>
            Contributed to the development of the NavGurukul website, an
            educational platform aimed at empowering underprivileged students
            with coding and life skills. Focused on optimizing the platform for improved performance
            and engagement.
          </p>
          <button>Go</button>
        </motion.div>
        <motion.div
          className="box"
          whileHover={{ background: "lightgray", color: "black" }}
        >
          <h2>Scratch</h2>
          <p>
           A platform designed to introduce 
            students to coding through interactive and beginner-friendly
            projects. Focused on enhancing the platform’s structure.Built a user
            authentication system to provide personalized learning experiences.
          </p>
          <button>Go</button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Services;
