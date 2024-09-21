import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import myImage from '../assets/myImage.png';
import Philip from '../assets/philip.png';
import PostManQuestions from '../assets/postman_get_questions_postman.png';
import PostManAnswers from '../assets/post_man_success_submit_answers_postman.png'
import QuizAppCliAnswers from '../assets/cla.png';
import QuizAppCliQuestions from '../assets/clq.png';
import { Carousel } from 'react-responsive-carousel';
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import ImageSlider from "./ImageSlider";
import ProjectCarousel from "./ProjectsCarousel";

const ProjectsNew = () => {
  return (
    <section id="projects" className="pt-32">
      <motion.div
        className="md:w-2/7 mx-auto text-center"
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
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/5" />
            <p className="mt-4 mb-4"></p>
          </div>
          {/* <p className="mt-2 mb-2">Here's what people have about Richard!</p> */}
        </div>
      </motion.div>
     
<div class="grid mb-8 border border-gray-700 rounded-lg shadow-sm dark:border-gray-200 md:mb-12 md:grid-cols-2">
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
        {/* <ImageSlider/> */}
    <figure class="flex flex-col items-center justify-center p-8 text-center bg-[#000000] #000000 rounded-t-lg md:rounded-t-none md:rounded-tl-lg md:border-r #e22929 #000000">
    <blockquote class="max-w-2xl mx-auto mb-4 text-white lg:mb-8 #000000">
            <h3 class="text-xl font-semibold text-white dark:text-white">Quiz App</h3>
            {/* <img src={QuizAppCliQuestions} width={250} height={250}></img>
            <img src={PostManQuestions} width={300} height={300}></img>
            <img src={QuizAppCliAnswers} width={300} height={300}></img>
            <img src={PostManAnswers} width={300} height={300}></img> */}
            <ImageSlider/>
            {/* <p class="text-sml font-semibold text-white dark:text-white"> Richard has excellent research skills, is an articulate communicator
            and a team player.</p> */}
            <Button
            // type="submit"
            // color="secondary"
            style={{ backgroundColor: "green" }}
            variant="contained"
            startIcon={<LoginIcon />}
            href="https://github.com/richie1901/quiz-app-cli"
            target="_blank"
          >Repository</Button>
            {/* <a href="https://github.com/richie1901/quiz-app-cli" target="_blank">Repository</a> */}
        </blockquote>
        <figcaption class="flex items-center justify-center space-x-3">
            <img class="rounded-full w-9 h-9" src={QuizAppCliQuestions} alt="profile picture"></img>
            <div class="space-y-0.5 font-medium dark:text-white text-left">
                <div>Golang</div>
                <div class="text-sm text-gray-500 dark:text-gray-400">This Quiz App Cli/Server project was built with Golang using Cobra as the cli for client side quiz interaction and a server acting as the backend for processing all further requests</div>
            </div>
        </figcaption>    
    </figure>
    </motion.div>

</div>

    </section>
  );
};

export default ProjectsNew;
