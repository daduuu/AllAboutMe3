
import { Button, Typography } from "@material-tailwind/react";
import FadeIn from "react-fade-in";
import { useState } from "react";
import type { ButtonProps } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";


export default function AboutMe() {

    const [reveal, setReveal] = useState(false);
    const [label, setLabel] = useState('See My Courses!');

    const handleMouseEnter = () => setLabel("See My Courses! \u00bb");
    const handleMouseLeave = () => setLabel("See My Courses!");
    


    return (
        
        <div className="grid grid-cols-4 gap-4 pt-5">
            
            <div className="col-start-2 col-span-3 pt-5">
                <Typography className="md:text-2xl text-xl pt-5">
                    About Me
                </Typography>
            </div>
            <div className="col-start-2 col-span-1">
                <Typography className="md:text-xl text-xs">
                    I am currently pursuing a Computer Science B.S degree at UCLA. I love writing complex and intriguing programs that solve
                    various problems or tasks. I have a strong passion for both computer science and math and I love how
                    they go hand in hand in solving various problems. In my free time I like to cook and practice
                    Tennis.
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
                    Braine Lab at UCLA
                </Typography>
                <Typography className="md:text-xl text-base p-2">
                    ML Researcher
                </Typography>
                <Typography className="md:text-xl text-base p-2">
                    2022-2024
                </Typography>
                <Typography className="md:text-xl text-base p-2">
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
                <Typography className="md:text-xl text-base p-2">
                    Computer Science B.S
                </Typography>
                <Typography className="md:text-xl text-base p-2">
                    2021-2024
                </Typography>
                <Button color="blue" className="m-2 normal-case" onClick={() => setReveal(!reveal)} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{label}</Button>
                {
                    reveal && (
                        <div className="grid grid-cols-subgrid gap-4">
                            <div className="p-2">
                                <Typography className="md:text-lg text-base">
                                    Course1
                                </Typography>
                            </div>
                            <div className="p-2">
                                <Typography className="md:text-lg text-base ">
                                    Course2
                                </Typography>
                            </div>
                        </div>
                    )
                }

            </div>
            
            
    
                
        </div>
    
        
    );


}