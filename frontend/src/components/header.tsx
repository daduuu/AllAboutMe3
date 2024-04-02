import { Typography } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import { IconButton, Collapse } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function Header() {


  const [showMenu, setShowMenu] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);

  useEffect(() => {
    handleWindowResize();
  }, []);

  const handleWindowResize = () =>{
    if (window.innerWidth < 960){
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  }


 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);




  return (
      <div className="w-full flex justify-between py-3 place-items-center px-7 bg-black">
          <div className="LEFT flex">
            <div className="flex place-items-center">
              <Typography className="text-white" variant="lead">
                David Du
              </Typography>
            </div>

          </div>
          <div className={`RIGHT gap-5 ${showMenu ? 'flex' : 'hidden'}`}>
            <Typography className="text-white" variant="lead">
              <Link to="/">Home</Link>
            </Typography>
            <Typography className="text-white" variant="lead">
              <Link to="/AboutMe">About Me</Link>
            </Typography>
            <Typography className="text-white" variant="lead">
              <Link to="/Projects">Projects</Link>
            </Typography>
            <Typography className="text-white" variant="lead">
              <Link to="/ContactMe">Contact Me</Link>
            </Typography>
          
          </div>
          <div className={`RIGHT gap-5 ${!showMenu ? 'flex' : 'hidden'}`}>
            <Collapse open={showDrawer}>
              <Typography className="text-white" variant="lead">
                <Link to="/">Home</Link>
              </Typography>
              <Typography className="text-white" variant="lead">
                <Link to="/AboutMe">About Me</Link>
              </Typography>
              <Typography className="text-white" variant="lead">
                <Link to="/Projects">Projects</Link>
              </Typography>
              <Typography className="text-white" variant="lead">
                <Link to="/ContactMe">Contact Me</Link>
              </Typography>
              </Collapse>
              <IconButton
                  variant="text"
                  className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                  ripple={false}
                  onClick={() => setShowDrawer(!showDrawer)}
                >
                  {showDrawer ? (
                    <XMarkIcon className="h-6 w-6 " strokeWidth={2} stroke="white"/>
                  ) : (
                    <Bars3Icon className="h-6 w-6 " strokeWidth={2} stroke="white"/>
                  )}
                </IconButton>
            
            
          
          </div>

          
           
      </div>
  );
}