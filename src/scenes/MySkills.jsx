import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import HTML from '../assets/html.png';
import CSS from '../assets/css.png';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import Lambda from '../assets/lambda.png';
import MongoDb from '../assets/mongo.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Spring from '../assets/spring.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import Mysql from '../assets/MYSQL.png';
import Slide from 'react-reveal/Slide';

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-28 pb-48">
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
            <span className="text-red">SKI</span>LLS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        {/* <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p> */}
      </motion.div>
      
      <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto rounded-lg' src={Java} alt="HTML icon" />
              <p className='my-4'>JAVA</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
              <p className='my-4'>HTML</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={CSS} alt="HTML icon" />
              <p className='my-4'>CSS</p>
          </div>
          
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon" />
              <p className='my-4'>JAVASCRIPT</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Mysql} alt="HTML icon" />
              <p className='my-9'>MYSQL</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon" />
              <p className='my-4'>REACT</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={GitHub} alt="HTML icon" />
              <p className='my-4'>GITHUB</p>
          </div>
         
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={AWS} alt="HTML icon" />
              <p className='my-4'>AWS</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={MongoDb} alt="HTML icon" />
              <p className='my-4'>MONGO DB</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Node} alt="HTML icon" />
              <p className='my-4'>Node JS</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Lambda} alt="HTML icon" />
              <p className='my-4'>LAMBDA SERVELESS</p>
          </div>
          <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
              <img className='w-20 mx-auto' src={Spring} alt="HTML icon" />
              <p className='my-4'>SPRING FRAMEWORK</p>
          </div>
      </div>
    </section>
  );
};

export default MySkills;