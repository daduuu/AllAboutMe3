
import { Button, Typography } from "@material-tailwind/react";
import FadeIn from "react-fade-in";
import { useState } from "react";
import type { ButtonProps } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/20/solid";


export default function ContactMe() {


    


    return (
        <FadeIn>
            <div className="pt-5 justify-center place-items-center flex">
                    <Typography className="md:text-5xl text-2xl pt-5">
                        Contact Me
                    </Typography>
                    
            </div>
            <div className="grid grid-cols-6 p-7">
                
                
                
                <div className="col-start-3 col-span-1">
                    gmail
                </div>
                <div className="col-start-4 col-span-1">
                    linkedin
                </div>
                <div className="col-start-5 col-span-1">
                    resume
                </div>
                
                
                
        
                    
            </div>
         
        </FadeIn>
    
        
    );


}