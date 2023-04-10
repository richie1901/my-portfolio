import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

const Resume = () => {
  return (
    <section id="resume" className="pt-32 pb-16">
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
            <span className="text-red">MY</span>RESUME
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
          <p className="mt-10">
          Mind taking a look?
        </p>
        </div>
      </motion.div>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 500,
          height: 500,
        },
      }}
    >
      <Paper elevation={0} className="bg-[#1da1aa]"/>
      <Paper elevation={0} />
    </Box>
    </section>
  );
};

export default Resume;