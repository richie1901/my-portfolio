import React from 'react';

import HTML from '../assets/html.png';
import DOCKER from '../assets/docker.jpg';
import CSS from '../assets/css.png';
import GOLANG from '../assets/golang.jpg';
import JavaScript from '../assets/javascript.png';
import ReactImg from '../assets/react.png';
import Node from '../assets/node.png';
import FireBase from '../assets/firebase.png';
import AWS from '../assets/aws.png';
import GitHub from '../assets/github.png';
import Tailwind from '../assets/tailwind.png';
import Java from '../assets/java.png';
import Mysql from '../assets/MYSQL.png';
import Slide from 'react-awesome-reveal/Slide';

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-black'>
      {/* Container */}
      <Slide left>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full mt-0'>
        

          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
          
              <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto rounded-lg' src={Java} alt="HTML icon" />
                  <p className='my-4'>JAVA</p>
              </div>
              <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={DOCKER} alt="HTML icon" />
                  <p className='my-4'>DOCKER</p>
              </div>
              <div className='shadow-md shadow-[#6a8bb4] hover:scale-110 duration-500'>
                  <img className='w-20 mx-auto' src={GOLANG} alt="HTML icon" />
                  <p className='my-4'>GOLANG</p>
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
          </div>
      </div>
      </Slide>
    </div>
  );
};

export default Skills;
