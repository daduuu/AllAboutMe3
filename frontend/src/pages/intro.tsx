import { TypeAnimation } from 'react-type-animation';
import FadeIn from "react-fade-in";
import { Link } from "react-router-dom";
import { Button, Typography } from '@material-tailwind/react';
import { useState } from 'react';
import type { ButtonProps } from "@material-tailwind/react";
import type { TypographyProps } from "@material-tailwind/react";

export default function Intro() {
    const [label, setLabel] = useState('Learn More About Me!');

    const handleMouseEnter = () => setLabel("Learn More About Me! \u00bb");
    const handleMouseLeave = () => setLabel("Learn More About Me!");


    return (
        <div className="flex h-screen justify-center items-center bg-code bg-no-repeat bg-cover  bg-fixed">
            <div className="grid grid-rows-3 place-items-center gap-y-5">
                <div>
                    <FadeIn>
                        <TypeAnimation
                            sequence={[
                                'Hello! I\'m David Du',
                                200
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={1}
                            className="md:text-6xl text-3xl mx-3 text-white"
                        />
                    </FadeIn>
                </div>
                <div>
                    <FadeIn delay={1700}>
                        <Typography className="md:text-2xl text-xl mx-3 text-white">
                            Software Developer
                        </Typography>
                    </FadeIn> 
                </div>
                <div>
                    <FadeIn delay={2000}>
                        <Link to="/AboutMe">
                            <Button className="mx-2 md:text-lg text-base normal-case" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>{label}</Button>
                        </Link>

                    </FadeIn>
                </div>
            </div>
        </div>
    );


}