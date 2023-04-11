import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import myImage from '../assets/myImage.png';
import Bitmoji from '../assets/bitmoji.png';

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-5/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:rounded-t-[400px]
            before:w-full before:max-w-[400px] md:before:max-w-[600px] "
          >
            <img
              alt="profile"
              // className=" z-2 w-full max-w-[400px] md:max-w-[400px]"
              className=" rounded-full max-w-[200px] md:max-w-[200px]"
              src={myImage}
            />
            <div className="basis-1/5 z-5 mt-16 md:mt-2 flex justify-center md:order-2">
            
            </div>
          </div>
        ) : (
          <img
            alt="profile"
            className="rounded-full max-w-[200px] md:max-w-[200px]"
            src={myImage}
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-4/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0.1, x: -10 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <p className="text-6xl font-playfair z-10 text-center md:text-start ">
            Richard Kabu Adekponya {""} */}
            {/* <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[100px] before:z-[-1] text-3xl"
            >
              Esper
            </span>
            <span
              className="xs:relative xs:text-deep-blue xs:font-semibold z-20 xs:before:content-brush
              before:absolute before:-left-[25px] before:-top-[70px] before:z-[-1] text-3xl"
            >
              Esper
            </span> */}
          {/* </p> */}
          <p className="mt-10 mb-7 text-xl text-center md:text-start">
          <span className="text-6xl font-playfair z-10 text-center md:text-start text-[#1da1aa]">
            Hi   Richard Kabu Adekponya Here!
            </span>
            </p>
          <p className="mt-10 mb-7 text-xl text-center md:text-start">
          {/* <span className="text-6xl font-playfair z-10 text-center md:text-start text-[#1da1aa]">
            Richard Kabu Adekponya</span>  */}
            I'm a<span className='text-xl text-pink-400' >  Fullstack Developer.</span> I'm <span className='text-xl text-pink-400' >  driven, a team player, a very quick learner, a good communicator, highly self-motivated</span> and able to work without much <span className='text-xl text-pink-400' >supervision.</span> Outside of code you can find me on the pitch or at the studio.</p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-10 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0.1, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          {/* <AnchorLink
            className="bg-blue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink> */}
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-3 px-7"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className=" hover:text-black
            hover:font-bold
            font-bold transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Keep In Touch
            </div>
          </AnchorLink>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;