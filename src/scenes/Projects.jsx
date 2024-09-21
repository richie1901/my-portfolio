import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import WorkImg3 from "../assets/work3.png";
import WorkImg1 from "../assets/work1.png";
import WorkImg2 from "../assets/work2.png";
import Rolebased from "../assets/rolebased.png";
import AdminSalesDashboard from "../assets/AdminSalesDashboard.png";
import Management from "../assets/management.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
// import Carousel from 'react-bootstrap/Carousel';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import 'bootstrap/dist/css/bootstrap.min.css';


const imageData = [
  {
    label: "Quiz App",
    alt: "image1",
    src:require('../assets/quiz-app.jpeg'),
    href:"https://github.com/richie1901/quiz-app-cli",
    repo:"Repository",
    description:"This Quiz App Cli/Server project was built with Golang using Cobra as the cli for client side quiz interaction and a server acting as the backend for processing all further requests"
  },
  {
    label: "Quiz App",
    alt: "image2",
    src:require('../assets/cla.png'),
    href:"https://github.com/richie1901/quiz-app-cli",
    repo:"Repository",
    description:"This Quiz App Cli/Server project was built with Golang using Cobra as the cli for client side quiz interaction and a server acting as the backend for processing all further requests"
  },
  {
    label: "Quiz App",
    alt: "image3",
    src:require('../assets/pq.png'),
    href:"https://github.com/richie1901/quiz-app-server",
    repo:"Repository",
    description:"This Quiz App Cli/Server project was built with Golang using Cobra as the cli for client side quiz interaction and a server acting as the backend for processing all further requests"
  },
  {
    label: "Quiz App",
    alt: "image4",
    src:require('../assets/ps.png'),
    href:"https://github.com/richie1901/quiz-app-server",
    repo:"Repository",
    description:"This Quiz App Cli/Server project was built with Golang using Cobra as the cli for client side quiz interaction and a server acting as the backend for processing all further requests"
  },

  {
    label: "Sales Super Admin Management Dashboard",
    alt: "image2",
    src:require('../assets/AdminSalesDashboard.png'),
    href:"https://github.com/richie1901/",
    repo:"Demo",
    description:"This Project was solely built with react.js with mock data for testing entire dashboard processing"
  },
  {
    label: "Employee Management System",
    alt: "image3",
    src:require('../assets/management.png'),
    href:"https://github.com/richie1901/",
    repo:"Demo",
    description:"This Project was built with Java Springboot as the backend framework and react.js as the from facing framework"
  },
  {
    label: "Employee Management System",
    alt: "image3",
    src:require('../assets/work1.png'),
    href:"https://github.com/richie1901/",
    repo:"Demo",
    description:"This Project was built with Java Springboot as the backend framework and react.js as the from facing framework"
  },
  {
    label: "Employee Management System",
    alt: "image3",
    src:require('../assets/work3.png'),
    href:"https://github.com/richie1901/",
    repo:"Demo",
    description:"This Project was built with Java Springboot as the backend framework and react.js as the from facing framework"
  }
];
const renderSlides = imageData.map((image) => (
  
  <div className="carousel-container" key={image.alt}>
   
          
    <img src={image.src} alt={image.alt} />
    
    <Button
            // type="submit"
            // color="secondary"
            style={{ backgroundColor: "black" }}
            variant="contained"
            startIcon={<LoginIcon />}
          >
            {/* <AnchorLink
              // onClick={() => setSelectedPage("contact")}
              href="#https://github.com/richie1901/quiz-app-cli"
            >
              Request Demo
            </AnchorLink> */}
                        
            <a href={image.href} target="_blank" rel="noreferrer">
          {image.repo}
        </a>
          </Button>
          <p className="mt-5 bg-white-100 text-white">
    {image.description}</p>
  </div>
  
));

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState();
  
  function handleChange(index) {
    setCurrentIndex(index);
  }

  return (
    <section id="projects" className="pt-48 pb-48">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-20 mb-20">
          Happy you found yourself here. Checkout some works for your perusal
          reference.
        </p>
      </motion.div>
      <div class="carousel-wrapper">
    {/* <Carousel showArrows={true} onChange={onChange} onClickItem={onClickItem} onClickThumb={onClickThumb}> */}
    <motion.div
        className="md:w-1/1 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className=""
      >
        
        {renderSlides}
      </Carousel>
      </motion.div>
            </div>
    </section>
  );
};

export default Projects;
