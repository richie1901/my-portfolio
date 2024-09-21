import React from 'react';
// import Slider from 'react-slick';
import '../index.css';  // Custom styles (optional)
// import Button from "@material-ui/core/Button";
// import MobileStepper from "@material-ui/core/MobileStepper";
// import Paper from "@material-ui/core/Paper";
// import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
// import Typography from "@material-ui/core/Typography";
// import { useTheme } from "@material-ui/core/styles";
// import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import { Box, Button, Typography, useTheme,Paper,MobileStepper } from "@mui/material";
import {ArrowBackIosNew,ArrowForwardIos} from '@mui/icons-material';

    // Collection of images with their labels and paths

//     import PostManQuestions from '../assets/postman_get_questions_postman.png';
// import PostManAnswers from '../assets/post_man_success_submit_answers_postman.png'
// import QuizAppCliAnswers from '../assets/cla.png';
// import QuizAppCliQuestions from '../assets/clq.png';
    const MyCollection = [
        {
            label: "First Picture",
            imgPath:
                require('../assets/postman_get_questions_postman.png'),
        },
        {
            label: "Second Picture",
            imgPath:
                require('../assets/post_man_success_submit_answers_postman.png'),
        },
        {
            label: "Third Picture",
            imgPath:
            require('../assets/clq.png'),
        },
        {
            label: "Forth Picture",
            imgPath:
                require('../assets/cla.png'),
        },
    ];

const ImageSlider = () => {


  const CollectionSize = MyCollection.length;
    const theme = useTheme();
    const [index, setActiveStep] = React.useState(0);
    
     // Function to go to the next picture
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };


  return (
    <div
        style={{
            marginLeft: "40%",
        }}
    >
       
        <div
            style={{
                maxWidth: 400,
                flexGrow: 1,
            }}
        >
            {/* <Paper
                square
                elevation={0}
                style={{
                    height: 50,
                    display: "flex",
                    paddingLeft: theme.spacing(4),
                    backgroundColor: theme.palette.background.blue,
                    alignItems: "center",
                }}
            >
                <Typography>{MyCollection[index].label}</Typography>
            </Paper> */}
            <img
                    src={MyCollection[index].imgPath}
                    style={{
                        height: 255,
                        width: "200%",
                        maxWidth: 1000,
                        display: "flex",
                        overflow: "hidden",
                    }}
                    alt={MyCollection[index].label}
                />
                <MobileStepper
                    variant="text"
                    position="static"
                    index={index}
                    steps={CollectionSize}
                    nextButton={
                        <Button
                            size="small"
                            onClick={goToNextPicture}
                            disabled={index === CollectionSize - 1}
                        >
                            Next
                            {theme.direction !== "rtl" ? (
                                <ArrowForwardIos />
                            ) : (
                                <ArrowBackIosNew />
                            )}
                               </Button>
                    }
                />
            </div>
        </div>
    );
};

export default ImageSlider;
