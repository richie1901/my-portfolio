import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import myImage from '../assets/myImage.png';
import Philip from '../assets/philip.png';
import Alfy from '../assets/alfy.png';
import Kelvin from '../assets/kelvin.png';
import Elikem from '../assets/elikem.png';

const References = () => {
  return (
    <section id="testimonials" className="pt-32">
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">TESTI</span>MONIALS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
            <p className="mt-4 mb-4"></p>
          </div>
          {/* <p className="mt-2 mb-2">Here's what people have about Richard!</p> */}
        </div>
      </motion.div>
     
<div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-4">
<motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000008] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-xl font-semibold text-white dark:text-white">TrustWorthy</h3>
            <p class="my-4"><span class="text-3xl">“</span> Richard has excellent research skills, is an articulate communicator
            and a team player.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Elikem} alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Elikem Mensah Ackah</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Technical Supervisor at IT Consortium</div>
            </div>
        </figcaption>    
    </figure>
    </motion.div>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000008] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-xl font-semibold text-white dark:text-white">Confidence</h3>
            <p class="my-4"><span class="text-3xl">“</span> He is detail oriented and passionate about coding, his programs are
            of top quality.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Kelvin} alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Kelvin Addae Kwarteng</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at IT Consortium</div>
            </div>
        </figcaption>    
    </figure>
    </motion.div>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000008] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-xl font-semibold text-white dark:text-white">Meet Deadlines</h3>
            <p class="my-4"><span class="text-3xl">“</span> He has the capabilities of meeting deadlines as scheduled, Great Personality skills.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Philip} alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Philip Kwadwo Appiah</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Product Manager | Java Developer at IT Consortium</div>
            </div>
        </figcaption>    
    </figure>
    </motion.div>
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000008] border-b border-gray-200 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r dark:bg-gray-800 dark:border-gray-700">
        <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 dark:text-gray-400">
            <h3 class="text-xl font-semibold text-white dark:text-white">Well Rounded</h3>
            <p class="my-4"><span class="text-3xl">“</span> He is able to foresee the impact of software he designs stays with evolving technology concepts.</p>
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={Alfy} alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Alfred Ternor</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">Software Engineer at IT Consortium</div>
            </div>
        </figcaption>    
    </figure>
    </motion.div>
</div>

    </section>
  );
};

export default References;
