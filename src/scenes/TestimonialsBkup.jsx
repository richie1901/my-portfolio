import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import { Carousel } from 'react-responsive-carousel';
import { useEffect, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Philip from '../assets/philip.png';
import Alfy from '../assets/alfy.png';
import Kelvin from '../assets/kelvin.png';
import Elikem from '../assets/elikem.png';


const imageData = [
  {
    label: "Well Rounded",
    title: "Software Engineer at IT Consortium",
    name: "Alfred Ternor",
    alt: "image1",
    src:"../assets/alfy.png",
    description:"This Project was built with Java Springboot for JWT role based authentication and authorisation"
  },
  {
    label: "Sales Super Admin Management Dashboard",
    title: "Software Engineer at IT Consortium",
    name: "Alfred Ternor",
    alt: "image2",
    src:"../assets/kelvin.png",
    description:"This Project was solely built with react.js with mock data for testing entire dashboard processing"
  },
  {
    label: "Employee Management System",
    title: "Software Engineer at IT Consortium",
    name: "Alfred Ternor",
    alt: "image3",
    src:"../assets/elikem.png",
    description:"This Project was built with Java Springboot as the backend framework and react.js as the from facing framework"
  },
  {
    label: "Employee Management System",
    title: "Software Engineer at IT Consortium",
    name: "Alfred Ternor",
    alt: "image3",
    src:"../assets/philip.png",
    description:"This Project was built with Java Springboot as the backend framework and react.js as the from facing framework"
  }
];

const renderSlides = imageData.map((image) => (
  <div >
  
  <motion.div

        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0.1, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-black border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-xl font-semibold text-white dark:text-white">{image.label}</h3>
            <p class="my-4"><span class="text-3xl">“</span> {image.description}</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3 mt-6">
            <img class="rounded-full h-7" src={image.src} alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>{image.name}</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">{image.title}</div>
            </div>
        </figcaption>    
    </figure>
    </motion.div>
    </div>
));

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState();
  function handleChange(index) {
    setCurrentIndex(index);
  }
  return (
    <section id="testimonials" className="pt-32 pb-16">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0.1, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">TESTI</span>MONIALS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
          <p className="mt-2 mb-2">Here's what people have about Richard!</p>
        </div>
      </motion.div>
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
     <Carousel
        showArrows={true}
        autoPlay={true}
        infiniteLoop={true}
        selectedItem={imageData[currentIndex]}
        onChange={handleChange}
        className="carousel-container"
      >
        
        {renderSlides}
      </Carousel>
      </motion.div>
    </section>
  );
};

export default Testimonials;
