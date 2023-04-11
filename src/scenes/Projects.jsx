import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import WorkImg3 from "../assets/work3.png";
import WorkImg1 from "../assets/work1.png";
import WorkImg2 from "../assets/work2.png";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectTest = ({
  title,
  titleDescription,
  setSelectedPage,
  projectDescription,
}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue overflow-y-scroll hover:bg-violet-600 active:bg-violet-600 focus:outline-none`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-xl font-playfair">{titleDescription}</p>
        <p className="mt-2">
          {projectDescription}
          <Button
            // type="submit"
            // color="secondary"
            style={{ backgroundColor: "green" }}
            variant="contained"
            startIcon={<LoginIcon />}
          >
            <AnchorLink
              onClick={() => setSelectedPage("contact")}
              href="#contact"
            >
              Request Demo
            </AnchorLink>
          </Button>
        </p>
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  const [selectedPage, setSelectedPage] = useState("projects");
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
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
        <p className="mt-10 mb-10">
          Happy you found yourself here. Checkout some works for your perusal
          reference.
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-12"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          {/* <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div> */}
          <ProjectTest
            title="management"
            titleDescription="Employee Management System"
            setSelectedPage={setSelectedPage}
            projectDescription="This Project was built with Java Springboot as the backend framework and react.js as the from facing framework"
          />
          {/* <Project title="Project 2" /> */}
          <ProjectTest
            title="rolebased"
            titleDescription="AUTHENTICATION/AUTHORISATION ROLE BASED"
            setSelectedPage={setSelectedPage}
            projectDescription="This Project was built with Java Springboot for JWT role based authentication and authorisation"
          />

          {/* ROW 2 */}
          <ProjectTest
            title="AdminSalesDashboard"
            titleDescription="Sales Super Admin Management Dashboard"
            setSelectedPage={setSelectedPage}
            projectDescription="This Project was solely built with react.js with mock data for testing entire dashboard processing"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
