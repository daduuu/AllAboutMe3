
import { Button, Typography } from "@material-tailwind/react";
import FadeIn from "react-fade-in";
import { useState } from "react";
import type { ButtonProps } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";
import { Link } from "react-router-dom";


export default function AboutMe() {

    const [reveal, setReveal] = useState(false);
    const [classLabel, setClassLabel] = useState('Classes I\'ve Taken!');

    const handleMouseEnterClassButton = () => setClassLabel("Classes I\'ve Taken! \u00bb");
    const handleMouseLeaveClassButton = () => setClassLabel("Classes I\'ve Taken!");
    
    const [projectLabel, setProjectLabel] = useState('Check Out My Projects!');

    const handleMouseEnterProjectButton = () => setProjectLabel("Check Out My Projects! \u00bb");
    const handleMouseLeaveProjectButton = () => setProjectLabel("Check Out My Projects!");

    return (
        <FadeIn>
            <div className="grid grid-cols-4 gap-5 lg:gap-12 pt-5">
            
                <div className="col-start-2 col-span-3 pt-5">
                    <Typography className="md:text-5xl text-2xl pt-5">
                        About Me
                    </Typography>
                </div>
                <div className="col-start-2 col-span-1">
                    <Typography className="md:text-xl text-xs">
                        I am currently pursuing a Computer Science B.S degree at UCLA. I love writing complex and intriguing programs that solve
                        various problems or tasks.
                    </Typography>
                </div>
                <div className="col-start-3 col-span-1">Image goes here</div>
                <div className="col-start-2 col-span-3">
                    <Typography className="md:text-2xl text-xl">
                        What have I've been up to?
                    </Typography>
                </div>
                <div className="col-start-2 col-span-1">
                        Image goes here
                </div>
                <div className="col-start-3 col-span-1">
                    <Typography className="md:text-xl text-base p-2">
                        SWE Intern @ Nvidia
                    </Typography>
                

                </div>
                <div className="col-start-2 col-span-1">
                        Image goes here
                </div>
                <div className="col-start-3 col-span-1">
                    <Typography className="md:text-xl text-base p-2">
                        Braine Lab at UCLA
                    </Typography>
                    <Typography className="md:text-xl text-base p-2">
                        ML Researcher
                    </Typography>
                    <Typography className="md:text-xl text-base p-2">
                        2022-2024
                    </Typography>
                    <Typography className="md:text-xl text-xs p-2">
                    Student ML Researcher exploring novel problems in situational modeling and image recognition.
                    </Typography>

                </div>
                <div className="col-start-2 col-span-1">
                        Image goes here
                </div>
                <div className="col-start-3 col-span-1">
                    <Typography className="md:text-xl text-base p-2">
                        UCLA
                    </Typography>
                    {/* <Typography className="md:text-xl text-base p-2">
                        Computer Science M.S. 2024-
                    </Typography> */}
                    <Typography className="md:text-xl text-base p-2">
                    Computer Science B.S. 2021-2024
                    </Typography>
                    <Button color="gray" className="m-2 normal-case " onClick={() => setReveal(!reveal)} onMouseEnter={handleMouseEnterClassButton} onMouseLeave={handleMouseLeaveClassButton}>
                    {classLabel}
                    </Button>
                    {
                        reveal && (
                            <div className="grid grid-cols-subgrid grid-cols-2 lg:gap-4 gap-5">
                                <div className="p-2">
                                    <Typography className="md:text-lg text-xs">
                                        Course1
                                    </Typography>
                                </div>
                                <div className="p-2">
                                    <Typography className="md:text-lg text-xs ">
                                        Course2
                                    </Typography>
                                </div>
                            </div>
                        )
                    }

                </div>

                <div className="col-start-2 col-span-1">
                        Image goes here
                </div>
                <div className="col-start-3 col-span-1">
                    <Typography className="md:text-xl text-base p-2">
                        Bialigy.com
                    </Typography>
                    <Typography className="md:text-xl text-base p-2">
                        SWE Intern
                    </Typography>
                    <Typography className="md:text-xl text-base p-2">
                        2020-2021
                    </Typography>
                    <Typography className="md:text-xl text-base p-2">
                    Created communication board to facilitate communication channels between students and instructors. 
                    </Typography>

                </div>

                    
            </div>
            <div className="flex justify-center p-5">
                <Button color="gray" className="m-2 normal-case"  onMouseEnter={handleMouseEnterProjectButton} onMouseLeave={handleMouseLeaveProjectButton}>
                    <Link to="/Projects">
                        {projectLabel}
                    </Link>
                
                </Button>
            </div>
        </FadeIn>
        
        
        
    
        
    );


}