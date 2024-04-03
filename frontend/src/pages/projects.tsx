
import { Button, Typography } from "@material-tailwind/react";
import FadeIn from "react-fade-in";
import { useState } from "react";
import type { ButtonProps } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";


export default function Projects() {

    const [reveal, setReveal] = useState(false);
    const [label, setLabel] = useState('Contact Me!');

    const handleMouseEnter = () => setLabel("Contact Me! \u00bb");
    const handleMouseLeave = () => setLabel("Contact Me!");
    


    return (
        <FadeIn>
            <div className="grid grid-cols-4 gap-12 pt-5">
                
                <div className="col-start-2 col-span-3 pt-5">
                    <Typography className="md:text-5xl text-2xl pt-5">
                        Projects
                    </Typography>
                    
                </div>
                <div className="col-start-2 col-span-1">
                    <Typography className="md:text-3xl text-xl pb-2 flex">
                        TasteBuds 
                        <Link to="https://github.com/daduuu/CS130">
                            <ArrowTopRightOnSquareIcon className="text-blue-900 h-4 w-4 lg:h-5 lg:w-5 lg:m-2 m-1 shrink-0"/>
                        </Link>
                    </Typography>

                    <Typography className="md:text-lg text-xs">
                        Hi
                    </Typography>
                </div>
                <div className="col-start-3 col-span-1">
                    <Typography className="md:text-3xl text-xl pb-2 flex">
                        AboutMe3
                        <Link to="https://github.com/daduuu/AboutMe3">
                            <ArrowTopRightOnSquareIcon className="text-blue-900 h-4 w-4 lg:h-5 lg:w-5 lg:m-2 m-1 shrink-0"/>
                        </Link>
                    </Typography>
                    <Typography className="md:text-lg text-xs">
                        Hi
                    </Typography>
                </div>
                <div className="col-start-2 col-span-1">
                    <Typography className="md:text-3xl text-xl pb-2 flex">
                        MBTIPredictor
                        <Link to="https://github.com/daduuu/MBTIPredictor">
                            <ArrowTopRightOnSquareIcon className="text-blue-900 h-4 w-4 lg:h-5 lg:w-5 lg:m-2 m-1 shrink-0"/>
                        </Link>
                    </Typography>
                    <Typography className="md:text-lg text-xs">
                        Hi
                    </Typography>
                </div>
                <div className="col-start-3 col-span-1">
                    <Typography className="md:text-3xl text-xl pb-2 flex">
                        Sudokle
                        <Link to="https://github.com/daduuu/Sudokle">
                            <ArrowTopRightOnSquareIcon className="text-blue-900 h-4 w-4 lg:h-5 lg:w-5 lg:m-2 m-1 shrink-0"/>
                        </Link>
                    </Typography>
                    <Typography className="md:text-lg text-xs">
                        Hi
                    </Typography>
                </div>
                <div className="col-start-2 col-span-1">
                    <Typography className="md:text-3xl text-xl pb-2 flex">
                        Radix Tree
                        <Link to="https://github.com/daduuu/MBTIPredictor">
                            <ArrowTopRightOnSquareIcon className="text-blue-900 h-4 w-4 lg:h-5 lg:w-5 lg:m-2 m-1 shrink-0"/>
                        </Link>
                    </Typography>
                    <Typography className="md:text-lg text-xs">
                        Hi
                    </Typography>
                </div>
                
                
                
        
                    
            </div>
            <div className="flex justify-center p-5">
                <Button color="gray" className="m-2 normal-case"  onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                    <Link to="/ContactMe">
                        {label}
                    </Link>
                
                </Button>
            </div>
        </FadeIn>
    
        
    );


}