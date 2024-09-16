import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "Boat ecommerce Vanilla Js",
    img: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Developed a boat booking platform clone using Vanilla JavaScript, focusing on core functionality such as user authentication and seamless booking processes. Designed a clean, intuitive UI to enhance user experience, with smooth transitions and efficient handling of user interactions.",
    link: "https://github.com/Shivansh3218/Boat-Clone.git",
  },
  {
    id: 2,
    title: "Next.js Blog",
    img: "https://images.pexels.com/photos/267389/pexels-photo-267389.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Developed a full-stack blog application using Next.js, Prisma, and MongoDB. Implemented dynamic content management, user authentication, and CRUD functionality for posts. Leveraged Prisma for seamless database interactions with MongoDB, ensuring efficient data retrieval and storage. Designed a responsive and clean UI, optimizing both server-side and client-side performance to deliver a smooth user experience.",
    link: "https://github.com/Shivansh3218/new-blog-app.git",
  },
  {
    id: 3,
    title: "Crypto Currency Dashboard",
    img: "https://images.pexels.com/photos/26743048/pexels-photo-26743048/free-photo-of-stock-charts-on-tablet-screen-business-and-economy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    desc: "Built a cryptocurrency dashboard using JavaScript, integrating real-time data from APIs to display market trends, prices, and historical data. Implemented interactive charts and filters to allow users to track and analyze various cryptocurrencies. Focused on a clean, intuitive UI with performance optimizations for handling large datasets, ensuring a smooth user experience.",
  },
  {
    id: 4,
    title: "Meraki Extension",
    img: "https://images.pexels.com/photos/4226122/pexels-photo-4226122.jpeg",
    desc: "Developed a browser extension using Vanilla JavaScript to record online meetings and automatically track attendance. Integrated meeting recording functionality with an intuitive interface, allowing users to start, stop, and save recordings. Implemented automated attendance logging, capturing participant details and generating reports. Focused on seamless user experience and efficient performance for real-time tracking.",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);

  return (
    <section >
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            
            <a href={item.link}><button>See Demo</button></a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Portfolio = () => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
};

export default Portfolio;
